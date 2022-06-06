import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.111:3131",
});

const apiExterna = axios.create({
  baseURL: "https://publica.cnpj.ws/cnpj",
});

const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

export { api, apiExterna, apiCEP };
