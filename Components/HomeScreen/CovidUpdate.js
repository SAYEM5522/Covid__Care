import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback,useEffect} from 'react'
import Update from './Update'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import CountryCase from './CountryCase'
import Loading from './Loading'
import axios from 'axios'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'black',
    position:'absolute'
  },
  BottomView:{
    width:width,
    height:height,
    backgroundColor:'#fff',
    borderRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
   
  },
  topArrow:{
    color:"black",
    top:15,
    alignSelf:'center'
  },
  graph:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  View1:{
    flex:1
  },
  LoadingIndicator:{
    height:height,
    width:width,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
  }
})
const config={
  mass:1,
  damping:16,
  overshootClamping:false,
  restDisplacementThreshold:0.1,
  restSpeedThreshold:0.6
}
function clamp(value, lowerBound, upperBound) {
  'worklet';
  return Math.max(lowerBound, Math.min(value, upperBound));
}
const CovidUpdate = () => {
  const [data,setData] = React.useState([]);
  const [loading,setloading] = React.useState(true);
  useEffect(()=>{
    async function getUser() {
     const response = await axios.get("https://disease.sh/v3/covid-19/countries");
     const country= response.data.map((item)=>({
        timestamp:item.updated,
        value:item.todayCases,
        country:item.country}))
     console.log(country)
     setData(country)
     setloading(false)
    }
  getUser(),
  ()=> getUser();
  },[])
  
  const x=useSharedValue(0);
  const contex=useSharedValue(0);
  const AnimatedIcon=Animated.createAnimatedComponent(SimpleLineIcons)

  const gesture1 = Gesture.Pan()
  .onBegin(() => {
    contex.value = x.value;
  })
  .onUpdate((e) => {
    x.value = contex.value+ e.translationX;
  })
  .onEnd(() => {
    if(x.value<0&&x.value>-width/2){
      x.value=withSpring(-(width-20),config);
    }
    else{
      x.value=withSpring(0,config)
    }

  })

  const animatedStyles = useAnimatedStyle(() => {
    return {
     
     transform:[{
       translateX:clamp(x.value,-(width-20),0)
     }],
    //  top:open.value?0:height-85
    left:width-20
    };
  });


  return (
    <View style={styles.Container}>
      {
        loading?
        <View style={styles.LoadingIndicator}>
        <Loading/>
        </View>
        :
     <View>
        <View style={styles.View1}>
        <CountryCase/>
     </View> 
     <GestureDetector gesture={gesture1}>
     <Animated.View style={[styles.BottomView, animatedStyles]} >
 
       <View style={styles.graph}>
       <Update api="https://disease.sh/v3/covid-19/historical/India?lastdays=5"/>
       </View>
     </Animated.View>
     </GestureDetector>
       </View>
      }

   
    </View>
  )
}

export default CovidUpdate

