import { StyleSheet, Text, View,Image, Dimensions, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
const {width,height}=Dimensions.get('window');
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  Image:{
    height:height/2,
    width:width/2,
    zIndex:1000,
  },
  Type:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginTop:20,
  },
  ItemView:{
    height:height/2,
    width:width,
   
  },
  Des:{
    width:width/2-20,
    top:15,
    color:'white',
    fontFamily:"sans-serif-medium"

  },
  Button:{
    position:'absolute',
    bottom:-width/5,
    left:0,
    right:0,
    width:width/4,
    height:40,
    borderRadius:6,
    backgroundColor:'white',
  },
  ButtonText:{
    alignSelf:'center',
    justifyContent:'center',
    color:'black',
    fontFamily:"sans-serif-medium",
    top:7
  }
})
const configaration={
  damping:100,
  mass:100,
  stiffness:15,
  restSpeedThreshold:20,
  overshootClamping:true,
  restDisplacementThreshold:100,
}
const Page = ({x,item,index}) => {
  const navigation = useNavigation()
  const onPress = useCallback(() => {
    navigation.push("Screen")
  },[])
  const ImageStyle=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:withSpring(interpolate(x.value,[index*width,(index+1)*width,(index-2)*width],[width/1.6,width/3,width/1.6],Extrapolate.CLAMP),{damping:100,mass:1}),
      },
     
    ]
    ,
    top:150
    }
  })
  const ItemViewStyle=useAnimatedStyle(()=>{
    return{
      top:300,
      transform:[{
        translateX:withSpring(interpolate(x.value,[index*width,(index+1)*width,(index-2)*width],[width/3,10,width/3],Extrapolate.CLAMP),{damping:40,mass:1}),
      }, 
     
    ],
    }
  })
  return (
    <Animated.View key={item.id} style={styles.ItemView}>
    <Animated.View style={ItemViewStyle} >
    <Text style={styles.Type}>{item.type}</Text>
    <Text style={styles.Des}>{item.des}</Text>
   
    {
       (item.show)?
       <Pressable onPress={onPress} style={styles.Button} >
       <Text style={styles.ButtonText}> Get Started</Text>
      </Pressable>
      :null
    }
   
    </Animated.View>
    <Animated.Image source={item.img} style={[styles.Image,ImageStyle]}/>
  </Animated.View>
  )
}

export default Page

