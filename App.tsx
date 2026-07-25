import React from 'react';
import LocationScreen from './src/screens/LocationScreen';
import {SafeAreaView} from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LocationScreen />
    </SafeAreaView>
  );
};

export default App;