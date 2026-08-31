import notifee, {AndroidImportance} from '@notifee/react-native';

const CHANNEL_ID = 'day23-demo';

async function createDemoChannel() {
  return notifee.createChannel({
    id: CHANNEL_ID,
    name: 'Day 23 alerts',
    importance: AndroidImportance.HIGH,
  });
}

export async function requestLocalNotificationPermission() {
  const settings = await notifee.requestPermission();
  return settings.authorizationStatus > 0;
}

export async function showLocalNotification(
  title = 'Local notification sent',
  body = 'This alert was created on this device by Notifee.',
) {
  const channelId = await createDemoChannel();
  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      pressAction: {id: 'default'},
    },
  });
}
