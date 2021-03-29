import _groupBy from "lodash/groupBy";
import _keys from "lodash/keys";
import { v4 as uuid } from "uuid";
import _map from "lodash/map";
import _compact from "lodash/compact";
import { database } from "../database";

const dataToValue = (data) => _map(data, (item) => ({ id: item, value: item }));

class ProductService {
  db = database();

  productCollection = this.db.ref("products");

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

  async createProduct(data, onSuccess, onFail) {
    const newProductId = uuid();
    await this.db
      .ref("products/" + newProductId)
      .set(data)
      .then(() => onSuccess())
      .catch((err) => onFail(err));
  }
}

export default new ProductService();
