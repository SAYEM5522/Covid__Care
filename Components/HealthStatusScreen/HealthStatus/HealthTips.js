import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import { selectScrollValue, setScrollValue } from '../../features/InTrackerSlice'
import Prevention from './Prevention'
import Recovering from './Recovering'
const {width, height} = Dimensions.get('window')
function clamp(value, lowerBound, upperBound) {
  'worklet';
  return Math.max(lowerBound, Math.min(value, upperBound));
}
const styles = StyleSheet.create({
  image:{
    width:width/2,
    height:height/1.5,
    resizeMode:"contain",
    marginTop:-50
    
  },
  ball:{
    height:height,
    width:width,
    backgroundColor:"#4E3EFB",
    position:'absolute',
    top:height-height/4,
    borderTopRightRadius:20,
    left:0,
   
  },
  ball2:{
    height:height,
    width:width,
    backgroundColor:"#1c3b4c",
    position:'absolute',
    top:height-height/5.5,
    borderTopLeftRadius:20,
    right:0
  },
  HealthTipsHeader:{
    width:width,
    height:90,
    backgroundColor:"#fff",
    position:"absolute",
    top:0,
    zIndex:1000
  },
  Caption:{
    fontSize:30,
    fontWeight:"bold",
    color:"black",
    marginLeft:20,
    fontFamily:"sans-serif-medium",
    fontStyle:"italic"

  },
  Caption2:{
    fontSize:18,
    fontWeight:"bold",
    color:"black",
    marginLeft:20,
    fontFamily:"sans-serif-medium"
  }
})
const config={
  mass:1,
  damping:16,
  overshootClamping:false,
  restDisplacementThreshold:0.1,
  restSpeedThreshold:0.6
}
const HealthTips = () => {
  const y1=useSharedValue(0);
  const y2=useSharedValue(0);
  const contex=useSharedValue(0);
  const gesture1 = Gesture.Pan()
  .onBegin(() => {
    contex.value = y1.value;
  })
  .onUpdate((e) => {
    y1.value = contex.value+ e.translationY;
  })
  .onEnd(() => {
    if(y1.value<-5 && y1.value>-200){
      y1.value = withSpring(-(height-height/3.7),config);
      }
      else{
        y1.value = withSpring(0,config);
      }
  })
  const gesture2 = Gesture.Pan()
  .onBegin(() => {
    contex.value = y2.value;
  })
  .onUpdate((e) => {
    y2.value = contex.value+ e.translationY;

  })
  .onEnd(() => {
    if(y2.value<-5 && y2.value>-200){
      y2.value = withSpring(-(height-height/5),config);
      }
      else{
        y2.value = withSpring(0,config);
      }
  })

  const animatedStyles = useAnimatedStyle(() => {
    return {
     transform:[{
       translateY:clamp(y1.value,-(height-height/3.7),0)
     }],
     width:interpolate(y1.value,[0,-100],[width-100,width],Extrapolate.CLAMP),
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
     transform:[{
       translateY:clamp(y2.value,-(height-height/5),0)
     }],
     width:interpolate(y2.value,[0,-200],[width-100,width],Extrapolate.CLAMP)

    };
  });

  return (
    <View > 
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:-50}}>
        <View>
        <Text style={styles.Caption}>Covid Care</Text>
        <Text style={styles.Caption2}>Stay Safe, Stay Home</Text>
        </View>
      <Image
     source={require('../../../Components/assets/doctor2.png')}
      style={styles.image}
     />
      </View>
    
     <GestureDetector gesture={gesture1}>
     <Animated.View style={[styles.ball, animatedStyles]} >
     <Prevention y1={y1}/>
     </Animated.View>
    </GestureDetector>
    <GestureDetector gesture={gesture2}>
    <Animated.View style={[styles.ball2, animatedStyles2]} >
     <Recovering y2={y2}/>
    </Animated.View>
    </GestureDetector>
   
    
    </View>
  )
}

export default HealthTips

