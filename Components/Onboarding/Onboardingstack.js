import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Authentication from '../Authentication/Authentication'
import Onboarding from './Onboarding'

const Onboardingstack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName='Onboarding' >
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
          <Stack.Screen name="Authentication" component={Authentication} options={{headerShown:false,}} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Onboardingstack

const styles = StyleSheet.create({})