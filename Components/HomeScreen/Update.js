import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import axios from 'axios'
import BarGraph from './BarGraph'
import Loading from './Loading'
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  Height:{
    height:70,
    width:30,
    backgroundColor:"white",
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  LoadingIndicator:{
    flex:1,
    backgroundColor:"#010100",
    alignItems:"center",
    justifyContent:'center'
  }
})
const Update = ({api}) => {
  const [data1,setData] = React.useState([]);
  useEffect(()=>{
    async function getUser() {
     const response = await axios.get(api);
    const covid= response.data.timeline.cases

//  console.log(Object.keys(covid).map(key=>covid))
    const v= Object.values(response.data.timeline.cases)
    const o= Object.keys(response.data.timeline.cases)
    console.log( [...v,...o])

    //  const country= response.data.map((item)=>(
    // {
    //     timestamp:item.updated,
    //     value:item.todayCases,
    //     country:item.country
    //  }
    //  ))
    //  setData(country)
    }
  getUser(),
  ()=> getUser();
  },[])

 
  const h=useSharedValue(0)
  useEffect(()=>{
        h.value=1
  },[])
  
  return (
    <View >
      <View style={styles.LoadingIndicator}>
      </View>  
    </View>
  )
}

export default Update



 {/* {
            Object.values(data1).map((item,index)=>(
              <View key={index} style={{marginLeft:20,alignSelf:'baseline'}}>
               {
                 (index%2!==0)?
                      <BarGraph item={item} index={index}/>
                 :null
               }
              </View>
            ))
          } */}

