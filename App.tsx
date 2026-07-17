import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store';
import  {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}