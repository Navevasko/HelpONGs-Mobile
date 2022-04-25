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

  post(CNPJ, Email, Senha) {
    // Pegando os dados da ONG pelo CNPJ
    const get = apiExterna
      .get(`/${CNPJ}`)
      .then(({ data }) => {
        let nome = "";

        // Pegando o nome pela razao social ou pelo nome fantasia
        if (data.razao_social == null) {
          nome = data.nome_fantasia;
        } else if (data.nome_fantasia == null) {
          nome = data.razao_social;
        }

        // Fazendo post de pré cadastro no banco
        const response = api
          .post("/ong/pre-register", {
            nome: nome,
            cnpj: CNPJ,
            email: Email,
            senha: Senha,
          })
          .then((data) => {
            const dataJSON = JSON.stringify(data);
            if(dataJSON.includes("200")){
              return dataJSON;
            }
          })
          .catch((error) => {
            const errorJSON = JSON.stringify(error);
            if (errorJSON.includes("200")) {
              return errorJSON;
            }
          });

          return response
      })
      .catch((error) => {
        const errorJSON = JSON.stringify(error);
        if (errorJSON.includes("429")) {
          return errorJSON
        }
      });
      return get
  },
});
