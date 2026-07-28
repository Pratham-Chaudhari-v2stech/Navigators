import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductSearchScreen from '../screens/ProductSearchScreen';
import UserSearchScreen from '../screens/UserSearchScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductSearch" component={ProductSearchScreen} />
      <Stack.Screen name="UserSearch" component={UserSearchScreen} />
    </Stack.Navigator>
  );
}