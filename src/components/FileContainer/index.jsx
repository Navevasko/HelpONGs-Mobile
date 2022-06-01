import { View, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function FileContainer({ fileArray }) {
  let fileArrayLength;

  // console.log(fileArray);

  if (fileArray.length !== 0) {
    fileArrayLength = fileArray.length;
  }

  return (
    <View style={styles.filesContainer}>
      {fileArrayLength >= 1 && (
        <Image
          source={{ uri: fileArray[0].url }}
          style={fileArrayLength === 1 ? styles.mainFile : styles.altMainFile}
        />
      )}

      {fileArrayLength === 2 && (
        <View>
          <Image source={{ uri: fileArray[1].url }} style={styles.twoFiles} />
        </View>
      )}

      {fileArrayLength === 3 && (
        <View>
          <Image
            source={{ uri: fileArray[1].url }}
            style={[styles.threeFiles, { borderTopRightRadius: 5 }]}
          />
          <Image
            source={{ uri: fileArray[1].url }}
            style={[
              styles.threeFiles,
              { marginTop: 5, borderBottomRightRadius: 5 },
            ]}
          />
        </View>
      )}
    </View>
  );
}

FileContainer.propTypes = {
  fileArray: PropTypes.array,
};
