import {
  AuthorizationStatus,
  getInitialNotification,
  getMessaging,
  getToken,
  onMessage,
  onNotificationOpenedApp,
  RemoteMessage,
  requestPermission,
  setBackgroundMessageHandler,
} from '@react-native-firebase/messaging';

const messaging = getMessaging();

export type MessageListener = (message: RemoteMessage) => void;

export async function requestPushPermission(): Promise<boolean> {
  const status = await requestPermission(messaging);
  return status === AuthorizationStatus.AUTHORIZED || status === AuthorizationStatus.PROVISIONAL;
}

export async function getFcmToken(): Promise<string> {
  return getToken(messaging);
}

/** Receives data and notification messages while the app is open. */
export function subscribeToForegroundMessages(listener: MessageListener) {
  return onMessage(messaging, listener);
}

/** Runs when a notification opened the app from the background. */
export function subscribeToNotificationOpens(listener: MessageListener) {
  return onNotificationOpenedApp(messaging, listener);
}

export function getNotificationThatOpenedApp() {
  return getInitialNotification(messaging);
}

/** Must be registered from index.js, before the React tree is mounted. */
export function registerBackgroundMessageHandler() {
  setBackgroundMessageHandler(messaging, async message => {
    console.log('Background FCM message:', message.messageId);
  });
}
