import { StyleSheet, Text, View,Pressable, Dimensions,TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Svg,{Path} from "react-native-svg";
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import BottomTab from './BottomTab';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  TabBarStyle:{
   position: 'absolute',
   right:0,
   bottom:30,
   height:50,
   width:70,
   borderRadius:10,
   flexDirection:'row',
   alignItems:'center',
   backgroundColor:'#fff',
   display:'flex',
 }
})

const TabBar = ({ state, descriptors, navigation }) => {
  const AnimatedPressable=Animated.createAnimatedComponent(Pressable);
  const open=useSharedValue(0);

 

  const animatedstyle=useAnimatedStyle(()=>{
    return{
      width:open.value?withSpring(width-40):withSpring(70),
      marginRight:open.value?20:0,
    }
  })

  return (
    <TouchableWithoutFeedback>
    <Animated.View  key={state.index} style={[styles.TabBarStyle,animatedstyle]} >
      <BottomTab state={state} descriptors={descriptors} navigation={navigation} />     
    </Animated.View>
    </TouchableWithoutFeedback>
  
  );
}

export default TabBar





