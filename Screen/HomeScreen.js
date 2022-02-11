import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/HomeScreen/Home';
const HomeStack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={Home} options={{headerShown:false}} />
    </HomeStack.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})