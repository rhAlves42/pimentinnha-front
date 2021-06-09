export const getDataFromStorage = ({ dataName }) => {
  if (typeof window !== "undefined") {
    const rawData =  localStorage.getItem(dataName);
    const parsedData = JSON.parse(rawData);
    return parsedData;
  }
  return {};
};


export const setDataToStorage = ({ dataName, dataValue }) => {
  if (typeof window !== "undefined") {
    const stringfiedData = JSON.stringify(dataValue);y
    localStorage.setItem(dataName, stringfiedData);
  }
};
