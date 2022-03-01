import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MotiView } from 'moti'
const size=120
const Loading = () => {
  return (
    <MotiView 
    style={styles.LoadingIndicator}
    from={{
      width:size,
      height:size,
      borderRadius:size/2,
      borderWidth:0,
      shadowOpacity:0.5
    }}
    animate={{
      width:size+20,
      height:size+20,
      borderRadius:(size+20)/2,
      borderWidth:size/10,
      shadowOpacity:1
    }}
    transition={{
      type:"timing",
      duration:1000,
      loop:true
    }}
    >
    </MotiView>
  )
}

export default Loading

const styles = StyleSheet.create({
  LoadingIndicator:{
    width:size,
    height:size,
    borderRadius:size/2,
    borderWidth:size/12,
    borderColor:'#fff',
    shadowColor:'#fff',
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:{height:0,width:0},
    elevation:6


  }
})