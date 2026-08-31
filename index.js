/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {registerBackgroundMessageHandler} from './src/services/firebaseMessaging';

// Register before React mounts so data-only FCM messages can be handled while closed.
registerBackgroundMessageHandler();

AppRegistry.registerComponent(appName, () => App);
