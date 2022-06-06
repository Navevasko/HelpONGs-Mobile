import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { styles } from "./style";

export default function SearchResult({ searchData }) {
  // console.log(searchData);

  return (
    <FlatList
      style={[styles.container, { padding: searchData.length !== 0 ? 20 : 0 }]}
      data={searchData}
      keyExtractor={Math.random}
      renderItem={(item) => {
        <Text> {item} </Text>;
      }}
    />
  );
}
