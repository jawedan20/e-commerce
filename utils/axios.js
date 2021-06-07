import axios from "axios";
const baseURL = "http://127.0.0.1:8000"

const CancelToken = axios.CancelToken;
export const source = CancelToken.source();

export const axiosReg = axios.create({
  baseURL ,
  headers: {
    "Content-Type": "application/json"
  },
});

export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: "include"
});