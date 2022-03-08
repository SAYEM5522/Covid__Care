import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
const Token="pk.eyJ1Ijoic2F5ZW01NTIyIiwiYSI6ImNremZxdDFjbzNraTIydm8ydmY4enljb3EifQ.-Tm4Vg6gLHSqEVjOmEWhjA"
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Logger } from '@react-native-mapbox-gl/maps';
import BottomPopUp from './BottomPopUp';
MapboxGL.setAccessToken(Token);
MapboxGL.setConnected(true);
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  page: {
    flex: 1,
    position:'relative'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
  BottomPopUp:{
    position:'absolute',
    right:10,
    bottom:100,
    color:"#fff",
    zIndex:1000,

  }
})
const Location = () => {
  Logger.setLogCallback(log => {
    const { message } = log;
    if (
      message.match('Falling back to MGLIdeographsRasterizedLocally') ||
      message.match('MapRenderer::onSurfaceCreated GlyphsRasterizationMode')||
      message.match('Request failed due to a permanent error: Canceled') 
    ) {
      return true;
    }
    return false;
  });
  const [coordinates] = useState([90, 24]);
  useEffect(()=>{
    MapboxGL.setTelemetryEnabled(false);
  },[])

  return (
    <View style={styles.page}>
      <View style={styles.BottomPopUp}>
      <BottomPopUp/>
      </View>
      <View style={styles.container} >
        <MapboxGL.MapView style={styles.map}    >
          <MapboxGL.Camera zoomLevel={10} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation   coordinate={coordinates} id={"test"}  />
        </MapboxGL.MapView>
      </View>
    </View>
  );
}


export default Location

