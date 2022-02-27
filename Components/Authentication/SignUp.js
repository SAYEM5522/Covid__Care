import { Dimensions, Keyboard, Pressable, StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
const { width, height } = Dimensions.get('window')
import Feather from "react-native-vector-icons/Feather";
const styles = StyleSheet.create({
  inner: {
    paddingVertical:10 ,
    flex: 1,
    display: 'flex',
    justifyContent:'center',
  },
  textInput: {
    height: 50,
    borderColor: '#000000',
    width:width-100,
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal:10,
    position:'relative',
    
  },
})
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const onPress=useCallback(()=>{
        setPasswordVisible(!passwordVisible);
  },[ passwordVisible])
  const onPress2=useCallback(()=>{
    setPasswordVisible2(!passwordVisible2);
},[ passwordVisible2])
  return (
     <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={{paddingBottom:15}}>
              <Text> Username </Text>
            <TextInput placeholder='UserName...' style={styles.textInput} />
              </View>
          <View>

      
            <Text> Passward </Text>
            <TextInput 
            secureTextEntry={!passwordVisible}
            autoCompleteType="password"
            placeholder='PassWard...' style={styles.textInput} />
              <Feather name={passwordVisible?"eye":"eye-off"} onPress={onPress} size={23} style={{position:'absolute',right:10,bottom:10}}/>
                </View>
            <View style={{paddingTop:15}}>
            <Text> Comfirm Passward </Text>
            <TextInput 
              secureTextEntry={!passwordVisible2}
              autoCompleteType="password"
            placeholder='Comfirm Passward...' style={styles.textInput} />
                 <Feather name={passwordVisible2?"eye":"eye-off"} onPress={onPress2} size={23} style={{position:'absolute',right:10,bottom:10}}/>
            </View>
            </View>

            </Pressable>
  )
}

export default SignUp
