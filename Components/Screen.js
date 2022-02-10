import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps';
const Token="pk.eyJ1Ijoic2F5ZW01NTIyIiwiYSI6ImNremZxdDFjbzNraTIydm8ydmY4enljb3EifQ.-Tm4Vg6gLHSqEVjOmEWhjA"
MapboxGL.setAccessToken(Token);
const Screen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
  )
}

export default Screen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 700,
    width: 410,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
})