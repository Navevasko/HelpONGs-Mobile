import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function CardDoar({data}) {
  const [favoritar, setFavoritar] = useState("heart-o");
  const [state, setState] = useState(true)

  // console.log(data);

  const { foto } = data;

  console.log("data", data, "\nfoto",foto);

  return (
    <View style={styles.container}>
    <Icon
        name={favoritar}
        size={17}
        style={styles.icon}
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
          source={{uri: foto}}
          style={styles.imgOng}
      />
      <TouchableOpacity style={styles.btnDoar}>
          <Text>Doar</Text>
      </TouchableOpacity>
    </View>
  )
}

