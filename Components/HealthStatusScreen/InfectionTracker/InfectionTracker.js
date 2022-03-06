import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useCallback } from 'react'
import Item from './Item'
import { useNavigation } from '@react-navigation/native'
import Header from './Header'

const {width,height} = Dimensions.get('window')
 const data=[
   {
      id:0,
      infectionType:"Fatigue",
      img:require('../../../Components/assets/sym1.png'),
  },
    {
      id:1,
      infectionType:"Vomit",
      img:require('../../../Components/assets/sym2.png'),


  }
  ,
    {
      id:2,
      infectionType:"Headache",
      img:require('../../../Components/assets/sym3.png'),


  },
  {
    id:3,
    infectionType:"No Taste",
    img:require('../../../Components/assets/sym4.png'),


  },
  {
    id:4,
    infectionType:"Jhmneckache",
    img:require('../../../Components/assets/sym5.png'),


  },
  {
    id:5,
    infectionType:"Fever",
    img:require('../../../Components/assets/sym6.png'),


  }
]
const styles = StyleSheet.create({
  Container:{
    backgroundColor:"whitesmoke",
    flex:1
  },
  container:{
    height:70,
    width:width-20,
    backgroundColor:'black',
    borderRadius:20,
    marginVertical:10,
    alignSelf:'center',
   
  },
  Item:{
    
  },
  text:{
    color:'white',
    alignItems:'flex-start',
    paddingHorizontal:20,
    marginTop:20
    
  },
  Button:{
    width:width/2,
    height:60,
    borderRadius:10,
    backgroundColor:'black',
    alignSelf:'center',
    marginTop:10
  
  },
  Check:{
    color:'white',
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
    paddingTop:15,
    fontFamily:'sans-serif-light'

  }

})
const renderItem=({item,index})=>{
  return(
      <View>
         <Item key={index} item={item}/>

      </View>
  )
}
const Button=()=>{
  const navigation = useNavigation()
  const onPress=useCallback(()=>{
    navigation.navigate('InfectionRatePage')
  },[])
  return(
    <Pressable style={styles.Button} onPress={onPress}>
    <Text style={styles.Check}>
    Check
   </Text>
  </Pressable>
  )
}
const InfectionTracker = () => {

  return (
    <View style={styles.Container}> 

    <FlatList
    data={data}
    numColumns={2}
    keyExtractor={(item)=>item.id}
    showsVerticalScrollIndicator={false}
    renderItem={renderItem}
    contentContainerStyle={{alignSelf:'center'}}
    ListHeaderComponent={<Header/>}
    ListFooterComponent={Button}
    />  
    </View>
  )
}

export default InfectionTracker

