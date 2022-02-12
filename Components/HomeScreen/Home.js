import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-wagmi-charts';
import Animated, {  } from 'react-native-reanimated';
import data from "../Data";
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'black',
  },
  Graph:{
  
   flex:1,
   backgroundColor:'#020A22'

  },
  GraphView:{
    width:width,
    height:height/2,
    backgroundColor:"#07122B",
    display:'flex',
    alignItems:'center',
    position:'relative',
    marginTop:50
  },
  GraphLine1:{
    width:width-90,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:height/3.2,
  },
  GraphLine2:{
    width:width-90,
    height:0.25,

    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80,
  },
    GraphLine3:{
    width:width-90,
    height:0.25,

    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80*2,
  },
  GraphLine4:{
    width:width-90,
    height:0.25,

    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80*3,
  }
})
const Home = () => {

  return (
    <Animated.View style={[styles.Graph]}>
      <View style={styles.GraphView}>
        <View style={styles.GraphLine1}/>
        <View style={styles.GraphLine2}/>
        <View style={styles.GraphLine3}/>
        <View style={styles.GraphLine4}/>
    <LineChart.Provider data={data}  >
      <LineChart height={height/3} width={width-90} yGutter={20}  >
      <LineChart.Path color="#FD5849" width={5}  >
      <LineChart.Gradient color="#6D1F44"  opacity={12}   />
    </LineChart.Path>
    <LineChart.Tooltip
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          color: 'white',
          fontSize: 18,
          padding: 4,
          height:20,
          width:70,
        }}
/>
    <LineChart.CursorCrosshair color='white' />
      <LineChart.CursorLine lineProps={{scaleX:1.5,}} color={"white"} />
    </LineChart>
    </LineChart.Provider>
    </View>
    </Animated.View>
  )
}

export default Home

