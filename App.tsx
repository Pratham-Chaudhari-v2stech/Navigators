import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigations/AppNavigator';
import ErrorBoundary from './src/utils/ErrorBoundary'; 

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ErrorBoundary>
  );
}