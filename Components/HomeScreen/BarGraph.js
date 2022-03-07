import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import axios from 'axios'

const BarGraph = ({api}) => {
  const [data1,setData] = React.useState([]);
  const [loading,setLoading] = React.useState(true);

  useEffect(()=>{
    async function getUser() {
     const response = await axios.get(api);
     const s=response.data
      setData(s)
      setLoading(false)
  }
  getUser(),
  ()=> getUser();
  },[])
  const h=useSharedValue(0)
  useEffect(()=>{
        h.value=1
  },[])
  const HeightAnimation=useAnimatedStyle(()=>{
   const h= data1.todayCases/10
    return{
      height:withTiming(loading?100:h,{duration:1000}),
    }
  })
  const fromate=(num)=>{
    "worklet"
    const myDate = new Date(num)
    return myDate.toLocaleTimeString()
  }
  return (
    <View>
       <Animated.View
       style={[styles.Height,HeightAnimation]}/>
       <View>
         <Text style={{color:"white"}}>{fromate(data1.updated)}</Text>
       </View>
      
    </View>
  )
}

export default BarGraph

const styles = StyleSheet.create({
  Height:{
    height:70,
    width:30,
    backgroundColor:"white",
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    marginLeft:20,
   
  }
})