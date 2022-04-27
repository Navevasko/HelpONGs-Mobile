import { Text, View, ScrollView, StatusBar, Picker } from 'react-native'
import React, {useState} from 'react'
import Menu from '../../components/navBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import InputPesquisar from '../../components/inputPesquisar'
import CardDoar from '../../components/cardDoar'
import Select from '../../components/Select'


export default function Doar() {
  const [selectedValue, setSelectedValue] = useState();
  const [pesquisa, setPesquisa] = useState();

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
        {/* <InputPesquisar
          color="theme.colors.black"
          size={25}
          placeholder="Pesquise por uma ONG"
          onChangeText={(text) => {
            setPesquisa(text);}
          }

        /> */}
      </View>
      <View style={styles.containerSelectEstado}>
      <Text style={styles.txtTituloEstado}>Estados</Text>
      <Select options="ola" onChangeSelect={(id) => alert(id)}/>
      </View>
      <View style={styles.containerCardsDoar}>
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

