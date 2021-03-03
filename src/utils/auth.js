import _get from "lodash/get";
import { getDataFromStorage } from "./localStorage";

export const isLoggedIn = () => {
  const user = getDataFromStorage({ dataName: "user" });
  const uuid = _get(user, "uid", "");
  return !!user && !!uuid;
};
