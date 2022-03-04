import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { BarChart, LineChart } from 'react-native-chart-kit'
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({

  UpdateContaner:{
    position:'absolute',
    left:0,
    right:0
  },
  Graph:{
    display:"flex",
    top:(height/2.2),
    alignSelf:'center'

  },
})
const lable=["TodayDeaths","TodayCases","todayRecovered"];

const Update = ({item,country}) => {
  const barData=()=>{
    "worklet";
    let data=[];
    (item.map((item)=>{
      (country===item.country)?data.push(item.todayDeaths,item.todayCases,item.todayRecovered):null;
    }
    ))
    return data;
  }
  
  return (
    <View style={styles.UpdateContaner}>
        <View style={styles.Graph}>
        <BarChart
          data={{
            labels: lable,
            datasets: [

              {
                data:barData(),
              }
            ]
          }}
          width={width-25} 
          height={height/2}
          yAxisInterval={1}
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

          //   //  setData1(Object.keys(covid).map(key=>parseInt(covid[key]/1000)))
  //   //  setData(Object.keys(covid).map(key=>key))

