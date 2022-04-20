import { api, apiExterna } from "./index";

export default Ong = new Object({
  trueCNPJ(CNPJ) {
    return (trueCNPJ =
      CNPJ.substring(0, 2) +
      CNPJ.substring(3, 6) +
      CNPJ.substring(7, 10) +
      CNPJ.substring(11, 15) +
      CNPJ.substring(16, 18));
  },

  searchCNPJ(CNPJ) {
    const response = apiExterna
      .get(`/${CNPJ}`)
      .then((data) => {
        if (data.nome_fantasia == null) {
          return data.nome_fantasia
          console.log(data.nome_fantasia);
        } else {
          return data.razao_social;
          console.log(Nome);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    if (response) {
      return true;
    } else {
      return false;
    }
  },

  post(Nome, CNPJ, Email, Senha) {
    api
      .post("/ong/pre-register", {
        nome: Nome,
        cnpj: CNPJ,
        email: Email,
        senha: Senha,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
