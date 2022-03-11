import { Dimensions, StyleSheet, Text, View,Pressable,KeyboardAvoidingView,TextInput,Keyboard } from 'react-native'
import React, { useState,useEffect, useCallback } from 'react'
const Token="pk.eyJ1Ijoic2F5ZW01NTIyIiwiYSI6ImNremZxdDFjbzNraTIydm8ydmY4enljb3EifQ.-Tm4Vg6gLHSqEVjOmEWhjA"
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Logger } from '@react-native-mapbox-gl/maps';
import BottomPopUp from './BottomPopUp';
import AntDesign from "react-native-vector-icons/AntDesign"
import Animated,{ Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MotiView } from 'moti';
import axios from 'axios'
import Loading from '../HomeScreen/Loading';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
    width:20,
    height:20,
    borderRadius:20,
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
    // position:'absolute',
    // top:20,
    // zIndex:1000,
  }
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
      }))
     setData(country)
     setloading(false)
    }
  getUser()
  // ()=> getUser();
  },[])

  const AnimatedTextInput=Animated.createAnimatedComponent(TextInput)
  const Open=useSharedValue(0)
  const PopUp=useSharedValue(0)
  const PopUpMenue=useCallback(()=>{
   PopUp.value=!PopUp.value
  },[PopUp.value])
  const PopUpStyle=useAnimatedStyle(()=>{
    return{
      transform:[{
        scale:PopUp.values?1:0
      }]
    }
  })
  const onPress=useCallback(()=>{
    Open.value=!Open.value
  },[Open.value])
  const SearchBarAnimation=useAnimatedStyle(()=>{
    return{
      width: withSpring(interpolate(Open.value,[0,1],[50,width-45],Extrapolate.CLAMP),config)
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
    {
      loading?
      <View style={styles.LoadingIndicator}>
      <Loading/>
      </View>
      :
      <View >
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
      <View style={styles.container}>
        <MapboxGL.MapView
        style={styles.map}  onPress={Keyboard.dismiss}>
          <MapboxGL.Camera zoomLevel={4} centerCoordinate={coordinates} />
          <View>
            {
              data.map((item,index)=>{
                return( 

                  <MapboxGL.MarkerView  key={index} id={"`${index}`"} coordinate={[item.long,item.lat]}>
                  <View>
                   <Animated.View style={[styles.PopUpMenueView,PopUpStyle]}>
                  </Animated.View> 
                  <Pressable onPress={PopUpMenue}>
                  <View style={styles.CriticalRate}>
                  </View>
                  </Pressable>
                  </View>
                

                  </MapboxGL.MarkerView>
                )
                
              })
            }
           </View>
        </MapboxGL.MapView>
      </View>
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





{/* <MapboxGL.MarkerView children={index} key={index} coordinate={[item.long,item.lat]} id={"test"}  >
<View style={styles.CriticalRate} >
</View>
 <MapboxGL.Callout
  title={`${item.recovered}`}/>
</MapboxGL.MarkerView> */}