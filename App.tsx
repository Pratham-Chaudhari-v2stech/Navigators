import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator/>
      {/* <AppStateScreen /> */}
    </NavigationContainer>
  );
};

export default App;
