import { Dimensions, Keyboard, Pressable, StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
const { width, height } = Dimensions.get('window')
import axios from "axios"
import Feather from "react-native-vector-icons/Feather";
import { selectID, setUser } from '../features/InTrackerSlice';
import { useDispatch, useSelector } from 'react-redux';
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
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch=useDispatch();
  const id=useSelector(selectID)
  const postuser= async()=>{
    const data={
      name,
      email,
      password
    }
    await axios.post('http://localhost:5001/user',({
      name,
      email,
      password
    }),{headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
      }}
  ).then(res=>{
    dispatch(setUser({
      ID:res.data.id,
    }))
   }).catch(err=>{
      console.log(err.message)
   })

  // fetch('https://covid-care8.herokuapp.com/user', {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //     }) .then(response => response.json())
  //         .then(data => {
  //          dispatch(setUser({
  //            ID:data.id,
  //          }))
  //         }
  //           )
  //         .catch(err => console.error(err.message))
          const getId=async ()=>{
            await axios.get(`https://covid-care8.herokuapp.com/userDetails?id=6252dc4b72e12c36e561d596`).then((res)=>{
                dispatch(
                    setUser({
                      name: res.data.name,
                      email: res.data.email,
                    }))
                
            }).catch((err)=>{
              console.log(err.message);
            })
        }
        getId()
    
  }

  const onPress2=useCallback(()=>{
    setPasswordVisible2(!passwordVisible2);

},[ passwordVisible2])
const Submit=useCallback(()=>{
  postuser()
},[])
// useEffect(()=>{
//   const getId=async ()=>{
//     await axios.get(`https://covid-care8.herokuapp.com/userDetails?id=6252eeebfbd1f8daaa6d1f82`).then((res)=>{
//         dispatch(
//             setUser({
//               name: res.data.name,
//               email: res.data.email,
//             })),
//             console.log(res.data)
        
//     }).catch((err)=>{
//       console.log(err);
//     })
// }
// getId(),
// ()=>getId()
// },[id])
  return (
     <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={{paddingBottom:15}}>
              <Text> Username </Text>
            <TextInput placeholder='UserName...' 
            onChangeText={(text)=>setName(text)}
            style={styles.textInput} />
              </View>
          <View>

      
            <Text> Email </Text>
            <TextInput 
            placeholder='Email...'
            onChangeText={(text)=>setEmail(text)}
             style={styles.textInput} />
                </View>
            <View style={{paddingTop:15}}>
            <Text> Passward </Text>
            <TextInput 
              secureTextEntry={!passwordVisible2}
              onChangeText={(text)=>setPassword(text)}
              autoCompleteType="password"
              placeholder='Comfirm Passward...'
               style={styles.textInput} />
                 <Feather name={passwordVisible2?"eye":"eye-off"} onPress={onPress2} size={23} style={{position:'absolute',right:10,bottom:10}}/>
            </View>
            <Text style={{alignSelf:"center",marginTop:15}} onPress={Submit}>Submit</Text>
            </View>

            </Pressable>
  )
}

export default SignUp