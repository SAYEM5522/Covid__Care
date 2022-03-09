import { Dimensions, StyleSheet, Text, View,Pressable,KeyboardAvoidingView,TextInput,Keyboard } from 'react-native'
import React, { useState,useEffect, useCallback } from 'react'
const Token="pk.eyJ1Ijoic2F5ZW01NTIyIiwiYSI6ImNremZxdDFjbzNraTIydm8ydmY4enljb3EifQ.-Tm4Vg6gLHSqEVjOmEWhjA"
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Logger } from '@react-native-mapbox-gl/maps';
import BottomPopUp from './BottomPopUp';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Animated,{ Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
MapboxGL.setAccessToken(Token);
MapboxGL.setConnected(true);
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  page: {
    flex: 1,
    position:'relative'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
  BottomPopUp:{
    position:'absolute',
    right:10,
    bottom:100,
    color:"#fff",
    zIndex:1000,

  },
  SearchbarList:{
    height:60,
    position:'absolute',
    top:10,
    right:10
  },

  SearchbarBottomview:{
    backgroundColor:'#fff',
    width:50,
    height:50,
    borderRadius:10,
    alignSelf:"flex-end",
    marginRight:22,
    marginTop:-10,
    position:'absolute',
    top:10,
    right:0,
    zIndex:100
  },
  textInput: {
    height: 50,
    borderColor: '#000000',
    width:width-30,
    borderWidth: 1,
    borderRadius:10,
    paddingHorizontal:10,
    position:'relative',
    borderWidth:0
  },
  Serachicon:{
    backgroundColor:'#fff',
    width:50,
    height:50,  
    alignItems:'center',
    marginTop:0,
    justifyContent:'center',
    alignSelf:"flex-end",
    marginRight:22,
    borderRadius:10,
    zIndex:1000
  },
})
const config={
  mass:1,
  damping:16,
  overshootClamping:false,
  restDisplacementThreshold:0.1,
  restSpeedThreshold:0.6
}
const Location = () => {
  const AnimatedTextInput=Animated.createAnimatedComponent(TextInput)
  const Open=useSharedValue(0)
  const onPress=useCallback(()=>{
    Open.value=!Open.value
  },[Open.value])
  const SearchBarAnimation=useAnimatedStyle(()=>{
    return{
      width: withSpring(interpolate(Open.value,[0,1],[50,width-60],Extrapolate.CLAMP),config)
    }
  })
  const EditText=useCallback((text)=>{
  },[])
  Logger.setLogCallback(log => {
    const { message } = log;
    if (
      message.match('Falling back to MGLIdeographsRasterizedLocally') ||
      message.match('MapRenderer::onSurfaceCreated GlyphsRasterizationMode')||
      message.match('Request failed due to a permanent error: Canceled') 
    ) {
      return true;
    }
    return false;
  });
  const [coordinates] = useState([90, 24]);
  useEffect(()=>{
    MapboxGL.setTelemetryEnabled(false);
  },[])

  return (
    <View style={styles.page}>

        <View style={styles.SearchbarList}>
          
          <Animated.View style={[styles.SearchbarBottomview,SearchBarAnimation]}>
          <KeyboardAvoidingView behavior="position" style={styles.container}  >
            <AnimatedTextInput
            style={[styles.textInput,SearchBarAnimation]}
            placeholder='Search Country...'
            placeholderTextColor={"black"}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={EditText}
            />
               </KeyboardAvoidingView>
          </Animated.View>
          <View style={styles.Serachicon}>
            <AntDesign name='search1' color={"black"} onPress={onPress} size={33}/>
          </View>
          </View>
          
      {/* <Pressable  onPress={Keyboard.dismiss}>
      <View style={{position:'absolute',top:60,zIndex:1000,height:height-60}} >
      </View>
      </Pressable> */}
      <BottomPopUp/>
      <View style={styles.container}    >
        <MapboxGL.MapView style={styles.map}  onPress={Keyboard.dismiss}   >
          <MapboxGL.Camera zoomLevel={10} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation   coordinate={coordinates} id={"test"}  />
        </MapboxGL.MapView>
      </View>
    </View>
  );
}


export default Location

