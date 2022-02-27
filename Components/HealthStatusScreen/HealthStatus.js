import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import HealthTips from './HealthStatus/HealthTips'
const HealthStatus = () => {
  const navigation = useNavigation()
  const onPress = useCallback(() => {
    navigation.push("InfectionTracker")
  },[])
  return (
    <View>
     <HealthTips/>
    </View>
  )
}

export default HealthStatus

const styles = StyleSheet.create({})