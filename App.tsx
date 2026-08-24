import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import AppNavigation from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <FlashMessage position="bottom" />
    </>
  );
};

export default App;