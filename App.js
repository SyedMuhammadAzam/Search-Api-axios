import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/Screens/SearchScreen';
import ResultShow from './src/Screens/ResultsShow';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Business Search"  component={SearchScreen}/>
            <Stack.Screen name="ResultShow"  component={ResultShow}/>
          </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
