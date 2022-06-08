import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { styles } from "./style";

export default function SearchResult({ searchData }) {
  // console.log(searchData);

  return (
    // <FlatList
    //   nestedScrollEnabled={true}
    //   style={[styles.container, { padding: searchData.length !== 0 ? 20 : 0 }]}
    //   data={searchData}
    //   keyExtractor={Math.random}
    //   renderItem={({ item }) => {
    //     return (
    //       <>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //         <Text> {item.nome} </Text>
    //       </>
    //     );
    //   }}
    // />

    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{ padding: 20 }}
    >
      {searchData.map((item) => {
        return (
          <View style={styles.cardContainer} key={item.idOng}>
            <Image source={{ uri: item.foto }} style={styles.image} />
            <Text style={styles.name}> {item.nome} </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
