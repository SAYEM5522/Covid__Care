import { StyleSheet, Text, View,Dimensions,ScrollView,Image } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
const {width,height} = Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient';
import Page from './Page';
const data=[
  {
     id:1,
     infectionType:"Flu",
     color:"#30c3f1",
     img:require("../assets/ob2.png"),
     type:"Health Tips",
     des:"Ensure your wellbeing by following our guidelines"
 },
   {
     id:2,
     infectionType:"Fever",
      color:"black",
      img:require("../assets/ob2.png"),
     type:"Symptom Tracker",
     des:"Worried about developing covid symptoms? self assess yourself here"

 }
 ,
   {
     id:3,
     infectionType:"Cold",
      color:"#f1c40f",
      img:require("../assets/ob4.png"),
      type:"Covid Tracker",
      des:"Locate high risk areas to avoid infection ",
      show:true

 },

]
const styles = StyleSheet.create({
  Dot:{
    width:10,
    height:10,
    borderRadius:10,
    backgroundColor:'white',
    marginLeft:15,

  
  },
  DotList:{
    position:'absolute',
    bottom:35,
    left:0,
    right:0,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  Container:{
    flex:1,
    position:'relative',
    zIndex:-1000,
    backgroundColor:'black'
  },
  RoundView:{
    position:'absolute',
    height:width,
    width:width,
    borderRadius:width,
    backgroundColor:'red',
    top:'25%',
    left:-50,
    zIndex:-1000, 
  },
  Name:{
    position:'absolute',
    left:'6%',
    color:'white',
    fontSize:23,
    top:'5%',
    fontFamily:"sans-serif-medium"

  }
 
})

const Onboarding = () => {
  const x=useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    x.value = event.contentOffset.x;
  });
  return (
    <View style={styles.Container}>
      <Text style={styles.Name}>COVID CARE</Text>
       <View style={styles.RoundView}/>

       <LinearGradient
       start={{x: 1, y:0.5}} end={{x: 0.2, y: 0.9}}
        colors={['#833ab4', '#ce2858', '#f1202c','#f1202c','#833ab4']} style={styles.RoundView}/>
      <Animated.ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToAlignment={"start"}
      snapToInterval={width}
      decelerationRate={"normal"}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      pagingEnabled={true}
      >
        {
          data.map((item,index)=>{
            return(
               <Page key={index} x={x} item={item} index={index}/>
            )
          })
        }
      </Animated.ScrollView>
   
      <View style={styles.DotList}>
          {
            data.map((item,index)=>{
                const AnimatedStyle=useAnimatedStyle(()=>{
                  return{
                    transform:[{
                      scale:interpolate(x.value,[(index-1)*width,index*width,(index+1)*width],[0.6,1,0.6],Extrapolate.CLAMP)
                    }],
                    opacity:interpolate(x.value,[(index-1)*width,index*width,(index+1)*width],[0.4,1,0.4],Extrapolate.CLAMP)
                  }
                })
              return(
                <Animated.View key={item.id} style={[styles.Dot,AnimatedStyle]}/>
              )
            })
          }
      </View>
      </View>
  )
}

export default Onboarding

