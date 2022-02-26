import { Dimensions, StyleSheet, Text, View,TouchableWithoutFeedback, Image, KeyboardAvoidingView, Keyboard, Button, Pressable, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import Animated, {  useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated'
import SignIn from './SignIn'
import SignUp from './SignUp'
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#fff',
  },
  Authentication1:{
    height:(height/2)+10,
    width:width-50,
    alignSelf:'center',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    top:-(height/6),
    borderRadius:20,
    shadowColor: "#000",
      shadowOffset: {
        width: 15,
        height: 15,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 15,
  },
  Authentication2:{
    height:(height/2)+10,
    width:width-50,
    alignSelf:'center',
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    top:-(height/6),
    borderRadius:20,
    shadowColor: "#000",
      shadowOffset: {
        width: 15,
        height: 15,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 15,
  },
  SignIn:{
    height:50,
    width:110,
    position:"absolute",
    alignSelf:'center',  
  
  },
  TopView:{
    height:(height/2)-10,
    width:width,
    position:'relative',
 
  },
  BottomView:{
    height:(height/2)+10,
    width:width,
    backgroundColor:'#fff',
  },
  SignInText:{
    fontSize:22,
    fontWeight:'bold',
    position:"absolute",
    top:height/4,
    alignSelf:'center',
  
    fontFamily:'Avanta Garde',
    borderWidth:1,
    borderColor:'black',
    paddingHorizontal:10,
    paddingVertical:7,
    borderRadius:5
    
  },
  TopViewImage:{
    height:(height/2)-10,
    width:width,
    resizeMode:'cover',
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    position:'absolute',
    zIndex:-1,
    
  },
  
  container: {
    flex: 1,
  },

 
})
const Authentication = () => {
  const [open,setOpen]=useState(0);

  const onPress=useCallback(()=>{
    "worklet"
    setOpen(!open);
  },[open])
  const configaration={
    damping:100,
    mass:0.3,
    stiffness:100,
    restSpeedThreshold:20,
    overshootClamping:true,
  }
  const animatedstyle1=useAnimatedStyle(()=>{
    return{
      transform:[{
        scale:open?withSpring(1,configaration):withSpring(0.7,configaration),
        
      }],
    }
  })
  const animatedstyle2=useAnimatedStyle(()=>{
    return{
      transform:[{
        scale:open?withSpring(0.7,configaration):withSpring(1,configaration)
      }],
      
    }
  })
  const S1="SIGN IN "
  const S2="SIGN UP"
  return (
    <View style={styles.Container}>
      <View style={styles.TopView}>
        <Image source={{uri:"https://trbahadurpur.com/wp-content/uploads/2021/12/5yb.jpg"}}
        style={styles.TopViewImage}
        />
        <TouchableWithoutFeedback onPress={onPress} style={styles.SignIn}>
          <Text style={styles.SignInText}>{(open)?S2:S1}</Text>
        </TouchableWithoutFeedback>       
      </View>
      <View style={styles.BottomView}>
        {
          (open)?
          <KeyboardAvoidingView behavior="position" style={styles.container} keyboardVerticalOffset={height/3+20} >
          <Animated.View  style={[styles.Authentication1,animatedstyle1]}>
              <SignUp/>
           </Animated.View>
            </KeyboardAvoidingView>

          :
          <KeyboardAvoidingView behavior="position" style={styles.container} keyboardVerticalOffset={height/3+20} >
          <Animated.View  style={[styles.Authentication2,animatedstyle2]}>
            <SignIn />
           </Animated.View>
            </KeyboardAvoidingView>
        }
     
      </View>
   
   
    </View>
  )
}

export default Authentication