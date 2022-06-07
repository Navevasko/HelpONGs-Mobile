import axios from "axios";

const api = axios.create({
  baseURL: "http://10.107.144.31:3131",
});

const apiExterna = axios.create({
  baseURL: "https://publica.cnpj.ws/cnpj",
});

export {api, apiExterna}
