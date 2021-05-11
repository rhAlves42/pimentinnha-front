import querystring from "query-string";

const locationSearch =
  typeof window !== "undefined" ? window.location.search : "";
export const getUrlParams = () => querystring.parse(locationSearch);
