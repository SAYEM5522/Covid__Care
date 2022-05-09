import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { useCallback, useEffect } from 'react'
const {width,height}=Dimensions.get('window');
import Entypo from "react-native-vector-icons/Entypo";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectID, selectName, setUser } from '../features/InTrackerSlice';
const styles = StyleSheet.create({
  Header:{
    width:width,
    height:width/6,
    backgroundColor:"#fff",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10,
    paddingTop:15
  },
  text:{
    color:"#000",
    fontSize:25,
    fontWeight:"bold",
    fontFamily:"sans-serif-medium",

  },
  Modal:{
    width:width/3,
    height:width/3,
    backgroundColor:"#fff",
    alignSelf:"center",
    borderRadius:10,
    top:height/3,
    alignItems:"center",
    justifyContent:"center",
  },
  ProfileName:{
    width:width/3.5,
    height:width/3.5,
    backgroundColor:"#fff",
    alignSelf:"center",
    borderRadius:(width/3.5)/2,
    top:-width/3.5,
  },
  Name:{
    position:"absolute",
    fontSize:60,
    fontWeight:"bold",
    fontFamily:"sans-serif-medium",
    left:(width/3.5/2)-20,
    top:(width/3.5/2)-40,
    
    
  },
  ProfileNameText:{
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"sans-serif-medium",
    alignSelf:"center",
    paddingTop:10,
    top:-width/3.5,
  }

})
const Profile = () => {
  const modal=useSharedValue(0);
  const setName=useSelector(selectName)
  const setEmail=useSelector(selectEmail)
  const dispatch=useDispatch()
  const onPress=useCallback(()=>{
    modal.value=!modal.value;
  },[])
  const LogOut=useCallback(()=>{
      dispatch(setUser({
        email:null
      }))
  },[])
  const ModalAnimation=useAnimatedStyle(()=>{
    return{
      opacity:modal.value?withSpring(1):withSpring(0),
      transform:[{
        scale:modal.value?withSpring(1):withSpring(0)
      }]
    }
  })
  

  
  return (
    <View >
      <View style={styles.Header}>
      <Text style={styles.text}>Profile</Text>
      <Entypo name="log-out" size={30} color="#000" onPress={onPress} />
      </View>
      <Animated.View style={[styles.Modal,ModalAnimation]}>
        <Text onPress={LogOut} style={styles.text}>Log Out</Text>
      </Animated.View>
      <View>
        <View style={styles.ProfileName}>
          <Text style={styles.Name}>S</Text>
        </View>
        <Text style={styles.ProfileNameText}>{setName||"Sayem"}</Text>
        <Text style={styles.ProfileNameText}>{setEmail||"md1040582@gmail.com"}</Text>
      </View>
    </View>
  )
}

export default Profile

