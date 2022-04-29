// import { ToastAndroid } from "react-native";
// import { api } from "./index";

// async function post(email, senha) {
//   if (email == "" || senha == "") {
//     ToastAndroid.show(
//       "Por favor preencha todos os campos!",
//       ToastAndroid.SHORT,
//       ToastAndroid.CENTER
//     );
//   } else {
//     api
//       .post(`/ong/login`, {
//         email: email,
//         senha: senha,
//       })
//       .then((response) => {
//         // console.log(response.data);
//         if (response.status == "200") {
//           ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
//           return true;
//         }
//       })
//       .catch((error) => {
//         const errorJSON = JSON.stringify(error);
//         if (errorJSON.includes("404")) {
//           ToastAndroid.show(
//             "Senha ou email incorretos, por favor tente novamente!",
//             ToastAndroid.SHORT,
//             ToastAndroid.CENTER
//           );
//         } else {
//           // ToastAndroid.show("Erro", ToastAndroid.SHORT, ToastAndroid.CENTER);
//           console.log(error);
//         }
//       });
//   }
// }

// export default post;