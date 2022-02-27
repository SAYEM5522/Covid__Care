import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
const Token="pk.eyJ1Ijoic2F5ZW01NTIyIiwiYSI6ImNremZxdDFjbzNraTIydm8ydmY4enljb3EifQ.-Tm4Vg6gLHSqEVjOmEWhjA"
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(Token);
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
})
const Location = () => {
  //  MapboxGL.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [120.3049, 31.4751],
  //   zoom: 12,
  //   localIdeographFontFamily: "'Noto Sans', 'Noto Sans CJK SC', sans-serif" // your boy
  // });
  const [coordinates] = useState([-73.99155, 40.73581]);
  return (
    <View style={styles.page}>
      <View style={styles.container} >
        <MapboxGL.MapView style={styles.map} localizeLabels={true}  >
          <MapboxGL.Camera zoomLevel={8} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} id="Test"  />
          <MapboxGL.ShapeSource
            id="source1"
            lineMetrics={true}
            shape={{
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: [
                  [-77.044211, 38.852924],
                  [-77.045659, 38.860158],
                  [-77.044232, 38.862326],
                  [-77.040879, 38.865454],
                  [-77.039936, 38.867698],
                  [-77.040338, 38.86943],
                  [-77.04264, 38.872528],
                  [-77.03696, 38.878424],
                  [-77.032309, 38.87937],
                  [-77.030056, 38.880945],
                  [-77.027645, 38.881779],
                  [-77.026946, 38.882645],
                  [-77.026942, 38.885502],
                  [-77.028054, 38.887449],
                  [-77.02806, 38.892088],
                  [-77.03364, 38.892108],
                  [-77.033643, 38.899926],
                ],
              },
            }}>

            </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    </View>
  );
}


export default Location

