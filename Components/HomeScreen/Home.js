import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Animated, { Easing } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import { MotiView } from 'moti';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({

  Graph:{
   flex:1,
   backgroundColor:'#020A22',
   alignItems:'center',
   justifyContent:'center'

  },
  GraphView:{
    width:width,
    height:height/2,
    backgroundColor:"#07122B",
    display:'flex',
    alignItems:"center",
    position:'relative',
    marginTop:50,
  },

  LineChart:{
    marginLeft:30,
  

  },
  CriticalRate:{
    width:100,
    height:100,
    borderRadius:100,
    backgroundColor:"red",
    ...StyleSheet.absoluteFillObject
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  }

})
const Home = () => {
  const navigation=useNavigation();
  const onPress=useCallback(()=>{
    navigation.navigate('CovidUpdate')
  },[])
  const onPress1=useCallback(()=>{
    navigation.navigate('InfectionTracker')
  },[])
  const onPress2=useCallback(()=>{
    navigation.navigate('IsolationTracker')
  },[])
  return (
    <Animated.View style={[styles.Graph]}>
      <Pressable onPress={onPress}>
        <Text style={{color:'white'}} >
          Update
        </Text>
      </Pressable>

      {/* <Pressable onPress={onPress1}>
        <Text style={{color:'white',top:20}} >
          InfectionTracker
        </Text>
      </Pressable> */}
      <Pressable onPress={onPress2}>
        <Text style={{color:'white',top:20}} >
          IsolationTracker
        </Text>
      </Pressable>
     
    </Animated.View>
  )
}

export default Home

