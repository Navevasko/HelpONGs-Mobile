import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.159:3131",
});

const apiExterna = axios.create({
  baseURL: "https://publica.cnpj.ws/cnpj",
});

export { api, apiExterna };
