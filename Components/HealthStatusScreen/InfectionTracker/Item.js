import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import Animated, { Easing, interpolate,  useAnimatedStyle, useSharedValue, withTiming, ZoomOutUp } from 'react-native-reanimated'
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    height:70,
    width:width-20,
    backgroundColor:'black',
    borderRadius:20,
    marginVertical:10,
    alignSelf:'center',
  },
  text:{
    color:'white',
    alignItems:'flex-start',
    paddingHorizontal:20,
    marginTop:20
    
  }
})
const Item = ({item}) => {
  const transition=useSharedValue(0);
  useEffect(()=>{
    transition.value=1
  },[transition.value])
  const AnimatedStyle=useAnimatedStyle(()=>{
    return{
          transform:[{
            translateX:withTiming(interpolate(transition.value,[0,1],[(item.id%2==0)?-width/2:width/2,0],{easing:Easing.linear,duration:1000}))
          }],
    }
  })
  const ItemCount=useCallback(()=>{
    item.id++
  },[item.id])
  return (
    <Pressable onPress={ItemCount}>
    <Animated.View key={item.id} style={[styles.container,AnimatedStyle]}   >
      <Text style={styles.text}>{item.infectionType}</Text>
    </Animated.View>
    </Pressable>
  )
}

export default Item

