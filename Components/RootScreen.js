import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Screen from './Screen'
import InfectionTracker from './HealthStatusScreen/InfectionTracker/InfectionTracker'
import IsolationTracker from './HealthStatusScreen/IsolationTracker/IsolationTracker'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InfectionRate from "../Components/HealthStatusScreen/InfectionTracker/InfectionRate"
import Update from './HomeScreen/Update'
import { Provider } from 'react-redux'
import store from './app/store'
const RootScreen = () => {
const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
  <Stack.Navigator >
      <Stack.Screen name="Screen" component={Screen} options={{headerShown:false}} />
      <Stack.Screen name="InfectionTracker" component={InfectionTracker} options={{headerShown:false}}  />
      <Stack.Screen name="IsolationTracker" component={IsolationTracker} />
      <Stack.Screen name="Update" component={Update} options={{headerShown:false}} />
      <Stack.Screen name="InfectionRate" component={InfectionRate} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default RootScreen

const styles = StyleSheet.create({})