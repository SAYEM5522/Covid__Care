import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  Header:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginTop:5,
    marginLeft:width/2-50
  }
})
const Recovering = () => {
  return (
    <View >
        <Text style={styles.Header}>Recovering</Text>
    </View>
  )
}

export default Recovering

