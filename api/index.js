import axios from "axios";

const api = axios.create({
  baseURL: "http://10.107.144.19:3131",
});

export {api}