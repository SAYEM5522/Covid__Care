import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback,useEffect} from 'react'
import Update from './Update'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import CountryCase from './CountryCase'
import Loading from './Loading'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectCountry,setData } from '../features/InTrackerSlice'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'black',
  },
  BottomView:{
    width:width,
    height:height,
    backgroundColor:'#fff',
    borderRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    top:-height
   
  },
  View1:{
    height:height
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
  const SearchCountry=useSelector(selectCountry)
  useEffect(()=>{
    async function getUser() {
     const response = await axios.get("https://disease.sh/v3/covid-19/countries?yesterday=true");
     const country= response.data.map((item)=>({
        timestamp:item.updated,
        todayCases:item.todayCases,
        todayDeaths:item.todayDeaths,
        todayRecovered:item.todayRecovered,
        country:item.country,
        flag:item.countryInfo.flag,
        cases:item.cases,
        active:item.active,
        recovered:item.recovered,
        critical:item.critical,
        deaths:item.deaths,
        casesPerOneMillion:item.casesPerOneMillion,
        deathsPerOneMillion:item.deathsPerOneMillion,
        recoveredPerOneMillion:item.recoveredPerOneMillion,
        criticalPerOneMillion:item.criticalPerOneMillion,
        
      }))
     setData(country)
     setloading(false)
    }
  getUser(),
  ()=> getUser();
  },[])
  const x=useSharedValue(0);
  const contex=useSharedValue(0);

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
     <>
        <View style={styles.View1}>
        <CountryCase item={data} />
        </View> 
        <View>
        <GestureDetector gesture={gesture1}>
     <Animated.View style={[styles.BottomView, animatedStyles]} >
 
         {
           <Update item={data} country={SearchCountry}  />
         }
       
     </Animated.View>
     </GestureDetector>
          </View>
    
    </>
      }
    </View>
  )
}

export default CovidUpdate

