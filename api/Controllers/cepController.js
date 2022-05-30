import { apiCEP } from "../index";

export default APICEP = new Object({
  
  get(cep) {
      const get = apiCEP.get(`/${cep}/json`).then(({data}) => {
          return data
      }).catch((error) => {
        const errorJSON = console.log("api cep error",error)
        return errorJSON
      })

      return get
  },

});