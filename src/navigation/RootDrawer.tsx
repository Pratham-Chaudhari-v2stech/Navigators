import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabs from './MainTabs';
import SettingsStack from './SettingsStack';

import { RootDrawerParamList } from './types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainTabs}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
      />
    </Drawer.Navigator>
  );
}