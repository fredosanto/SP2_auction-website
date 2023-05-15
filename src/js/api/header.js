import * as storage from "../token/index.js";

export const header = (type) => {
  const token = storage.load("token");
  const header = {};

  if (type) {
    header["Content-Type"] = type;
  }

  if (token) {
    header.Authorization = `Bearer ${token}`;
  }

  return header;
};
