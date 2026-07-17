import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from '../screens/SignupScreen';
import ListScreen from '../screens/ListScreen';

export type RootStackParamList = {
  Signup: undefined;
  List: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: 'User Signup',
          }}
        />

        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            title: 'Registered Users',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}