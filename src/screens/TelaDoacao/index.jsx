import { Text, View, ScrollView, StatusBar, Picker } from 'react-native'
import React, {useState} from 'react'
import Menu from '../../components/navBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import InputUnderline from '../../components/inputCadastro'
import CardDoar from '../../components/cardDoar'


export default function Doar() {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <SafeAreaView>
    <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
    <Menu/>
    <ScrollView style={styles.container}>
      <View style={styles.containerOpcoes}>
        <Text style={styles.txtOpcoes}>Recentes</Text>
        <Text style={styles.txtOpcoes}>Favoritos</Text>
        <Text style={styles.txtOpcoes}>Mais Famosas</Text>
      </View>
      <View style={styles.containerPesquisa}>
        <View style={styles.boxFilter}>
          <Text>Filter</Text>
        </View>
        <InputUnderline/>
      </View>
      <View style={styles.containerSelectEstado}>
      <Text>Estados</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.select}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Selecione um estado" value="" />
        <Picker.Item label="São Paulo" value="sp" />
      </Picker>
      </View>
      <View style={styles.contanerCardsDoar}>
      <CardDoar/>
      <CardDoar/>
      <CardDoar/>
      <CardDoar/>
      <CardDoar/>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

