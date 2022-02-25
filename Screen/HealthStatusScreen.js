import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealthStatus from '../Components/HealthStatusScreen/HealthStatus';

const HealthStatusStack = createNativeStackNavigator();

const HealthStatusScreen = () => {
  return (
    <HealthStatusStack.Navigator >
      <HealthStatusStack.Screen name="HealthStatus" component={HealthStatus} options={{headerShown:false}} />
    </HealthStatusStack.Navigator>
  )
}

export default HealthStatusScreen

const styles = StyleSheet.create({})