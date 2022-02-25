import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Token="pk.eyJ1Ijoic2F5ZW01NTIyIiwiYSI6ImNremZxdDFjbzNraTIydm8ydmY4enljb3EifQ.-Tm4Vg6gLHSqEVjOmEWhjA"
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(Token);
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: height,
    width: width,
    backgroundColor: '#fff'
  },
  map: {
    flex: 1
  }
})
const Location = () => {
  return (
    <View>
              <View style={styles.container}>
             <MapboxGL.MapView style={styles.map} />
              </View>

    </View>
  )
}


export default Location

