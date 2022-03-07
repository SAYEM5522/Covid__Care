import { StyleSheet, Text, View,Dimensions,KeyboardAvoidingView,Pressable,Keyboard } from 'react-native'
import React, { useCallback, useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setCountry } from '../features/InTrackerSlice'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useNavigation } from '@react-navigation/native'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  SearchbarList:{
    height:60,
  },
  Serachicon:{
    backgroundColor:'#fff',
    width:50,
    height:50,  
    alignItems:'center',
    marginTop:-15,
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
  },
  textInput: {
    height: 50,
    borderColor: '#000000',
    width:width-30,
    borderWidth: 1,
    borderRadius:40,
    paddingHorizontal:10,
    position:'relative',
  },
  backArrow:{
    top:24,
    left:5,
    color:"#fff"
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
  const navigation = useNavigation()
  const Open=useSharedValue(0)
  const Country=useDispatch();
  const onPress=useCallback(()=>{
    Open.value=!Open.value
  },[Open.value])
  const SearchBarAnimation=useAnimatedStyle(()=>{
    return{
      width: withSpring(interpolate(Open.value,[0,1],[50,width-60],Extrapolate.CLAMP),config)
    }
  })
  const EditText=useCallback((text)=>{
    Country(setCountry(text.nativeEvent.text))
  },[])
  const BackItem=useCallback(()=>{
    navigation.goBack()
  },[])

  return (
    <View>
      <View style={styles.SearchbarList}>
      <SimpleLineIcons name='arrow-left' onPress={BackItem} style={styles.backArrow} size={29} />
          <View style={styles.Serachicon}>
            <AntDesign name='search1' color={"black"} onPress={onPress} size={33}/>
          </View>
          <Animated.View style={[styles.SearchbarBottomview,SearchBarAnimation]}>
          <KeyboardAvoidingView behavior="position" style={styles.container}  >
            <TextInput
            style={styles.textInput}
            placeholder='Search Country...'
            placeholderTextColor={"black"}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={EditText}
            />
               </KeyboardAvoidingView>
          </Animated.View>
      </View>
      <Pressable onPress={Keyboard.dismiss}>
      <View style={{height:height-60}}>

      </View>
      </Pressable>
     
    </View>
  )
}

export default CountryCase

