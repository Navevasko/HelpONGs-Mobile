import * as ImagePicker from "expo-image-picker";

export default handleGalery = async (setFile, setDisableButton, max) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsMultipleSelection: true,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.cancelled) {
    if (fileArray.length >= max) {
      setDisableButton(true);
      setFile([...fileArray, result]);
    } else {
      setFile([...fileArray, result]);
    }
  }
};
