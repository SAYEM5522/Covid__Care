import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
const {width,height}=Dimensions.get('window')
const styles = StyleSheet.create({
  IsolationText:{
    color:"black",
    fontWeight:"bold",
    fontSize:15,
    marginLeft:10,
    width:width-80
  },
  IsolationList:{
    flexDirection:"row",marginTop:10,marginLeft:10
  },
  Button:{
    width:50,
    height:40,
    borderRadius:5,
    backgroundColor:"#1c3b4c",
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:10,
    marginTop:5
  },
  ButtonText:{
    color:"white",
    fontSize:16,
    fontWeight:"bold",
    fontFamily:"sans-serif-medium"

  }
})
const PreventationData=[
  { 
    id:1,
    description:"Monitor your symptoms. If you have an emergency warning sign seek emergency medical care immediately."
  },
  { 
    id:2,
    description:"Stay in a separate room from other household members, if possible"
  },
  { 
    id:3,
    description:"Clean and disinfect surfaces regularly. This includes items frequently touched like door handles"
  },
  { 
    id:4,
    description:"Wear a well-fitting mask when you need to be around other people."
  },
  { 
    id:5,
    description:"We recommend opening windows to increase fresh air flow inside."
  },
  { 
    id:6,
    description:"Take steps to improve ventilation at home, if possible."
  }
]
const PreventationData2=[

  { 
    id:1,
    description:"Don't share personal household items, like cups, towels, and utensils"
  },
  { 
    id:2,
    description:"Do not prepare food for others. If people are leaving you meals, tell them to leave it at the door "
  },
  { 
    id:3,
    description:"Avoid contact with other members of the household and pets."
  },
  { 
    id:4,
    description:"Don't have visitors in your home. This includes tradespeople"
  }
]
const IsoloationAdvice = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <View style={styles.Button}>
        <Text style={styles.ButtonText}>Do</Text>
      </View>
        {
          PreventationData.map((item,index)=>{
            return (
              <View key={index} style={styles.IsolationList}>
                <Entypo name="check" size={25} color="green" style={{marginTop:3}}/>
                <Text style={styles.IsolationText}>{item.description}</Text>
              </View>
            )
          })
        }
           <View style={styles.Button}>
        <Text style={styles.ButtonText}>Don't</Text>
      </View>
      {
        PreventationData2.map((item,index)=>{
          return (
            <View key={index} style={styles.IsolationList}>
              <Entypo name="cross" size={25} color="red" style={{marginTop:3}}/>
              <Text style={styles.IsolationText}>{item.description}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default IsoloationAdvice

