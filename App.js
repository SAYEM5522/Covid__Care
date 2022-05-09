import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import Authentication from "./Components/Authentication/Authentication"
import RootScreen from './Components/RootScreen';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import store from './Components/app/store';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[])
  return (
    <Provider store={store}>

    <GestureHandlerRootView style={styles.hello}>
      
        <RootScreen/>
      
    </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  hello:{
    flex:1
  },
 

});
