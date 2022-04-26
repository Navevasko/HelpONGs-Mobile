const ValidateCadastro = new Object({
  Ong(CNPJ, Email, Senha, ConfirmSenha) {
    let error = ""
    const sucess = "oi"

    if(CNPJ != "" && Email != "" && Senha != "" && ConfirmSenha != ""){
        
        if(Email.includes("@")){
            if(Senha == ConfirmSenha){
                return sucess
            }
            else {
                error = "erro de senha"
                return error;
            }
        }
        else{
            error = "erro de email";
            return error;
        }
    }
    else{
        error = "erro de campos";
        return error
    }
  },
});


export default (ValidateCadastro)