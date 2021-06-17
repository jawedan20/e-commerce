import { isDataURL } from "./base64";

export const baseUrl = (url) => `http://127.0.0.1:8000${url}`;

export const srcImage = (str) => {
  if (!str) {
    return "https://drive.google.com/uc?id=1wGJLtZHyd9Bc_NfGgzEiajYYrymwGqIf&export=download";
  }
  if (isDataURL(str)) {
    return str;
  } else {
    return baseUrl(str);
  }
};
