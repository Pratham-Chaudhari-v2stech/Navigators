import React from 'react';

import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'

import AnimationDemoScreen from './src/screens/AnimationDemoScreen';


const App = () => {
  return (

    <GestureHandlerRootView style={styles.container}>

      <SafeAreaView style={styles.container}>

        <StatusBar
          barStyle="dark-content"
        />

        <AnimationDemoScreen />

      </SafeAreaView>

    </GestureHandlerRootView>

  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

});


export default App;