import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../global/styles/theme";
import { format } from "../../global/styles/format";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";

export default function ModalMenu({ setMenu, setEditar, setExcluir }) {
  return (
    <View
      style={styles.close}
      onTouchStart={() => {
        setMenu(false);
      }}
    >
      <View style={styles.container}>
        <View
          style={[format.row, { marginBottom: 20 }]}
          onTouchStart={() => {
            setExcluir(true);
          }}
        >
          <Icon name={"trash-2"} size={30} />
          <Text style={styles.text}>Deletar</Text>
        </View>

        <View
          style={format.row}
          onTouchEnd={() => {
            setEditar(true);
          }}
        >
          <Icon name={"edit"} size={30} />
          <Text style={styles.text}>Editar</Text>
        </View>
      </View>
    </View>
  );
}
