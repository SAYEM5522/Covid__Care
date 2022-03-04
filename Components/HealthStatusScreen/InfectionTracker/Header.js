import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
const {width,height}=Dimensions.get("window")
import { useNavigation } from '@react-navigation/native'
const styles = StyleSheet.create({
  Header:{
    height:height/11,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  HeaderText:{
    fontSize:20,
    color:'black',
    fontFamily:"sans-serif-medium",
  },
  headerIcon:{
    left:10,
    marginRight:width/3
  }
})
const Header = () => {
  const navigation=useNavigation();
  const onPress=useCallback(()=>{
    navigation.goBack()
  },[])
  return (
    <View style={styles.Header}>
         <AntDesign name='left' size={30} onPress={onPress} style={styles.headerIcon} color={"black"}/>
         <Text style={styles.HeaderText}>
           Symptoms
         </Text>
    </View>
  )
}

export default Header

