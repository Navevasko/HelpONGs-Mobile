const cnpjMask = (CNPJ) => {
  return CNPJ.replace(/\D+/g, "") // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2") // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura os dois últimos 2 números, com um - antes dos dois números
};

const dateMask = (value) => {
  const date = new Date();
  value = value.replace(/\D+/g, "");

  if (value.substr(0, 2) > 31) {
    value = value.replace(/(\d{1})(\d)/, value.substr(0, 2) + "");
  }

  if (value.substr(2, 2) > 12) {
    value = value.replace(/(\d{3})(\d)/, value.substr(0, 3) + "");
  }

  // console.log(value.substr(3, 4));
  if (value.substr(4, 4) < date.getFullYear()) {
    value = value.replace(/(\d{7})(\d)/, value.substr(0, 6) + "");
  }

  value = value.replace(/(\d{2})(\d)/, "$1/$2");
  value = value.replace(/(\d{2})(\d)/, "$1/$2");

  return value;
};

const timeMask = (Time) => {
  Time = Time.replace(/\D+/g, "");
  if (Time.substr(0, 2) > 23) {
    Time = Time.replace(/(\d{1})(\d)/, Time.substr(0, 1) + "");
  }
  if (Time.substr(2, 2) >= 60) {
    Time = Time.replace(/(\d{3})(\d)/, Time.substr(0, 2) + "");
  }

  Time = Time.replace(/(\d{2})(\d)/, "$1:$2");
  Time = Time.replace(/(\d{2})(\d)/, "$1:$2");

  return Time;
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

const cepMask = (CEP) => {
  return CEP.replace(/\D+/g, "").replace(/(\d{5})(\d)/, "$1-$2");
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
