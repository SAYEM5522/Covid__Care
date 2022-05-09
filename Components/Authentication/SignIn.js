import { Dimensions, Keyboard, Pressable, StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
const { width, height } = Dimensions.get('window')
import axios from "axios"
import Feather from "react-native-vector-icons/Feather";
import { useSharedValue } from 'react-native-reanimated';
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
const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const postuser= async()=>{
    const data={
      email,
      password
    }
    await axios.post("https://covid-care8.herokuapp.com/auth",data).then(res=>{
    console.log(res.data)
   }).catch(err=>{
      console.log(err)
   })
    
  }
  const Submit=useCallback(()=>{
    postuser()
  },[])
  const onPress=useCallback(()=>{
        setPasswordVisible(!passwordVisible);
  },[ passwordVisible])
  return (
     <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={{paddingBottom:15}}>
              <Text> Email </Text>
            <TextInput
            keyboardType='default'
            placeholder='Email...' 
            onChangeText={(text)=>setEmail(text)}
            style={styles.textInput} />
              </View>
            <View>
            <Text> Passward </Text>
            <TextInput  
             password={true}
             secureTextEntry={!passwordVisible}
             autoCompleteType="password"

             placeholder='PassWard...'
              onChangeText={(text)=>setPassword(text)}
              style={styles.textInput}                 
              />
              <Feather name={passwordVisible?"eye":"eye-off"} onPress={onPress} size={23} style={{position:'absolute',right:10,bottom:10}}/>
            <Text style={{alignSelf:"center",marginTop:15}} onPress={Submit}>Submit</Text>

              </View>
            </View>
            </Pressable>
  )
}

export default SignIn