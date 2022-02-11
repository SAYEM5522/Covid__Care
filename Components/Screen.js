import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import LocationScreen from '../Screen/LocationScreen';
import ProfileScreen from '../Screen/ProfileScreen';
const {width,height}=Dimensions.get('window');
console.log(width,height)
const TabBarStyle={
  position: 'absolute',
  backgroundColor: '#fff',
  left:20,
  right:20,
  bottom:20,
  height:height/11,
  borderRadius:10,
}
const Tab = createBottomTabNavigator();
const Screen = () => {
  return (
    
    <NavigationContainer>
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerShown:false,
      tabBarStyle:TabBarStyle,
    }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="LocationScreen" component={LocationScreen}   />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen}   />

    </Tab.Navigator>
  </NavigationContainer>
  
  )
}

export default Screen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 700,
    width: 410,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
})