import firebaseInstance from "../database";
import { getDataFromStorage, setDataToStorage } from "../utils/localStorage";
import { ERRORS_FIREBASE } from "../utils/errorsFirebase";

class AuthService {
  user = getDataFromStorage({ dataName: "user" });

  auth() {
    return firebaseInstance().auth();
  }

  login = async ({ email, password, onError, onSuccess }) => {
    await this.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        this.auth().onAuthStateChanged((userAuth) => {
          setDataToStorage({ dataName: "user", dataValue: userAuth });
          onSuccess(userAuth)
        })
      )
      .catch((error) => {
        const { code } = error;
        onError(ERRORS_FIREBASE[code]);
      });
  };
}

export default new AuthService();
