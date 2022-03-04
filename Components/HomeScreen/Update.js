import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import axios from 'axios'
import BarGraph from './BarGraph'
import Loading from './Loading'
import { LineChart } from 'react-native-chart-kit'
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
    height:height,
    width:width,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
  }
})
const Update = ({api}) => {
  
  const [data,setData] = React.useState([]);
  const [data1,setData1] = React.useState([100,50,20,110,60]);
  const [loading,setloading] = React.useState(true);
  useEffect(()=>{
    async function getUser() {
     const response = await axios.get(api);
    const covid= response.data.timeline.cases
    const m=Object.keys(covid).map(key=>covid[key]/10000)
     setData1(Object.keys(covid).map(key=>parseInt(covid[key]/1000)))
     setData(Object.keys(covid).map(key=>key))
     setloading(false)
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
      {
        loading?
         <View style={styles.LoadingIndicator}>
         <Loading/>
         </View>
         :

<View>
<LineChart
  data={{
    labels: data,
    datasets: [

      {
        data:data1,
      }
    ]
  }}
  width={Dimensions.get("window").width} // from react-native
  height={height/2}
  
  yAxisSuffix="k"
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundColor: "#F84F46",
    backgroundGradientFrom: "#431936",
    backgroundGradientTo: "#15142A",
    decimalPlaces: 1, 
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 5,
   
  }}
/>
</View>

      }
   
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

