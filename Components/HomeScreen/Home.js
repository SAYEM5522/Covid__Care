import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-wagmi-charts';
const data = [
  {
    timestamp: 80000,
    value: 33575.25,
  },
  {
    timestamp: 1625900000,
    value: 33545.25,
  },
  {
    timestamp: 1627200000,
    value: 33510.25,
  },
  {
    timestamp: 16200000,
    value: 33215.25,
  },
  {
    timestamp: 1620484880000,
    value: 33215.25,
  },{
    timestamp: 1620889480000,
    value: 33215.25,
  },{
    timestamp: 16284000,
    value: 33215.25,
  },
];
const Home = () => {
  return (
    <LineChart.Provider data={data}>
      <LineChart>
      <LineChart.Path color="red">
      <LineChart.Gradient color="red" />
    </LineChart.Path>
    </LineChart>
    </LineChart.Provider>
   
  )
}

export default Home

const styles = StyleSheet.create({})