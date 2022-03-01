import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Update from './Update'

const CovidUpdate = () => {
  return (
    <View>
      {/* <Update api="https://disease.sh/v3/covid-19/countries?yesterday=true"/> */}
       <Update api="https://disease.sh/v3/covid-19/historical/Bangladesh?lastdays=6"/>
      

    </View>
  )
}

export default CovidUpdate

const styles = StyleSheet.create({})