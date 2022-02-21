import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import axios from 'axios'
import BarGraph from './BarGraph'
const styles = StyleSheet.create({
  Height:{
    height:70,
    width:30,
    backgroundColor:"white",
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  }
})
const Update = () => {
  const [data1,setData] = React.useState([]);
  useEffect(()=>{
    async function getUser() {
     const response = await axios.get('https://disease.sh/v3/covid-19/historical/Bangladesh?lastdays=6');
     const s=response.data.timeline.cases
      setData(s)
      
  }
  getUser(),
  ()=> getUser();
  },[])
  const h=useSharedValue(0)
  useEffect(()=>{
        h.value=1
  },[])

  return (
    <View style={{flexDirection:'row',}}>
          {
            Object.values(data1).map((item,index)=>(
              <View key={index} style={{marginLeft:20,alignSelf:'baseline'}}>
               {
                 (index%2!==0)?
                      <BarGraph item={item} index={index}/>
                 :null
               }
              </View>
            ))
          }
    </View>
  )
}

export default Update

