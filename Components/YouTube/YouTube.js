import { StyleSheet, Text, View,Button,Dimensions } from 'react-native'
import React,{useState, useCallback, useRef} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from '@react-navigation/native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  Text:{
    color:"black",fontSize:20,alignSelf:"center",
    fontWeight:"bold",
    fontFamily:"sans-serif-medium"
  },
  Header:{
    height:height/12,width:width,alignItems:"center",justifyContent:"center",flexDirection:"row"
  }
})
const YouTube = () => {
  const navigation=useNavigation();
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);
  const onPress=useCallback(()=>{
    navigation.goBack()
  },[])

  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
    <View style={styles.Header}>
      <SimpleLineIcons name="arrow-left" size={30} color="black" style={{position:"absolute",left:10}} onPress={onPress} />
      <Text style={styles.Text}>YouTube</Text>
    </View>
    <View style={{justifyContent:"center"}}>
    <YoutubePlayer
      height={300}
      width={width}
      play={playing}
      onChangeState={onStateChange}
      playList={["xVu_I6WCsto","eg1ixwE6XBw","7tgm8KBlCtE",
      "9DYaBzFPbcs","WpfOC2oWPAA","6XdjmB4IY3M","DCdxsnRF1Fk","UE_H9QhGktE","uDw2361nIbY","45w-kqpWVGk"]}
      
    />
    </View>
  </View>
  )
}

export default YouTube

