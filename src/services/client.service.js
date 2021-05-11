import _groupBy from "lodash/groupBy";
import _keys from "lodash/keys";
import { v4 as uuid } from "uuid";
import _map from "lodash/map";
import _filter from "lodash/filter";
import _compact from "lodash/compact";
import { database } from "../database";


class ClientService {
  db = database();

  clientCollection = this.db.ref("client");

  async getOptions() {
    const clients = await this.listClient();
    return clients;
  }

  async listClient() {
    return await this.clientCollection.once("value").then((snapshot) => {
      const data = snapshot.val();
      const clientArray = _map(_keys(data), (clientKey) => data[clientKey]);
      return clientArray;
    });
  }

  async createClient(data, onSuccess, onError) {
    const newClientId = uuid();
    return await this.db
      .ref("client/" + newClientId)
      .set({ ...data, id: newClientId })
      .then(async () => onSuccess())
      .catch((err) => onError(err));
  }

  async getClient(clientId, onSuccess, onError) {
    await this.db.ref(`client/${clientId}`).on("value", (snapshot) => {
      const client = snapshot.val();
      if (!client) {
        onError("Cliente não encontrado");
        return;
      }
      onSuccess(client);
      return;
    });
  }

  async deleteClient(clientId, onSuccess, onError) {
    await this.db
      .ref(`client/${clientId}`)
      .remove()
      .then((res) => onSuccess(res))
      .catch((err) => onError(err));
  }
}

export default new ClientService();
