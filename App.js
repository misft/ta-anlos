import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import CameraPresence from './CameraPresence'

import {BackHandler} from 'react-native'

const Stack = createStackNavigator()

export default App = () => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    this.props.navigation.goBack(null);
    return true
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="false">
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="ForgetPassword" component={ ForgetPassword } />
        <Stack.Screem mame="CameraPresence" component={CameraPresence} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}