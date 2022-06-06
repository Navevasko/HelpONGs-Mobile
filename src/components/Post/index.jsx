import { View, Text, Image, TextInput, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import Icon from "react-native-vector-icons/Feather";
import CardContainer from "../CardContainer";
import ONGData from "../ONGData";
import Options from "../Options";
import FileContainer from "../FileContainer";
import PropTypes from "prop-types";
import { format } from "../../global/styles/format";
import ModalMenu from "../ModalMenu";
import { api } from "../../../api";
import Comment from "../Comment";

const Post = ({
  idPost,
  fileArray,
  desc,
  ONGdata,
  date,
  setIdPost,
  setIdOng,
  setEditar,
  setExcluir,
  setInfo,
}) => {
  const [Menu, setMenu] = useState(false);
  const [CommentText, setCommentText] = useState("");
  const [Comments, setComments] = useState([]);
  const [sentComment, setSentComment] = useState(false);

  const handleComment = () => {
    if (CommentText !== "") {
      api
        .post("/comment", {
          idPost: idPost,
          idUsuario: 1,
          comentario: {
            texto: CommentText,
          },
        })
        .then((data) => {
          ToastAndroid.show(
            "Comentário enviado com sucesso",
            ToastAndroid.SHORT
          );
          setCommentText("");
          setSentComment(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    api
      .get(`/comment/ong/${idPost}`)
      .then(({ data }) => {
        setComments(data.data.tbl_comentario);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sentComment]);

  return (
    <>
      {Menu && (
        <ModalMenu
          setMenu={(bool) => {
            setMenu(bool);
          }}
          setExcluir={(bool) => {
            setExcluir(bool);
          }}
          setEditar={(bool) => {
            setEditar(bool);
          }}
        />
      )}
      <CardContainer key={idPost}>
        <ONGData
          name={ONGdata.nome}
          date={date}
          image={ONGdata.foto}
          setMenu={(bool) => {
            setMenu(bool);
          }}
        />

        <View style={styles.postData}>
          <Text style={styles.desc}>{desc}</Text>

          {fileArray && <FileContainer fileArray={fileArray} />}

          <Options idPost={idPost} />

          {Comments &&
            Comments.map((item) => {
              return (
                <Comment
                  key={Math.random()}
                  comentario={item.comentario}
                  nome={item.tbl_usuario.nome}
                  date={item.dateDeCriacao}
                />
              );
            })}

          <View style={[format.row, styles.containerComment]}>
            <Image
              source={require("../../assets/img/Avatar.png")}
              style={styles.PFP}
            />

            <TextInput
              style={styles.input}
              value={CommentText}
              placeholder={"Digite um comentário..."}
              selectionColor={theme.colors.primaryFaded}
              onChangeText={(text) => {
                setCommentText(text);
              }}
            />

            <Icon
              name="send"
              color={theme.colors.primary}
              size={30}
              onPress={handleComment}
            />
          </View>
        </View>
      </CardContainer>
    </>
  );
};

Post.propTypes = {
  fileArray: PropTypes.array,
  desc: PropTypes.string,
  ONGdata: PropTypes.shape({
    nome: PropTypes.string,
    foto: PropTypes.string,
    banner: PropTypes.string,
    tbl_login: PropTypes.shape({
      idLogin: PropTypes.number,
      email: PropTypes.string,
      senha: PropTypes.string,
      accountStatus: PropTypes.bool,
    }),
  }),
};

export default React.memo(Post);
