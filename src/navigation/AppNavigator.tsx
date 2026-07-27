import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import WeatherDetailsScreen from '../screens/WeatherDetailsScreen';
import { RootStackParamList } from '../types/weather';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>
      <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
    </Stack.Navigator>
  );
}
