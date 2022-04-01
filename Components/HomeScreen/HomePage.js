import { StyleSheet, Text, View,Dimensions,Image,Pressable } from 'react-native'
import React, { useCallback } from 'react'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
const {width,height}=Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  Container:{
    height:width/1.68,width:(width/2)-10,borderRadius:20,backgroundColor:"red",marginLeft:5,marginTop:5
  },
  Text:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    alignSelf:"center",
    fontFamily:"sans-serif-medium",

  },
  Text2:{
    fontSize:13,
    color:"white",
    fontWeight:"bold",
    fontFamily:"sans-serif-medium",
    width:(width/2)-20,
    textAlign:"center",
    marginTop:5,
    marginLeft:3,
    fontStyle:'italic'
  }
})
const HomePage = ({item,index}) => {
  const navigation = useNavigation();
  const AnimatedTop=useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:(index%2==0)?-55:0
     }],
     backgroundColor:(index==0)?"#ed254eff":"#020A22"
    }
  })
  const onPress=useCallback(()=>{
      navigation.navigate(item.name)
  },[])
  return (
    <Pressable onPress={onPress}>
    <Animated.View style={[styles.Container,AnimatedTop]}>
        <Image
        source={item.image}
        style={{width:width/4.5,height:width/4.5,resizeMode:'contain',alignSelf:"center",top:-20}}
        />
        <Text style={styles.Text}>{item.Type}</Text>
        <Text style={styles.Text2}>{item.des}</Text>

    </Animated.View>
    </Pressable>

  )
}

export default HomePage

