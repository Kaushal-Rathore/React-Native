import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import SplashScreen from './components/Splash';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration';
// import SaveApiData from './components/SaveApiData';
import Main from './components/Segment/Main';
import SaveApiData from './components/Segment/two'

const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Two" component={SaveApiData} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
});

export default App;
