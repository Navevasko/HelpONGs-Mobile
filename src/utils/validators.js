import Ong from '../../api/ongController'

const ValidateCadastro = new Object({
  Ong(StringCNPJ, Email, Senha, ConfirmSenha) {
    const error = ""
    const CNPJ = Ong.trueCNPJ(StringCNPJ)

    if(CNPJ != "" && Email != "" && Senha != "" && ConfirmSenha != ""){
        if(Email.includes("@")){
            if(Senha == ConfirmSenha){
                if(Email.includes("`", "'", '"', "˜", "{", "}", "[", "]", "|")){
                    
                }
            }
            else {
                error = "As senhas não coincidem"
                return error;
            }
        }
        else{
            error = "Email inválido"
            return error;
        }
    }
    else{
        error = "Campos vazios"
        return error
    }
  },
});


export default (ValidateCadastro)