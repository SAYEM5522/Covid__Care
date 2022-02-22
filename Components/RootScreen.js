import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Screen from './Screen'
import InfectionTracker from './HealthStatusScreen/InfectionTracker/InfectionTracker'
import IsolationTracker from './HealthStatusScreen/IsolationTracker/IsolationTracker'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Update from './HomeScreen/Update'
const RootScreen = () => {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
  <Stack.Navigator >
      <Stack.Screen name="Screen" component={Screen} options={{headerShown:false}} />
      <Stack.Screen name="InfectionTracker" component={InfectionTracker}  />
      <Stack.Screen name="IsolationTracker" component={IsolationTracker} />
      <Stack.Screen name="Update" component={Update} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootScreen

const styles = StyleSheet.create({})