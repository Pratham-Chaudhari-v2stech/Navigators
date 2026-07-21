import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TodoProvider from './src/context/TodoProvider';

export default function App() {
  return (
    <TodoProvider>
      <HomeScreen />
    </TodoProvider>
  );
}
