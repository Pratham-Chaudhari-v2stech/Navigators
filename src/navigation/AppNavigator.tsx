import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootDrawer from './RootDrawer';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
}