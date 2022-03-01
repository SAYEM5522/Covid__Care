import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import Authentication from "./Components/Authentication/Authentication"
import RootScreen from './Components/RootScreen';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  const authentication=true;
  useEffect(() => {
    SplashScreen.hide();
  },[])
  return (
    <GestureHandlerRootView style={styles.hello}>
      
        <RootScreen/>
      
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  hello:{
    flex:1
  },
 

});
