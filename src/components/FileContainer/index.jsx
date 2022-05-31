import { View, Image } from "react-native";
import React from "react";
import { styles } from "./style";

export default function FileContainer({ fileArray }) {
  fileArray.map((file) => {
    // let a = file.lenght;
    // console.log(a);
  });

//   console.log(fileArray);
//   console.log(fileArray(data).lenght);

  if (fileArray.lenght) {
  }
  return (
    <View style={styles.filesContainer}>
      <Image source={fileArray[0].fileName} style={styles.file} />
      <View>
        <Image
          source={fileArray[1].fileName}
          style={[styles.altFile, { borderTopRightRadius: 5 }]}
        />
        <Image
          source={fileArray[2].fileName}
          style={[styles.altFile, { marginTop: 5, borderBottomRightRadius: 5 }]}
        />
      </View>
    </View>
  );
}
