import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
const {width,height}=Dimensions.get('window');
const PreventationData=[
  { 
    id:1,
    type:"Distance",
    description:"Keep physical distance of at least 1 metre from others, even if they don't appear to be sick. Avoid crowds and close contact."
  },
  { 
    id:2,
    type:"Clean And Disinfect",
    description:"Cover your mouth and nose with a bent elbow or tissue when you cough or sneeze. Dispose of used tissues immediately and clean hands regularly."
  },
  { 
    id:3,
    type:"Wear A Mask",
    description:"Wear a properly fitted mask when physical distancing is not possible and in poorly ventilated settings and Clean your hands frequently with alcohol-based hand rub."
  },
  { 
    id:4,
    type:"Vaccination",
    description:"Get vaccinated as soon as it's your turn and follow local guidance on vaccination."
  }
]
const Prevention2=[
  {
    id:1,
    des:"Stay home when you are sick."
  },
  {
    id:2,
    des:"Avoid touching your eyes, nose and mouth."
  },
  {
    id:3,
    des:"Stay aware of travel guidelines."
  }
]
const styles = StyleSheet.create({
  Header:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginTop:5,
    marginLeft:width/2-50

  },
  ID:{
    position:"absolute",left:10,color:"white",fontWeight:"bold",
  },
  Type:{
    color:"white",alignSelf:"center",fontWeight:"bold",fontSize:15
  },
  Des:{
    color:"white",paddingLeft:10,fontWeight:"700"
  },
  Round:{
    width:10,height:10,borderRadius:5,backgroundColor:"white",
  }

})
const Prevention = ({y1}) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
     opacity:interpolate(y1.value,[0,-150],[0,1],Extrapolate.CLAMP),
    };
  });
  return (
    <View>
        <Text style={styles.Header}>Prevention</Text>
        <Animated.View style={[{marginTop:20},animatedStyles]}>
        {
          PreventationData.map((item,index)=>{
            return(
              <View key={index}style={{height:96,width:width-35,alignSelf:"center",backgroundColor:"#2C45B0",borderRadius:10,marginBottom:7}} >
                <Text style={styles.ID}>{item.id}.</Text>
                <Text style={styles.Type}>{item.type}</Text>
                <Text style={styles.Des}>{item.description}</Text>
              </View>
            )
          })
        }
        {
          Prevention2.map((item,index)=>{
            return(
              <View key={index} style={{flexDirection:"row",alignItems:"center",marginLeft:20,marginTop:5}}>
                <View style={styles.Round}/>
                <Text style={styles.Des}>{item.des}</Text>
              </View>
            )
          })
        }
        </Animated.View>
    </View>
  )
}

export default Prevention

