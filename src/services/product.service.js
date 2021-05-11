import _groupBy from "lodash/groupBy";
import _keys from "lodash/keys";
import { v4 as uuid } from "uuid";
import _map from "lodash/map";
import _filter from "lodash/filter";
import _compact from "lodash/compact";
import { database } from "../database";

const dataToValue = (data) => _map(data, (item) => ({ id: item, value: item }));

class ProductService {
  db = database();

  productCollection = this.db.ref("products");
  productHistoricCollection = this.db.ref("product-historic");

  async getOptions() {
    const products = await this.listProduct();
    const brands = _compact(
      _keys(_groupBy(products, (product) => product.marca))
    );
    const category = _compact(
      _keys(_groupBy(products, (product) => product.categoria))
    );
    return {
      brands: dataToValue(brands),
      category: dataToValue(category),
    };
  }

  async listProduct() {
    return await this.productCollection.once("value").then((snapshot) => {
      const data = snapshot.val();
      const productArray = _map(_keys(data), (productKey) => data[productKey]);
      return productArray;
    });
  }

  async createProduct(data, onSuccess, onError) {
    const newProductId = uuid();
    return await this.db
      .ref("products/" + newProductId)
      .set({ ...data, id: newProductId })
      .then(async () => {
        await this.createProductHistoric(
          { ...data, productId: newProductId },
          () => {},
          () => {}
        );
        return onSuccess();
      })
      .catch((err) => onError(err));
  }

  async getProduct(productId, onSuccess, onError) {
    await this.db.ref(`products/${productId}`).on("value", (snapshot) => {
      const product = snapshot.val();
      if (!product) {
        onError("Produto não encontrado");
        return;
      }
      onSuccess(product);
      return;
    });
  }

  async deleteProduct(productId, onSuccess, onError) {
    await this.db
      .ref(`products/${productId}`)
      .remove()
      .then((res) => onSuccess(res))
      .catch((err) => onError(err));
  }

  async createProductHistoric(
    { productId, precoUnd, precoCompra, qtdComprada },
    onSuccess,
    onError
  ) {
    const newHistoricId = uuid();
    this.db
      .ref("product-historic/" + newHistoricId)
      .set({
        productId,
        precoUnd,
        precoCompra,
        qtdComprada,
        dataAquisicao: new Date().toISOString(),
      })
      .then(() => onSuccess())
      .catch((err) => onError(err));
  }

  async getProductHistoric(productId, onSuccess, onError) {
    return await this.productHistoricCollection
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();
        const historicArray = _map(
          _keys(data),
          (historicKey) => data[historicKey]
        );
        console.log('historicKey ->', historicArray)
        onSuccess(
          _filter(historicArray, (historic) => historic.productId === productId)
        );
      })
      .catch((err) => onError(err));
  }
}

export default new ProductService();
