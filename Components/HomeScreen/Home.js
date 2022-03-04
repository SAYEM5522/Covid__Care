import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Animated, {  } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
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
  

  }

})
const Home = () => {
  const navigation=useNavigation();
  const onPress=useCallback(()=>{
    navigation.navigate('InfectionTracker')
  },[])

  return (
    <Animated.View style={[styles.Graph]}>
      <Pressable onPress={onPress}>
        <Text style={{color:'white'}} >
          InfectionTracker
        </Text>
      </Pressable>
    </Animated.View>
  )
}

export default Home

