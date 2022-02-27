import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  image:{
    width:width,
    height:height,
    resizeMode:"cover",
    position:"relative",
    
  },
  ball:{
    height:200,
    width:200,
    backgroundColor:"red",
  }
})
const HealthTips = () => {
  const y1=useSharedValue(0);
  const gesture1 = Gesture.Pan()
  .onBegin((_, ctx) => {
    ctx.startX = y1.value;
  })
  .onUpdate((e,ctx) => {
    y1.value = ctx.startX + e.translationY;
  })
  .onEnd(() => {
    y1.value = withSpring(0);
  })
  const animatedStyles = useAnimatedStyle(() => {
    return {
     transform:[{
       translateY:y1.value
     }]
    };
  });

  return (
    <View> 
      <Image
     source={{uri:"https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722_960_720.jpg"}}
      style={styles.image}
     />
     <GestureDetector gesture={gesture1}>
    <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
    
    </View>
  )
}

export default HealthTips

