import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
const {width,height}=Dimensions.get('window');
const Recovering1=[
  { 
    id:1,
    img:require('../../../Components/assets/r1.png'),
    
    description:"Separate yourself from other people in your home."
    
  },
  { 
    id:2,
    img:require('../../../Components/assets/r2.png'),
    description:"Follow the doctor's recommendations about care and home isolation."
  },
  { 
    id:3,
    img:require('../../../Components/assets/r3.png'),
    description:"Intake fluids and pain relievers as needed."

  },
  { 
    id:4,
    img:require('../../../Components/assets/r4.png'),
    description:"Eat healthy meals and stay hydrated."
  }
]
const Recovering2=[
  { 
    id:1,
    img:require('../../../Components/assets/r3.png'),
    description:"To recover you will be in the hospital for a few days."

  },
  { 
    id:2,
    img:require('../../../Components/assets/r5.png'),
    description:"Older adults and people of any age with existing medical conditions should call their doctor as soon as symptoms start."
    
  },
  { 
    id:3,
    img:require('../../../Components/assets/r6.png'),
    description:"Hospital care may include oxygen. You may have chest pain and exercise intolerance if you have inflammation on your heart."
  },


]
const styles = StyleSheet.create({
  Header:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginTop:5,
    marginLeft:width/2-50
  },
  Caption1:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff',
    marginTop:5,
    alignSelf:"center",
    fontFamily:"sans-serif-medium",
  },
  ItemView:{
    marginTop:5,
    height:65,
    width:width-30,
    backgroundColor:"white",
    borderRadius:7,
    flexDirection:"row",
    alignItems:"center"
  },
  ItemView2:{
    marginTop:5,
    height:75,
    width:width-30,
    backgroundColor:"white",
    borderRadius:7,
    flexDirection:"row",
    alignItems:"center"
  },
  text1:{
    width:width-100,
    fontFamily:"sans-serif-medium",
    color:"black"
  }
})
const Recovering = ({y2}) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
     opacity:interpolate(y2.value,[0,-250],[0,1],Extrapolate.CLAMP),
    };
  });
  return (
    <View >
        <Text style={styles.Header}>Recovering</Text>
        <View>
        <Text style={styles.Caption1}>If the condition is mild</Text>
        <Animated.View style={[{alignSelf:"center"},animatedStyles]}>
          {
            Recovering1.map((item,index)=>{
              return(
                <View  style={styles.ItemView} key={index}>
                  <Image 
                  source={item.img}
                  style={{width:60,height:60,borderRadius:20,
                    resizeMode:'cover',}}
                  />
                  <Text style={styles.text1}>{item.description}</Text>
                </View>
              )
            })
          }
        </Animated.View>
        <Text style={styles.Caption1}>If the condition is moderate to severe</Text>
        <View style={{alignSelf:"center"}}>
          {
            Recovering2.map((item,index)=>{
              return(
                <View  style={styles.ItemView2} key={index}>
                   <Image 
                  source={item.img}
                  style={{width:60,height:60,borderRadius:20,
                    resizeMode:'cover',}}
                  />
                  <Text style={styles.text1}>{item.description}</Text>
                </View>
              )
            })
          }
        </View>
        </View>
    </View>
  )
}

export default Recovering

