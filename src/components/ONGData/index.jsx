import { View, Text, Image, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import { Menu, Provider } from "react-native-paper";

const ONGData = ({ image, name, date, setMenu }) => {
  const formatDate = useCallback((dateTime) => {
    let dateString;
    let fullString;

    const date = new Date();

    const data = dateTime.split("T")[0];

    const year = data.split("-")[0];
    const month = data.split("-")[2].split("T")[0];
    const day = data.split("-")[1];

    const time = dateTime.split("T")[1].substr(0, 5);

    if (year == date.getFullYear()) {
      dateString = `${day}/${month}`;
    } else {
      dateString = `${day}/${month}/${year}`;
    }

    const now = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    if (dateString != now) {
      fullString = `${time}`;
    } else {
      fullString = `${dateString} ás ${time}`;
    }

    return fullString;
  });

  return (
    <View style={styles.containerONGData}>
      <View>
        <Image source={{ uri: image }} style={styles.ONGPFP} />
      </View>

      <View style={styles.ContainerONGDataText}>
        <Text style={styles.ONGDataName}>{name}</Text>
        <Text style={styles.ONGDataDate}>{formatDate(date)}</Text>
      </View>

      <Icon
        name="more-vertical"
        size={30}
        style={styles.icon}
        onPress={() => {
          setMenu(true);
        }}
      />
    </View>
  );
};

ONGData.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  date: PropTypes.string,
};

ONGData.defaultProps = {
  image: require("../../assets/img/User.png"),
};

export default React.memo(ONGData);
