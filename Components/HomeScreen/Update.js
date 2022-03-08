import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { BarChart, LineChart } from 'react-native-chart-kit'
import Ionicons from "react-native-vector-icons/Ionicons"
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({

  UpdateContaner:{
    position:'absolute',
    left:0,
    right:0
  },
  Graph:{
    display:"flex",
    top:-35,
    alignSelf:'center'

  },
  Image:{
    height:50,
    width:50,
    resizeMode:"contain",
    borderRadius:50,
    alignSelf:'center',
    top:13,
    left:5
   
  },
  CountryName:{
    fontSize:20,
    color:'black',
    fontFamily:"sans-serif-medium",
    marginTop:20,
    alignSelf:'center'
  },
  HeaderContainer:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    alignSelf:'center'
  },
  Caption:{
    fontSize:23,
    color:'black',
    fontFamily:"sans-serif-medium",
    marginTop:20,
    fontWeight:'bold',
    marginLeft:20

  },
  CaptionText:{
    fontSize:20,
    color:'black',
    fontFamily:"sans-serif-medium",
    marginTop:15,
    marginLeft:20

  },
  CaptionList:{
    flexDirection:'row',
    alignItems:'center',
    display:'flex',
  },
  IconStyle:{
    padding:6,
    backgroundColor:'rgba(0,0,0,0.1)',
    borderRadius:20,
    top:7,
    left:10
  }
})
const lable=["TodayDeaths","TodayCases","todayRecovered"];
const Update = ({country,item}) => {


  const barData=()=>{
    "worklet";
    let data=[];
    (item.map((item)=>{
      (country===item.country)?
      data.push(item.todayDeaths,item.todayCases,item.todayRecovered):null;
    }
    ))
    return data;
  }
  const IData=()=>{
    "worklet";
    let data=[];
    (item.map((item)=>{
      (country===item.country)?
      data.push(item.flag,item.country,item.cases,item.recovered,item.deaths,item.active):null;
    }
    ))
    return {data,name:data[1],cases:data[2],recovered:data[3],deaths:data[4],active:data[5]};
  }
   const {data,name,cases,deaths,recovered,active} =IData()
 
  return (
    <View style={styles.UpdateContaner}>
   
      <View style={{height:height/2}}>
        <View style={styles.HeaderContainer}>
        <Text style={styles.CountryName}>{name}</Text>
        <Image
        source={{uri:data[0]}}
        style={styles.Image}
        />
    
        </View>
        <Text style={styles.Caption}>Today's Information</Text>
        <View>
        <Text style={styles.CaptionText}>Deaths Rate {((deaths/cases)*100).toFixed(2)}% </Text>
        </View>
        <View style={styles.CaptionList}> 
        <Text style={styles.CaptionText}>Recovered Rate {((recovered/cases)*100).toFixed(2)}% </Text>
        <Ionicons style={styles.IconStyle} name='arrow-up' color="green" size={27}/>
        </View>
        <View style={styles.CaptionList}>
        <Text style={styles.CaptionText}>Active Rate {((active/cases)*100).toFixed(2)}% </Text>
        <Ionicons style={styles.IconStyle} name='arrow-down-outline' color="red" size={27}/>

        </View>
      </View>
      
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
          yAxisInterval={0}
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

