import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectCountry } from '../features/InTrackerSlice'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  Header: {
    color:"white",
    marginHorizontal:20,
    fontSize:16,
    fontFamily:"sans-serif-medium",
    marginTop:15
  },
  Country:{
    color:"white",
    marginHorizontal:20,
    fontSize:22,
    fontFamily:"sans-serif-medium",
    marginTop:5
  },
  Report:{
    width:width/2.5,
    height:width/2.5,
    borderRadius:20,
    backgroundColor:"#1c3b4c",
    marginLeft:15,
    shadowColor: "#fff",
    shadowOffset:{
    width: 0,
    height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  top1:{
    flexDirection:"row",
    marginTop:20,
    alignItems:"center",
    marginHorizontal:15
  },
  top2:{
    flexDirection:"row",
    marginTop:20,
    alignItems:"center",
    marginHorizontal:15
  },
  Icon1:{
    color:"white",alignSelf:"center",top:20,padding:6,backgroundColor:"red",borderRadius:20
  },
  Icon2:{
    color:"white",alignSelf:"center",top:20,padding:6,backgroundColor:"green",borderRadius:20
  },
  Icon4:{
    color:"white",alignSelf:"center",top:20,padding:6,backgroundColor:"red",borderRadius:20
  },
  Text1:{
    color:"white",
    marginHorizontal:20,
    fontSize:16,
    fontFamily:"sans-serif-medium",
    
    alignSelf:"center",
    marginTop:30
  },
  Text2:{
    color:"white",
    marginHorizontal:20,
    fontSize:16,
    fontFamily:"sans-serif-medium",
    marginTop:10,
    alignSelf:"center",

  },
  Details:{
    color:"white",
    position:"absolute",
    right:30,
    fontSize:16,
    fontFamily:"sans-serif-medium",
    top:50
  },
  PopUpView:{
    width:width-60,
    height:width/2.2,
    alignSelf:"center",
    borderRadius:5,
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
  },
  gradient:{
    position:'absolute',
    top:0,
    left:0,
    height:width/1.7,
    width:width-60,
    borderRadius:5,
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
  }
})
const config={
  mass:1,
  damping:16,
  overshootClamping:false,
  restDisplacementThreshold:0.1,
  restSpeedThreshold:0.6
}
const DailyUpdate = ({item}) => {
  const Open=useSharedValue(0);
  const popUp=useCallback(()=>{
    Open.value=!Open.value;
  },[Open.value])
  const PopUpStyle=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:Open.value?withSpring(-30,config):withSpring(width/2.5,config)
      }]
    }
  })
  const SearchCountry=useSelector(selectCountry)
  const IData=()=>{
    "worklet";
    let data=[];
    (item.map((item)=>{
      (SearchCountry===item.country)?
      data.push(item.flag,item.country,item.cases,item.recovered,item.deaths,item.critical,item.active):null;
    }
    ))
    return {data,name:data[1],cases:data[2],recovered:data[3],deaths:data[4],critical:data[5],active:data[6]};
  }
   const {data,name,cases,deaths,recovered,critical,active} =IData()
  return (
    <View>
      <Text style={styles.Header}>Current Outbreak</Text>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={styles.Country}>{SearchCountry}</Text>
      <AntDesign name='caretdown'color={"white"} style={{marginLeft:-7}} size={17}/>
      </View>
      <Text style={styles.Details} onPress={popUp}>Details</Text>
      <View style={styles.top1}>
        <View style={styles.Report}>
          <AntDesign name='plus' size={25} style={styles.Icon1}/>
          <Text style={styles.Text1}>Infected</Text>
          <Text style={styles.Text2}>{cases}</Text>
        </View>
        <View style={styles.Report}>
          <AntDesign name='hearto' style={styles.Icon2} size={23}/>
        <Text style={styles.Text1}>Recovered</Text>
        <Text style={styles.Text2}>{recovered}</Text>

        </View>
      </View>
      <View style={styles.top2}>
        <View style={styles.Report}>
          <Entypo name='cross' style={styles.Icon1} size={23}/>
          <Text style={styles.Text1}>Deaths</Text>
        <Text style={styles.Text2}>{cases-(recovered+active)}</Text>

        </View>
        <View style={styles.Report}>
          <Entypo name='warning' style={styles.Icon4} size={21}/>
        <Text style={styles.Text1}>Critical </Text>
        <Text style={styles.Text2}>{critical}</Text>
        </View>
      
      </View>
      <Animated.View style={[styles.PopUpView,PopUpStyle]}>
      <LinearGradient
       start={{x: 1, y:0.5}} end={{x: 0.2, y: 0.9}}
        colors={['#833ab4', '#ce2858', '#f1202c','#f1202c','#833ab4']} style={styles.gradient}/>
        </Animated.View>
    </View>
  )
}

export default DailyUpdate

