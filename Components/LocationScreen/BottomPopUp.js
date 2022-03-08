import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { useCallback } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo'
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  Container: {
      width:60,
      height:60,
      backgroundColor:'#fff',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      zIndex:1000,
      position:'relative'
  },
  PopUpView:{
    height:width/2,
    width:width/2,
    backgroundColor:'#fff',
    borderRadius:20,
    top:60
    // position:'absolute',

  }
})
const BottomPopUp = () => {
const AnimatedIcon=Animated.createAnimatedComponent(Entypo)
 const PopUp=useSharedValue(0);
 const onPress=useCallback(()=>{
    PopUp.value=!PopUp.value
 },[PopUp.value])
 const PopUpAnimation=useAnimatedStyle(()=>{
   return{
      height:PopUp.value?withTiming(width/2):withTiming(60),
      width:PopUp.value?withTiming(width/2):withTiming(60),
   }
 })
 const iconAnimation=useAnimatedStyle(()=>{
   return{
     left:PopUp.value?withTiming(width/2-60):withTiming(0),
     transform:[{
       rotate:PopUp.value?withTiming('45deg'):withTiming('0deg')
     }]
   }
 })
  return (
    <View >
       <Animated.View style={[styles.PopUpView,PopUpAnimation]}>
    </Animated.View>
    <View style={styles.Container}>
     <AnimatedIcon name="plus" style={iconAnimation} size={34} color="black" onPress={onPress}/>
    </View>
   
    </View>
  )
}

export default BottomPopUp

