import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-wagmi-charts';
import Animated, {  } from 'react-native-reanimated';
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create({

  Graph:{
   flex:1,
   backgroundColor:'#020A22'

  },
  GraphView:{
    width:width,
    height:height/2,
    backgroundColor:"#07122B",
    display:'flex',
    alignItems:"center",
    position:'relative',
    marginTop:50,
  },
  GraphLine1:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:height/3.2,
    left:width/8

  },
  GraphLine2:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80,
    left:width/8

  },
    GraphLine3:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80*2,
    left:width/8

  },
  GraphLine4:{
    width:width-110,
    height:0.25,
    backgroundColor:"white",
    position:'absolute',
    top:(height/3.2)-80*3,
    left:width/8
  },
  LineChart:{
    marginLeft:30,
  

  }

})
const Home = () => {

  return (
    <Animated.View style={[styles.Graph]}>
      {/* <View style={styles.GraphView}>
        <View style={styles.GraphLine1}/>
        <View style={styles.GraphLine2}/>
        <View style={styles.GraphLine3}/>
        <View style={styles.GraphLine4}/>
    <LineChart.Provider data={data}  >
      <LineChart height={height/3} width={width-110} yGutter={20} style={styles.LineChart} >
      <LineChart.Path color="#FD5849" width={5}  >
      <LineChart.Gradient color="#6D1F44"  opacity={12}   />
    </LineChart.Path>

    <LineChart.CursorCrosshair color='white' />
      <LineChart.CursorLine lineProps={{scaleX:1.5,}}  color={"white"} />
    </LineChart>
    </LineChart.Provider>
    </View> */}
    </Animated.View>
  )
}

export default Home

