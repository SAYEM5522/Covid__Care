import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import LocationScreen from '../Screen/LocationScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import TabBar from './TabBar';
import HealthStatus from './HealthStatusScreen/HealthStatus';

const Tab = createBottomTabNavigator();
const Screen = () => {
  return (
    
    <NavigationContainer>
    <Tab.Navigator 
    initialRouteName="Home"
    tabBar={props => <TabBar {...props}  />}
    screenOptions={{
      headerShown:false,
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Health" component={HealthStatus}   />
      <Tab.Screen name="Location" component={LocationScreen}   />
      <Tab.Screen name="Profile" component={ProfileScreen}   />


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