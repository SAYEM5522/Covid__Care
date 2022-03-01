import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import { selectScrollValue, setScrollValue } from '../../features/InTrackerSlice'
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  image:{
    width:width,
    height:height,
    resizeMode:"cover",
    position:"relative",
    
  },
  ball:{
    height:height,
    width:width,
    backgroundColor:"black",
    position:'absolute',
    top:height-height/3.7,
    borderTopRightRadius:20,
    left:0,
   
  },
  ball2:{
    height:height,
    width:width,
    backgroundColor:"blue",
    position:'absolute',
    top:height-height/5,
    borderTopLeftRadius:20,
    right:0
  },
  HealthTipsHeader:{
    width:width,
    height:70,
    backgroundColor:"#fff",
    position:"absolute",
    top:0,
    zIndex:1000
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
    if(y1.value<-10 && y1.value>-200){
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
    if(y2.value<-10 && y2.value>-200){
      y2.value = withSpring(-(height-height/5),config);
      }
      else{
        y2.value = withSpring(0,config);
      }
    // y2.value = withSpring(0,config);
  })
  const animatedStyles = useAnimatedStyle(() => {
    return {
     transform:[{
       translateY:y1.value
     }],
     width:interpolate(y1.value,[0,-100],[width-100,width,Extrapolate.CLAMP])
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
     transform:[{
       translateY:y2.value
     }],
     width:interpolate(y2.value,[0,-100],[width-100,width,Extrapolate.CLAMP])

    };
  });
  const HeaderStyle=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withSpring(interpolate(y1.value,[0,-(height-height/3.7)],[-70,0],Extrapolate.CLAMP),config)
      }]
    }
  })

  return (
    <View> 
      <Image
     source={{uri:"https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722_960_720.jpg"}}
      style={styles.image}
     />
     <Animated.View style={[styles.HealthTipsHeader,HeaderStyle]}>

     </Animated.View>
     <GestureDetector gesture={gesture1}>
    <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
    <GestureDetector gesture={gesture2}>
    <Animated.View style={[styles.ball2, animatedStyles2]} />
    </GestureDetector>
    
    </View>
  )
}

export default HealthTips

