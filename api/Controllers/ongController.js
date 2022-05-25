import { api, apiExterna } from "../index";

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
            if (dataJSON.includes("200")) {
              return dataJSON;
            }
          })
          .catch((error) => {
            const errorJSON = JSON.stringify(error);
            if (errorJSON.includes("400")) {
              return errorJSON;
            }
          });

        return response;
      })
      .catch((error) => {
        const errorJSON = JSON.stringify(error);
        if (errorJSON.includes("429")) {
          return errorJSON;
        } else if (errorJSON.includes("400")) {
          return "erro apiExterna";
        }
      });
    return get;
  },

  postPost(desc, fileArray, idOng) {
    let fileName;
    let fileType;

    const arrayPost = {
      idOng: idOng,
      descricao: desc,
      media: [],
    };
    fileArray.map((file) => {
      if (file.type === "image") {
        fileName = file.uri.split("/")[11];
        fileType = file.type + "/" + fileName.split(".")[1];
      } else if (file.type === "video") {
        fileName = file.uri.split("/")[11];
        fileType = file.type + "/" + fileName.split(".")[1];
      }
      arrayPost.media.push({
        fileName: fileName,
        base64: file.base64,
        type: fileType,
      });
    });

    const response = api
      .post("/post", arrayPost)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        return error;
      });

    return response;
  },

  postEvent(
    idOng,
    titulo,
    descricao,
    objetivo,
    candidatos,
    fileArray,
    endereco,
    dataHora,
    setLoading
  ) {
    let fileName;
    let fileType;

    setLoading(true);

    const arrayEvento = {
      idOng: idOng,
      evento: {
        titulo: titulo,
        dataHora: dataHora,
        objetivo: objetivo,
        descricao: descricao,
        candidatos: candidatos,
        numeroParticipantes: 0,
      },
      endereco: endereco,
      media: [],
    };

    // fileArray.map((file) => {
    //   if (file.type === "image") {
    //     fileName = file.uri.split("/")[11];
    //     fileType = file.type + "/" + fileName.split(".")[1];
    //   } else if (file.type === "video") {
    //     fileName = file.uri.split("/")[11];
    //     fileType = file.type + "/" + fileName.split(".")[1];
    //   }
    //   arrayEvento.media.push({
    //     fileName: fileName,
    //     base64: file.base64,
    //     type: fileType,
    //   });
    // });

    // console.log(arrayEvento);

    const result = api
      .post("/event", arrayEvento)
      .then(({ data }) => {
        setLoading(false);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        return error;
      });

    return result;
  },

  postVaga() {},
});
