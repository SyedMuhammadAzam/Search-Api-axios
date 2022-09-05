import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultList from "../Components/ResultList";
import SearchBar from "../Components/SearchBar";
import useResult from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResult();
  // console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter(result => {return result.price === price})
  }
  return (
    <>
    
    
      <SearchBar
        term={term}
        onChange={(newTerm) => setTerm(newTerm)}
        onTermChange={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView style={styles.scrollView} >
      <ResultList result={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultList result={filterResultsByPrice('$$')} title="Bit Pricer" />
      <ResultList result={filterResultsByPrice('$$$')} title="Big Spender!" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  scrollView:{
    // borderColor: 'blue',
    // borderWidth: 2
  }
});
