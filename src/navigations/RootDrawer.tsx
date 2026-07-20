import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Profile from '../screens/Profile';

import { RootDrawerParamList } from '../types/type';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />

      <Drawer.Screen
        name="Courses"
        component={Courses}
        options={{
          title: 'Courses',
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
}