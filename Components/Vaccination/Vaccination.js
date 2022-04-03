import { StyleSheet, Text, View,Dimensions,KeyboardAvoidingView,TextInput,Keyboard,Pressable } from 'react-native'
import React,{useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import { BarChart } from 'react-native-chart-kit'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const {width,height}=Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
const styles = StyleSheet.create({
  Graph:{
  position:"absolute",
  left:0,
  right:0,
  top:40
  },
  Header:{
    height:height/12,width:width,alignItems:"center",justifyContent:"center",flexDirection:"row",

  },
  Text:{
    color:"white",fontSize:20,alignSelf:"center",
    fontWeight:"bold",
    fontFamily:"sans-serif-medium"
  },
  textInput: {
    height: 50,
    width:width-50,
    borderWidth: 1,
    borderRadius:10,
    paddingHorizontal:10,
    // position:'relative',
    alignSelf:"center",
    backgroundColor:"#fff"
  },
  country:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"sans-serif-medium"
  },
  caption:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"sans-serif-medium",
    alignSelf:"center"
  },
  BottomCapton:{
    color:"black",
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"sans-serif-medium",
    alignSelf:"center",
    top:10
  },
  BottomCaptonBox:{
    width:width/2,
    height:50,
    backgroundColor:"#fff",
    alignSelf:"center",
    top:-30,
    borderRadius:5
  }
})
const Vaccination = () => {
  const navigation=useNavigation();
  const [data,setData] = React.useState([])
  const [loading,setloading] = React.useState(true)
  const [text,setText]=useState("Bangladesh")
  const onPress=useCallback(()=>{
    navigation.goBack()
  },[])
  useEffect(()=>{
    async function getUser() {
     const response = await axios.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=6&fullData=false");
     const country= response.data.map((item)=>({
         country:item.country,
         timeline:item.timeline
      }))
      setData(country)
      setloading(false)
    }
    
  getUser(),
  ()=> getUser();
  },[])
  const EditText=useCallback((text)=>{
    setText(text.nativeEvent.text)
  },[text])
  
  const IData=()=>{
    const list=[];
    (data.map((item)=>{
      (text===item.country)?
      list.push( Object.keys(item.timeline),Object.values(item.timeline)):null;
    }
    ))
    return {label:list[0],value:list[1]};
    
  }
  const {label,value}=IData()
 
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
     
      {
        loading?<Text style={{color:"black"}}>Loadding</Text>:
        <View>
          
        <View style={{marginVertical:20,flexDirection:"row",alignItems:"center",height:50}}>
        <SimpleLineIcons name="arrow-left" style={{marginRight:5}} size={30}  color="white"  onPress={onPress} />
        <KeyboardAvoidingView 
        behavior="height"
        >
              <TextInput
              style={styles.textInput}
              placeholder='Search Country...'
              placeholderTextColor={"black"}
              underlineColorAndroid={'transparent'}
              onSubmitEditing={EditText}
              />
                 </KeyboardAvoidingView>
          </View>
        <Pressable style={{height:height-50}} onPress={Keyboard.dismiss} >
        <View style={styles.Graph}>
          <View style={{height:width/3,width:width-50,backgroundColor:"#ed254eff",alignSelf:"center",borderRadius:18,marginTop:-15,marginBottom:10}}>
          <Text style={styles.caption}>Vaccination</Text>
            <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:30,justifyContent:"space-between",marginTop:20,marginBottom:9}}>
              <Text style={styles.country}>{text}</Text>
                <AntDesign name='infocirlceo' color={"white"} size={26} />
            </View>
            <View style={{alignSelf:"center"}}>
              <Text style={styles.country}>Today: {value[5]}</Text>
              <Text style={styles.country}>Yesterday: {value[2]}</Text>


            </View>
          </View>
        <BarChart
          data={{
            labels: label,
            datasets: [

              {
                data:value,
              }
            ]
          }}
          width={width} 
          height={height/2}
          yAxisInterval={0}
          chartConfig={{
            // backgroundColor: "#F84F46",
            // backgroundGradientFrom: "#431936",
            // backgroundGradientTo: "#15142A",
            decimalPlaces: 1, 
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "10",
              strokeWidth: "2",
              stroke: "#ffa726"
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 5,
          
          }}
        />
        <View style={styles.BottomCaptonBox}>
          <Text style={styles.BottomCapton}>Last 6 day's statistics</Text>
        </View>
        </View>
        </Pressable>
        </View>
      }
     
    </View>
  )
}

export default Vaccination

