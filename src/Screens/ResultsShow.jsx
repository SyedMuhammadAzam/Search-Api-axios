import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import yelp from "../api/yelp.jsx";

const ResultShow = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.itemId;
  //  console.log(id.itemId);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  //  console.log("FInaly got",result);

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultShow;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250,
  },
});
