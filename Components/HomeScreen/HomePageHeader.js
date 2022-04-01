import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  Text1:{
    fontSize:23,
    color:"black",
    fontWeight:"bold",
    alignSelf:"center",
    fontFamily:"sans-serif-medium",
    position:"absolute",
    left:15,
    top:40
  },
  Text2:{
    fontSize:15,
    color:"black",
    fontWeight:"bold",
    alignSelf:"center",
    fontFamily:"sans-serif-medium",
    position:"absolute",
    left:15,
    top:70,
    fontStyle:'italic'
  }
})
const HomePageHeader = () => {
  return (
    <View style={{height:height/4}}>
      <Image
      source={require('../../Components/assets/c.png')}
      style={{width:width/2,height:width/2,resizeMode:'cover',position:'absolute',top:-30,right:-60}}
      />
      <Text style={styles.Text1}>Covid Care</Text>
      <Text style={styles.Text2}>The app that takes care of you</Text>
    </View>
  )
}

export default HomePageHeader

