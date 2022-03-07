import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Animated, { Easing, interpolate,  useAnimatedStyle, useSharedValue, withTiming, ZoomOutUp } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import { selectCount, setCount } from '../../features/InTrackerSlice'
import Entypo from "react-native-vector-icons/Entypo"
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    height:(width/2)-30,
    width:(width/2)-30,
    backgroundColor:'#fff',
    borderRadius:20,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom:5,

  },
  text:{
    color:'black',
    alignItems:'flex-start',
    paddingHorizontal:10,
    marginTop:10,
    position:'absolute',
    fontFamily:'',
    fontSize:18,
    fontFamily:"sans-serif-medium",
    
  },
  Image:{
    height:(width/2)-30,
    width:(width/2)-30,
    borderRadius:20,
    resizeMode:'cover',
    position:'relative'
  },
  IconStyle:{
    width:31,
    height:31,
    borderRadius:25,
    backgroundColor:"green",
    position:"absolute",
    alignItems:'center',
    justifyContent:'center',
    bottom:10,
    right:10
  }

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
        ],  
    }
  })
  const AnimatedIcon=useAnimatedStyle(()=>{
    return{
  
      transform:[{
        scale:withTiming(interpolate(scalUp.value,[0,1],[0,1],{easing:Easing.linear,duration:1000}))
      }],
      opacity:withTiming(interpolate(scalUp.value,[0,1],[0,1],{easing:Easing.linear,duration:1000}))
    }
  })
  
  return (
    <Animated.View key={index} style={[styles.container,AnimatedStyle]}>
      <Pressable onPress={ItemCount}>
      <Image
      source={item.img}
      style={styles.Image}
      />
    <Text style={styles.text}>{item.infectionType}</Text>
    <Animated.View style={[styles.IconStyle,AnimatedIcon]}>
    <Entypo name="check" size={26} color="white" />
    </Animated.View>
    </Pressable>
    </Animated.View>
  )
}

export default Item

