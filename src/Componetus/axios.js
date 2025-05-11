import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.in/api/products",
});
export default instance;
