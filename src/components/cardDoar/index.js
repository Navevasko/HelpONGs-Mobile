import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function CardDoar() {
  const [favoritar, setFavoritar] = useState("heart-o");
  const [state, setState] = useState(true)
  return (
    <View style={styles.container}>
    <Icon
        name={favoritar}
        style={{color:"red"}}
        onPress={()=> {if (state == true) {
            setState(false);
            setFavoritar("heart-o");
          } else {
            setState(true);
            setFavoritar("heart");
          }
        }}
    />      
      <Image
          source={require('../../assets/img/capa-1200x450.jpeg')}
          style={styles.imgOng}
      />
      <TouchableOpacity style={styles.btnDoar}>
          <Text>Doar</Text>
      </TouchableOpacity>
    </View>
  )
}

