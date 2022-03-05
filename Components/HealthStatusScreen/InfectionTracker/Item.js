import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Animated, { Easing, interpolate,  useAnimatedStyle, useSharedValue, withTiming, ZoomOutUp } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import { selectCount, setCount } from '../../features/InTrackerSlice'
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    height:(width/2)-30,
    width:(width/2)-30,
    backgroundColor:'black',
    borderRadius:20,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom:5,

  },
  text:{
    color:'white',
    alignItems:'flex-start',
    paddingHorizontal:20,
    marginTop:20
    
  },
  Image:{
    height:width/2,
    width:width/2
  },

})
const Item = ({item,index}) => {
  const dispatch=useDispatch();
  const transition=useSharedValue(0);
  const scalUp=useSharedValue(0);
  useEffect(()=>{
    transition.value=1
  },[transition.value])
  const ItemCount=useCallback(()=>{
    scalUp.value=!scalUp.value
    dispatch(setCount())
  },[dispatch,scalUp.value])
  const AnimatedStyle=useAnimatedStyle(()=>{
    return{
          transform:[{
            translateX:withTiming(interpolate(transition.value,[0,1],[(item.id%2==0)?-width/2:width/2,0],{easing:Easing.linear,duration:1300}))
          },
          {
            scale:withTiming(interpolate(scalUp.value,[0,1],[1,1.04],{easing:Easing.linear,duration:1000}))
          },
          {
            perspective:withTiming(interpolate(scalUp.value,[0,1],[1,1000],{easing:Easing.linear,duration:1000}))
          },
 
        ],
        
    }
  })
  
  return (
    <Animated.View key={index} style={[styles.container,AnimatedStyle]}>
    <Pressable onPress={ItemCount}>
    <Text style={styles.text}>{item.infectionType}</Text>
    </Pressable>

    </Animated.View>
  )
}

export default Item

