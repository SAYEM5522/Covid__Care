import { StyleSheet, Text, View,Pressable,Dimensions } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {useNavigation} from '@react-navigation/native';
import Svg, { Circle, G } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
const BACKGROUND_STROKE_COLOR = '#FFAA93';
const STROKE_COLOR = 'black';
const CIRCLE_LENGTH = 500; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);
const HALF_WIDTH = R + 15;
const styles = StyleSheet.create({
  Header:{
    height:60,
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:"center",
    paddingHorizontal:20
  },
  HeaderText:{
    color:"white",
    fontSize:20,
    fontFamily:"sans-serif-medium",
  },
  ParentCircle:{
    width:width-100,
    height:width-100,
    borderRadius:(width-100)/2,
    backgroundColor:"#D77666",
    alignSelf:"center",
    top:20
  },
  TopText:{
    color:"white",
    fontSize:23,
    fontFamily:"sans-serif-medium",
  },
  TopText2:{
    color:"white",
    fontSize:14,
    fontFamily:"sans-serif-medium",
    marginTop:5,
    alignSelf:"center"
  },
 
  TextAnimation2:{
    fontSize: R / 4,
    fontWeight: "500",
    textAlign: "center",
    color:"white",
    top:130,
  },
  TextAnimationView:{
    width:100,
    height:100,
    backgroundColor:"#FFAA93",
    top:100,
    borderRadius:60,
    left:100
  },
  TextAnimation:{
    fontSize: R / 3,
    fontWeight: "500",
    textAlign: "center",
    color:"white",
    position:"absolute",
    left:45,
    top:30
   
  },

})
const IsolationTracker = () => {
  const navigation=useNavigation();
  const [data, setData] = React.useState(7)
  const onPress=useCallback(()=>{
      setData(10)
  },[data])
  const onPress2=useCallback(()=>{
    setData(14)
},[data])
const BackButton=useCallback(()=>{
    navigation.goBack()
},[])

const future = moment(moment().add(data, 'd').format("YYYY-MM-DD"));
const currentDate = [moment().get('year'), moment().get('month') + 1, moment().get('date')];
const futureDate = [future.get('year'), future.get('month') + 1, future.get('date')];
const timeInterval=useDispatch()
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const animatedProps = useAnimatedProps(() => ({
  strokeDashoffset: CIRCLE_LENGTH * (1 - 0.3),
}));
  return (
    <View style={{backgroundColor:"black",flex:1}}>
      <View style={styles.Header}>
       <Entypo name='cross' color={"white"} size={29} onPress={BackButton}/>
       <View style={{flexDirection:"row",alignItems:"center"}}>
         <MaterialCommunityIcons name='human-male-board' color={"white"} size={25} style={{marginTop:8,marginRight:10}}/>
          <Text style={styles.HeaderText}>Isolation</Text>
       </View>
        <Ionicons name='settings' color={"white"} size={25}/>
      </View>
      <View style={styles.ParentCircle} >
      <Svg
         width={R * 2}
         height={R * 2}
        viewBox={`${-HALF_WIDTH} ${-HALF_WIDTH} ${2 * HALF_WIDTH} ${
          2 * HALF_WIDTH
        }`}
        style={{position:"absolute",left:70,top:70}}
        >
         <G rotation={"-90"} >
        <Circle
          cx={0}
          cy={0}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={15}
        />
      
        <AnimatedCircle
          cx={0}
          cy={0}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
          fill="transparent"
        />
        </G>
      </Svg>
      <View style={styles.TextAnimationView}>
      <Text style={styles.TextAnimation}>7</Text>
      </View>
        <Text style={styles.TextAnimation2}>days to go</Text>
      </View>
      <View style={{position:"absolute",top:70,alignSelf:"center"}}>
      <Text style={styles.TopText}>You need to self-isolate </Text>
      <Text style={styles.TopText2}> until {moment().add(data, 'd').format("MMMM Do YYYY, h:mm:ss a")}
      </Text>
      </View>
      {/* <Pressable onPress={onPress} style={{height:30,width:50,margin:30}}>
        <Text>Start1</Text>
      </Pressable>
      <Pressable onPress={onPress2} style={{height:30,width:50,margin:30}}>
        <Text>Start2</Text>
      </Pressable> */}
      <Text>{(moment(futureDate).diff(moment(currentDate), 'days'))}</Text>

    </View>
  )
}

export default IsolationTracker

// #192225