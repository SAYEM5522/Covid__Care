import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import Authentication from "./Components/Authentication/Authentication"
import RootScreen from './Components/RootScreen';
import Onboarding from './Components/Onboarding/Onboarding';

const App = () => {
  const authentication=true;
  return (
    <GestureHandlerRootView style={styles.hello}>
      {/* {
        authentication?<RootScreen/>:<Authentication/>
      } */}
      <Onboarding/>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  hello:{
    flex:1
  },
 

});
