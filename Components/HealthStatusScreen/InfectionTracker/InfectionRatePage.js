import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import InfectionRate from './InfectionRate';
import { useDispatch, useSelector } from 'react-redux';
import { resetCount, selectCount } from '../../features/InTrackerSlice';

const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  TopView:{
    width:width,
    height:height/3,
    backgroundColor:'#B3D9D1',
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    position:'relative',
    flexDirection:'row',
    alignItems:'center'

  },
  Image:{
    width:width/2,
    height:height/3,
    resizeMode:'contain',
  },
  HeaderText:{
    fontSize:23,
    color:'black',
    fontFamily:"sans-serif-medium",
    position:'absolute',
    width:width/2,
    right:0
  },
  HeaderIcon:{
    color:'black',
    position:'absolute',
    left:10,
    top:10

  },
  MiddleView:{
    width:width/2,
    height:height/3.5,
    backgroundColor:'#668887',
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    left:width/2,
    top:45

  }
})
const InfectionRatePage = () => {
  const navigation=useNavigation();
  const resetrate=useDispatch();
  const onPress=useCallback(()=>{
    navigation.navigate("InfectionTracker")
    resetrate(resetCount())
  },[navigation])
  const count=useSelector(selectCount)
  return (
    <View style={{flex:1,backgroundColor:"#2F6F67"}}>
     <View style={styles.TopView}>       
      <Image 
      source={require('../../../Components/assets/symptoms.png')}
      style={styles.Image}
      />
      <Text style={styles.HeaderText}>
        {count} Symptoms of Covid-19
      </Text>
      <SimpleLineIcons name='arrow-left' onPress={onPress} style={styles.HeaderIcon} size={27} />
      
     </View>
     <View style={styles.MiddleView}>
       <Text style={{position:'absolute',zIndex:1000,alignSelf:'center',color:'white'}}>Infection Rate</Text>
        <InfectionRate/>
     </View>
    </View>
  )
}

export default InfectionRatePage

