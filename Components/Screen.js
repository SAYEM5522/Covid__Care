import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import LocationScreen from '../Screen/LocationScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import TabBar from './TabBar';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather";
import HealthStatusScreen from '../Screen/HealthStatusScreen';

const Tab = createBottomTabNavigator();
const Screen = () => {
  return (
    
    <Tab.Navigator 
    initialRouteName="Home"
    tabBar={props => <TabBar {...props}  />}
    screenOptions={{
      headerShown:false,
    }}
    >
      <Tab.Screen name="Home"
       options={{
        tabBarIcon: ({color, size }) => (
        
        <Feather name="home" size={size} color={color}/>
      
        ),
      }}
      component={HomeScreen} />
      <Tab.Screen name="Health" 
        options={{
          tabBarIcon: ({ color, size, }) => (
          <Ionicons name="heart-outline" size={27} color={color} />

          ),
        }}
      component={HealthStatusScreen}   />
      <Tab.Screen name="Location"
        options={{
          tabBarIcon: ({ color, size }) => (
          <EvilIcons name="location" size={30} color={color} />
          ),
        }}
      component={LocationScreen}  
      
      />
      <Tab.Screen name="Profile" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      component={ProfileScreen}   />


    </Tab.Navigator>
  
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