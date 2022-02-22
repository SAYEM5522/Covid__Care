import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Item from './Item'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'

const {width,height} = Dimensions.get('window')
 const data=[
   {
      id:1,
      infectionType:"Flu",
  },
    {
      id:2,
      infectionType:"Fever",
  }
  ,
    {
      id:3,
      infectionType:"Cold",
  },
  {
    id:4,
    infectionType:"Cough",
  },
  {
    id:5,
    infectionType:"Headache",
  },
  {
    id:6,
    infectionType:"White Bloom",
  }
]
const styles = StyleSheet.create({
  Container:{
    paddingTop:height/7,
    backgroundColor:"#30c3f1",
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
    
  }
})
const InfectionTracker = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.Container}> 
    <AntDesign name='left' size={30} onPress={()=>navigation.goBack()} color={"white"}/>
          <ScrollView
          >
        {
          data.map(item=>{
            return(
              <Item key={item.id} item={item}/>
            )
          })
        }
          </ScrollView>
    </View>
  )
}

export default InfectionTracker

