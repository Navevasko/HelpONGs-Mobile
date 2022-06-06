import { View, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import PropTypes from "prop-types";
import { theme } from "../../global/styles/theme";

const FileContainer = ({ fileArray }) => {
  let fileArrayLength;

  if (fileArray.length !== 0) {
    fileArrayLength = fileArray.length;
  }

  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.filesContainer}>
      {fileArrayLength >= 1 && (
        <Image
          source={{ uri: fileArray[0].url }}
          style={[
            fileArrayLength === 1 ? styles.mainFile : styles.altMainFile,
            {
              marginBottom: fileArrayLength === 1 ? 20 : 0,
            },
          ]}
          onLoad={() => {
            setLoading(false);
          }}
        />
      )}

      {fileArrayLength === 2 && (
        <View>
          <Image
            source={{ uri: fileArray[1].url }}
            style={styles.twoFiles}
            onLoad={() => {
              setLoading(false);
            }}
          />
        </View>
      )}

      {fileArrayLength === 3 && (
        <View>
          <Image
            source={{ uri: fileArray[1].url }}
            style={[styles.threeFiles, { borderTopRightRadius: 5 }]}
            onLoad={() => {
              setLoading(false);
            }}
          />
          <Image
            source={{ uri: fileArray[1].url }}
            style={[
              styles.threeFiles,
              { marginTop: 5, borderBottomRightRadius: 5 },
            ]}
            onLoad={() => {
              setLoading(false);
            }}
          />
        </View>
      )}
    </View>
  );
};

FileContainer.propTypes = {
  fileArray: PropTypes.array,
};

export default React.memo(FileContainer);
