import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { useNavigation } from "@react-navigation/core";

const ResultList = ({ title, result }) => {
  const navigation = useNavigation();

  if (!result.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {/* <Text >Result : {result.length} </Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResultShow", {
                itemId: item.id,
              })
            }
          >
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {},
});
