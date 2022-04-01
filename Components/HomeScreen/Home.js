import { Dimensions, Pressable, StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React, { useCallback } from 'react'
import Animated, { Easing, useAnimatedStyle } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import { MotiView } from 'moti';
import HomePage from './HomePage';
import HomePageHeader from './HomePageHeader';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({

  Graph:{
   flex:1,
  //  backgroundColor:'#020A22',
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
const data=[
  {
    id:1,
    name:"CovidUpdate",
    image:require('../../Components/assets/h2.png'),
    des:"Get The Latest Updates On Covid-19",
    Type:"CovidUpdate"
  },
  {
    id:2,
    name:"YouTube",
    image:require('../../Components/assets/h1.png'),
    des:"Watch Videos Of Health Tips To Prevent Covid-19",
    Type:"HealthTips"
  },
  {
    id:3,
    name:"InfectionTracker",
    image:require('../../Components/assets/h3.png'),
    des:"Track Your Symptoms With Covid Care App",
    Type:"InfectionTracker"
  },
  {
    id:4,
    name:"IsolationTracker",
    image:require('../../Components/assets/h4.png'),
    des:" Countdown Your Time To Take An Extra Care During This Period",
    Type:"IsolationTracker"
  },
  {
    id:5,
    name:"IsolationAdvice",
    image:require('../../Components/assets/h5.png'),
    des:"Get The Isolation Advice To Take Care Of Yourself And Your Family",
    Type:"IsolationAdvice"
  },
  {
    id:6,
    name:"Vaccination",
    image:require('../../Components/assets/h5.png'),
    des:"Get The Latest Vaccination Updates  On Covid-19",
    Type:"Vaccination"
  },
]
const Home = () => {
  const navigation=useNavigation();
  const onPress=useCallback(()=>{
    navigation.navigate('CovidUpdate')
  },[])
  const onPress1=useCallback(()=>{
    navigation.navigate('InfectionTracker')
  },[])
  const onPress2=useCallback(()=>{
    navigation.navigate('YouTube')
  },[])
  const renderItem=({item,index})=>{

    return(
      <View style={{marginTop:10}}>
        <HomePage item={item} index={index}/>
      </View>
    )
  }
  return (
    <Animated.View style={[styles.Graph]}>
        <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={<HomePageHeader/>}
        />
    </Animated.View>
  )
}

export default Home

