import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-wagmi-charts';
import Animated, {  } from 'react-native-reanimated';
import CovidUpdate from './CovidUpdate';
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create({

  Graph:{
   flex:1,
   backgroundColor:'#020A22'

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
  GraphLine1:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:height/3.2,
    left:width/8

  },
  GraphLine2:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80,
    left:width/8

  },
    GraphLine3:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80*2,
    left:width/8

  },
  GraphLine4:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80*3,
    left:width/8
  },
  LineChart:{
    marginLeft:30,
  

  }

})
const Home = () => {

  return (
    <Animated.View style={[styles.Graph]}>
    <CovidUpdate/>
    </Animated.View>
  )
}

export default Home

