import { api } from "../index";

export default User = new Object({
  post(Nome, Email, Senha) {
    // Pegando os dados da ONG pelo CNPJ
    const response = api
      .post("/user/pre-register", {
        nome: Nome,
        email: Email,
        senha: Senha,
      })
      .then((data) => {
        const dataJSON = JSON.stringify(data);
        if (dataJSON.includes("200")) {
          return dataJSON;
        }
      })
      .catch((error) => {
        const errorJSON = JSON.stringify(error);
        if (errorJSON.includes("200")) {
          return errorJSON;
        }
      });

    return response;
  },

  getId(Id) {
    const get = api
      .get(`/user/${Id}`)
      .then(({ data }) => {
        return data.data;
      })
      .catch((error) => {
        return error;
      });
    return get;
  },
});
