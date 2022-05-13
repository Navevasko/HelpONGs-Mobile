const cnpjMask = (CNPJ) => {
  return CNPJ.replace(/\D+/g, "") // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2") // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura os dois últimos 2 números, com um - antes dos dois números
};

const dateMask = (Date) => {
  return Date.replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
};

const timeMask = (Time) => {
  return Time.replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1:$2")
    .replace(/(\d{2})(\d)/, "$1:$2");
};

const emailMask = (Email) => {
  return Email.replace(/[\[\]}!'-,?><|://#"%$°ºª§\\;&*()'ˆß+={]/g, "").replace(
    /(\d{})/,
    ""
  );
};

const nameMask = (Nome) => {
  return Nome.replace(/[\[\]}.!'-@,><|://#"%$°ºª§\\;&*'"()_+={]/g, "").replace(
    /[^\D]/g,
    ""
  );
};

const passwordMask = (Senha) => {
  return Senha.replace(/[\[\]}.',><|://"°ºª§\\;&'"()_+={]/g, "");
};

const cepMask = (cep) => {
  return cep.replace(/\D+/g, "").replace(/(\d{5})(\d)/, "$1-$2");
};

const numberMask = (Number) => {
  return Number.replace(/\D+/g, "");
};

export {
  cnpjMask,
  emailMask,
  nameMask,
  passwordMask,
  dateMask,
  timeMask,
  cepMask,
  numberMask,
};
