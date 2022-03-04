import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { useCallback } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  SearchbarList:{
  },
  Serachicon:{
    backgroundColor:'#fff',
    width:50,
    height:50,  
    alignItems:'center',
    marginTop:10,
    justifyContent:'center',
    alignSelf:"flex-end",
    marginRight:22,
    borderRadius:40,
    zIndex:1000
  },
  SearchbarBottomview:{
    backgroundColor:'#fff',
    width:50,
    height:50,
    borderRadius:40,
    alignSelf:"flex-end",
    marginRight:22,
    marginTop:-50
  }
})
const config={
  mass:1,
  damping:16,
  overshootClamping:false,
  restDisplacementThreshold:0.1,
  restSpeedThreshold:0.6
}
const CountryCase = () => {
  const Open=useSharedValue(0)
  const onPress=useCallback(()=>{
    Open.value=!Open.value
  },[Open.value])
  const SearchBarAnimation=useAnimatedStyle(()=>{
    return{
      width: withSpring(interpolate(Open.value,[0,1],[50,width-30],Extrapolate.CLAMP),config)
    }
  })

  return (
    <View>
      <View style={styles.SearchbarList}>
          <View style={styles.Serachicon}>
            <AntDesign name='search1' color={"black"} onPress={onPress} size={33}/>
          </View>
          <Animated.View style={[styles.SearchbarBottomview,SearchBarAnimation]}>
          </Animated.View>
      </View>
    </View>
  )
}

export default CountryCase

