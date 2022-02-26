import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
const HealthStatus = () => {
  const navigation = useNavigation()
  const onPress = useCallback(() => {
    navigation.push("InfectionTracker")
  },[])
  return (
    <View>
      <Text onPress={onPress}>HealthStatus</Text>
    </View>
  )
}

export default HealthStatus

const styles = StyleSheet.create({})