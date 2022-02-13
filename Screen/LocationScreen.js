import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from '../Components/LocationScreen/Location';
const LocationStack = createNativeStackNavigator();
const LocationScreen = () => {
  return (
    <LocationStack.Navigator>
    <LocationStack.Screen name="LocationScreen" component={Location} options={{headerShown:false}} />
    </LocationStack.Navigator>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})