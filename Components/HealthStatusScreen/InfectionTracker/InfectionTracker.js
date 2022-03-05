import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useCallback } from 'react'
import Item from './Item'
import { useNavigation } from '@react-navigation/native'
import Header from './Header'

const {width,height} = Dimensions.get('window')
 const data=[
   {
      id:0,
      infectionType:"Flu",
      img:"https://cdn.pixabay.com/photo/2020/03/03/12/15/mask-4898571__340.jpg"
  },
    {
      id:1,
      infectionType:"Fever",
      img:"https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5fc50ce6d7a9287f01ea775f_Cough-01.png"

  }
  ,
    {
      id:2,
      infectionType:"Cold",
      img:"https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5fc50ce6d7a9287f01ea775f_Cough-01.svg"

  },
  {
    id:3,
    infectionType:"Cough",
    img:"https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5fc50ce6d7a9287f01ea775f_Cough-01.svg"

  },
  {
    id:4,
    infectionType:"Headache",
    img:"https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5fc50ce6d7a9287f01ea775f_Cough-01.svg"

  },
  {
    id:5,
    infectionType:"White Bloom",
    img:"https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5fc50ce6d7a9287f01ea775f_Cough-01.svg"

  }
]
const styles = StyleSheet.create({
  Container:{
    backgroundColor:"#fff",
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

