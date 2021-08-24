import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPicsScreen from './Screens/DailyPics';
import SpaceCraftsScreen from './Screens/SpaceCrafts';
import StarMapScreen from './Screens/StarMap';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
        <Stack.Screen name="DailyPics" component={DailyPicsScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

