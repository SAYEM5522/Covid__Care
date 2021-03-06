import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Screen from './Screen'
import InfectionTracker from './HealthStatusScreen/InfectionTracker/InfectionTracker'
import IsolationTracker from './HealthStatusScreen/IsolationTracker/IsolationTracker'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InfectionRate from "../Components/HealthStatusScreen/InfectionTracker/InfectionRate"
import Update from './HomeScreen/Update'
import { Provider, useSelector } from 'react-redux'
import store from './app/store'
import Authentication from "../Components/Authentication/Authentication"
import Onboarding from './Onboarding/Onboarding'
import CovidUpdate from './HomeScreen/CovidUpdate'
import { enableFreeze } from 'react-native-screens';
import InfectionRatePage from './HealthStatusScreen/InfectionTracker/InfectionRatePage'
import IsoloationAdvice from './HealthStatusScreen/IsolationTracker/IsoloationAdvice'
import YouTube from './YouTube/YouTube'
import Vaccination from './Vaccination/Vaccination'
import { selectEmail } from './features/InTrackerSlice'
enableFreeze(true);
const RootScreen = () => {
const Stack = createNativeStackNavigator();
const authentication=false;
const User=false
// useSelector(selectEmail)
  return (
    // <Provider store={store}>
    <NavigationContainer>
      {
        // User ?
          <Stack.Navigator  >
            <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
            <Stack.Screen name="Screen" component={Screen} options={{headerShown:false}} />
              <Stack.Screen name="InfectionTracker" component={InfectionTracker} options={{headerShown:false}}  />
              <Stack.Screen name="IsolationTracker" component={IsolationTracker} options={{headerShown:false}}  />
              <Stack.Screen name="Update" component={Update} options={{headerShown:false}} />
              <Stack.Screen name="IsolationAdvice" component={IsoloationAdvice} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}} />
              <Stack.Screen name="InfectionRatePage" component={InfectionRatePage} options={{headerShown:false}} />
              <Stack.Screen name="CovidUpdate" component={CovidUpdate} options={{headerShown:false}}/>
              <Stack.Screen name="YouTube" component={YouTube} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}}/>
              <Stack.Screen name="Vaccination" component={Vaccination} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}}/>
            </Stack.Navigator>
          //   :
          //   <Stack.Navigator >
          //   <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
          //   <Stack.Screen name="Authentication" component={Authentication} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}} />
          // </Stack.Navigator>
      }
          {/* <Stack.Navigator >
              <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
              <Stack.Screen name="Screen" component={Screen} options={{headerShown:false}} />
              <Stack.Screen name="Authentication" component={Authentication} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}} />
              <Stack.Screen name="InfectionTracker" component={InfectionTracker} options={{headerShown:false}}  />
              <Stack.Screen name="IsolationTracker" component={IsolationTracker} options={{headerShown:false}}  />
              <Stack.Screen name="Update" component={Update} options={{headerShown:false}} />
              <Stack.Screen name="IsolationAdvice" component={IsoloationAdvice} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}} />
              <Stack.Screen name="InfectionRatePage" component={InfectionRatePage} options={{headerShown:false}} />
              <Stack.Screen name="CovidUpdate" component={CovidUpdate} options={{headerShown:false}}/>
              <Stack.Screen name="YouTube" component={YouTube} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}}/>
              <Stack.Screen name="Vaccination" component={Vaccination} options={{headerShown:false,animation:"slide_from_right",presentation:'transparentModal'}}/>
            </Stack.Navigator> */}
    </NavigationContainer>
    // </Provider>
  )
}

export default RootScreen

const styles = StyleSheet.create({})