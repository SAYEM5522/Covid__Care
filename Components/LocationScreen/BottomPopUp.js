import { StyleSheet, Text, View,Dimensions,Pressable,TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo'
const {width,height}=Dimensions.get('window');
const PopUpWidth=60
const PopUpheight=60
const config={
  mass:1,
  damping:16,
  overshootClamping:false,
  restDisplacementThreshold:0.1,
  restSpeedThreshold:0.6
}
const data=[
  { 
    id:0,
    name:"Active"
  },
  { 
    id:1,
    name:"Recovered"
  },
  { 
    id:2,
    name:"Critical"
  }
]
const styles = StyleSheet.create({
  Container: {
      width:PopUpWidth,
      height:PopUpheight,
      backgroundColor:'#1c3b4c',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      zIndex:1000,
     
  },
  PopUpView:{
    height:width/2,
    width:(width/2)+30,
    backgroundColor:'#1c3b4c',
    borderRadius:20,
    top:60,
    zIndex:1000
  },
  PopUpList:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center',
    
  },
  ItemName:{
    backgroundColor:'#1c3b4c',
    width:90,
    height:60,
    flexDirection:'row',
    flexWrap:'wrap',
    borderRadius:10,
    marginLeft:5,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    
  },
  PopUpViewText:{
    color:"white",
    fontSize:17,
    fontWeight:'bold',
    fontFamily:'sans-serif-condensed',
    paddingTop:(width/5.5)/3

  }
})
const BottomPopUp = () => {
const AnimatedIcon=Animated.createAnimatedComponent(Entypo)
 const PopUp=useSharedValue(0);
 const currentIndex=useSharedValue(0);
 const onPress=useCallback(()=>{
    PopUp.value=!PopUp.value
 },[PopUp.value])
 const PopUpAnimation=useAnimatedStyle(()=>{
   return{
      height:PopUp.value?withTiming(width/2):withTiming(PopUpheight),
      width:PopUp.value?withTiming((width/2+5)):withTiming(PopUpWidth),
     
   }
 })
 const iconAnimation=useAnimatedStyle(()=>{
   return{
     left:PopUp.value?withTiming((width/2-PopUpWidth)+5):withTiming(0),
     transform:[{
       rotate:PopUp.value?withTiming('45deg'):withTiming('0deg')
     }]
   }
 })
 
 
  return (
    <View style={{position:'absolute',right:10,bottom:100}} >
    <Animated.View style={[styles.PopUpView,PopUpAnimation]}>
      <View style={styles.PopUpList}>

          {
            data.map((item,index)=>{
              const ActiveIndex=()=>{
                currentIndex.value=index
              }
              const AnimatedItemView=useAnimatedStyle(()=>{
                return{
                   height: PopUp.value?withTiming(width/5.5):withTiming(0),
                   width: PopUp.value?withTiming(width/4.3):withTiming(0),
                   backgroundColor:currentIndex.value===index?('black'):('#1c3b4c'),
                }
              },[])
                return(
                  <Pressable key={index} onPress={ActiveIndex}>
                  <Animated.View pointerEvents="box-none"  style={[styles.ItemName,AnimatedItemView]}>
                    <Text style={styles.PopUpViewText} >{item.name}</Text>
                  </Animated.View>
                  </Pressable>
  
                )
            })
          }
          </View>
    </Animated.View>
    <View style={[styles.Container]}>
     <AnimatedIcon name="plus" style={iconAnimation} size={34} color="white" onPress={onPress}/>
    </View>
   
    </View>
  )
}

export default BottomPopUp

