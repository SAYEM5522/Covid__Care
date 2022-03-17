import { Dimensions, StyleSheet, Text, View,Pressable,KeyboardAvoidingView,TextInput,Keyboard } from 'react-native'
import React, { useState,useEffect, useCallback } from 'react'

import BottomPopUp from './BottomPopUp';
import AntDesign from "react-native-vector-icons/AntDesign"
import Animated,{ Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MotiView } from 'moti';
import axios from 'axios'
import Loading from '../HomeScreen/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocationCountry, setLocationCountry } from '../features/InTrackerSlice';
import MapView, { Callout, Marker } from 'react-native-maps';
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  page: {
    flex: 1,
    position:'relative',
    
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  Container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, 
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
    top:30,
    right:10
  },

  SearchbarBottomview:{
    backgroundColor:'#fff',
    width:50,
    height:50,
    borderRadius:10,
    alignSelf:"flex-end",
    marginRight:10,
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
    marginRight:10,
    borderRadius:10,
    zIndex:1000
  },
  CriticalRate:{
    width:35,
    height:35,
    borderRadius:18,
    backgroundColor:"red",
    
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  LoadingIndicator:{
    height:height,
    width:width,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
  },
  PopUpMenueView:{
    height:40,
    width:50,
    backgroundColor:'red',
  },
  calloutView:{
    height:100,
    width:130,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10

  },
  CalloutCountry:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000',
    fontFamily:'Roboto-Medium'
  },
  CalloutCase:{
    fontSize:16,
    fontWeight:'bold',
    color:'#000',
    fontFamily:'Roboto-Medium'
  },
  plainView: {
    width: 130,
    height:80,
   alignItems:"center",
   justifyContent:"center"
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
  const [data,setData] = React.useState([]);
  const [loading,setloading] = React.useState(true);
  useEffect(()=>{
    async function getUser() {
     const response = await axios.get("https://disease.sh/v3/covid-19/countries?yesterday=true");
     const country= response.data.map((item)=>({
        cases:item.cases,
        active:item.active,
        recovered:item.recovered,
        lat:item.countryInfo.lat,
        long:item.countryInfo.long,
        country:item.country,
      }))
     setData(country)
     setloading(false)
    }
  getUser(),
  ()=> getUser();
  },[])

  const AnimatedTextInput=Animated.createAnimatedComponent(TextInput)
  const Open=useSharedValue(0)
  const LocationDispatch=useDispatch();
  const locationcountry=useSelector(selectLocationCountry)
  const onPress=useCallback(()=>{
    Open.value=!Open.value
  },[Open.value])
  const SearchBarAnimation=useAnimatedStyle(()=>{
    return{
      width: withSpring(interpolate(Open.value,[0,1],[50,width-45],Extrapolate.CLAMP),config)
    }
  })
  const EditText=useCallback((text)=>{
    LocationDispatch(setLocationCountry(text.nativeEvent.text))
  },[])

  const LocationData=()=>{
    "worklet";
    let locationItem=[];
    (data.map((item)=>{
      (locationcountry===item.country)?
      locationItem.push(item.cases,item.active,item.recovered,item.lat,item.long,item.country):null;
    }
    ))
    return {cases:locationItem[0],active:locationItem[1],recovered:locationItem[2],lat:locationItem[3],long:locationItem[4],country:locationItem[5]};
    
  }
  const {cases,active,recovered,lat,long,country}=LocationData()

  return (
    <View style={styles.page}>
    {
      loading?
      <View style={styles.LoadingIndicator}>
      <Loading/>
      </View>
      :
      <View style={styles.Container}>
        <View style={[styles.SearchbarList]}>
          <Animated.View style={[styles.SearchbarBottomview,SearchBarAnimation]}>
          <KeyboardAvoidingView behavior="height" style={styles.container}  >
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
      <BottomPopUp/>
   
      <MapView
       onPress={Keyboard.dismiss}
        style={styles.map}
        region={{
          latitude:lat,
          longitude:long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        
        
      >
              <Marker
              key={"l"}
              coordinate={{
                latitude:lat,
                longitude:long,
              }}
              
            >
               <View style={styles.CriticalRate}>
               </View>
               <Callout>
              <View style={styles.plainView}>
                <Text style={styles.CalloutCountry}>{country}</Text>
                <Text style={styles.CalloutCase} >Active: {active}</Text>
              </View>
            </Callout>
           
            </Marker>
      </MapView>
    </View>
   }
    </View>
 
  );
}


export default Location



// {
//   [...Array(3).keys()].map((index)=>{
//      return(
//        <MotiView
//        from={{opacity:1,scale:1}}
//        animate={{opacity:0,scale:4}}
//        transition={{
//          type:"timing",
//          delay:index*550,
//          duration:3000,
//          loop:true,
//          easing:Easing.out(Easing.ease),
//          repeatReverse:false
//        }}
//        key={index}
//        style={[StyleSheet.absoluteFillObject,styles.CriticalRate]}
       
//        />
//      )
//   })
//  }

