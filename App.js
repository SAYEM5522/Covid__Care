import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import Screen from './Components/Screen';
const App = () => {
  // const Token="pk.eyJ1Ijoic2F5ZW01NTIyIiwiYSI6ImNremZxdDFjbzNraTIydm8ydmY4enljb3EifQ.-Tm4Vg6gLHSqEVjOmEWhjA"
  return (
    <GestureHandlerRootView style={styles.hello}>
           <Screen/>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  hello:{
    flex:1
  },
 

});
