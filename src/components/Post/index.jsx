import { View, Text, Image } from "react-native";
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
      <CardContainer>
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
