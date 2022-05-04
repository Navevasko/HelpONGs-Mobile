import { StyleSheet, Text, Modal, View } from 'react-native'
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { theme } from '../../global/styles/theme';


export default function Filter() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <Modal animationType="none" transparent style={{flex:1,backgroundColor:"grey",justifyContent:'center', alignItems:'center'}} >
    <View style={styles.container}>
        <Text>Categorias</Text>
        <View style={styles.checkboxContainer}>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
          <Text style={styles.label}>Assistencia Social</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container:{
    height:200,
    width:200,
    backgroundColor:theme.colors.primary,
    alignSelf:'center',
    justifyContent:"center"
  }
})