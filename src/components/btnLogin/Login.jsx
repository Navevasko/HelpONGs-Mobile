import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import axios from "axios";

export default function BtnLogin({ email, senha }) {
  const baseUrl = "http://10.0.2.2:3131";
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    const response = await axios.post(`${baseUrl}/user/login?email=${email}&senha=${senha}`).then((data) => {
      console.log(data);
    });

    console.log(response);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onSubmit();
      }}
    >
      <View style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </View>
    </TouchableOpacity>
  );
}
