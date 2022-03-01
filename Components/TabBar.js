import { StyleSheet, Text, View,Pressable, Dimensions,TouchableWithoutFeedback } from 'react-native'
import React, { useCallback } from 'react'
import Animated, { useAnimatedStyle, useSharedValue,withTiming } from 'react-native-reanimated';
import BottomTab from './BottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  TabBarStyle:{
   position: 'absolute',
   right:0,
   bottom:20,
   height:65,
   width:70,
   borderRadius:30,
   flexDirection:'row',
   alignItems:'center',
   backgroundColor:'#fff',
   display:'flex',
 },
 View2:{
    height:65,
    width:70,
    backgroundColor:'#fff',
    position: 'absolute',
    right:-10,
    bottom:20,
    height:65,
    width:70,
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,

 },
 ShortBottomView:{
  position:'absolute',
  alignSelf:'center',
  top:15
 }
})

const TabBar = ({ state, descriptors, navigation }) => {
  const open=useSharedValue(0); 
  const animatedstyle=useAnimatedStyle(()=>{
    return{
      width:(open.value)?withTiming(width-40):withTiming(70),
      right:(open.value)?withTiming(0):withTiming(-width/2),
      marginRight:20
    }
  })
  const AnimatedView2=useAnimatedStyle(()=>{
    return{
      right:(open.value)?withTiming(-80):withTiming(0),
    }
  })
  const onPress=useCallback(()=>{
    open.value=!open.value
  },[open.value])


  return (
    <>
    <TouchableWithoutFeedback style={{width:60,height:60,backgroundColor:"red"}} onPress={onPress}>
       <Animated.View key={state.index} style={[styles.View2,AnimatedView2]} >
         <Ionicons name='menu-outline' color={"black"} size={33} style={styles.ShortBottomView}/>
       </Animated.View>
      </TouchableWithoutFeedback>
            <Animated.View  key={state.index} style={[styles.TabBarStyle,animatedstyle]} >  
            <BottomTab state={state} descriptors={descriptors} navigation={navigation} open={open.value} />
          </Animated.View>
          </>
          
  
  );
}

export default TabBar





