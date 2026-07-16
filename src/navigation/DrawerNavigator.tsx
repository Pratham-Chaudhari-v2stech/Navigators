import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ManageDealsTabs from './ManageDealsTabs';
import Dimension from '../Dimension';

export type DrawerParamList = {
  Home: undefined;
  'Manage Deals': undefined;
  Settings: undefined;
  Profile:undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      />

      <Drawer.Screen
        name="Manage Deals"
        component={ManageDealsTabs}
        options={{
          title: 'Manage Deals',
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
      />

     <Drawer.Screen 
      name="Profile"
      component={Dimension}
     />
    </Drawer.Navigator>
  );
}