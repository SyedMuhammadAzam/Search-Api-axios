import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";

const SearchBar = ({ term, onChange , onTermChange }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(newTerm) => onChange(newTerm)}
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onTermChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#d3d3d3",
    height: 50,
    margin: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    borderColor: "transparent",
  },
});
