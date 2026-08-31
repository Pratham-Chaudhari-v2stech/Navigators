import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  crash,
  getCrashlytics,
  log,
  recordError,
  setCrashlyticsCollectionEnabled,
} from '@react-native-firebase/crashlytics';
import type {RemoteMessage} from '@react-native-firebase/messaging';

import {
  getFcmToken,
  getNotificationThatOpenedApp,
  requestPushPermission,
  subscribeToForegroundMessages,
  subscribeToNotificationOpens,
} from './src/services/firebaseMessaging';

import {
  requestLocalNotificationPermission,
  showLocalNotification,
} from './src/services/localNotification';

const crashlytics = getCrashlytics();

function messageSummary(message: RemoteMessage) {
  return (
    message.notification?.title ||
    message.data?.title ||
    message.messageId ||
    'Push message received'
  );
}

export default function App() {
  const [token, setToken] = useState('Fetching FCM token…');
  const [permission, setPermission] = useState(
    'Checking notification permission…',
  );
  const [lastEvent, setLastEvent] = useState(
    'Waiting for a push notification.',
  );

  useEffect(() => {
    let active = true;

    async function initialise() {
      try {
        await setCrashlyticsCollectionEnabled(crashlytics, true);

        log(crashlytics, 'Day 23 Firebase demo opened');

        const [pushAllowed, localAllowed] = await Promise.all([
          requestPushPermission(),
          requestLocalNotificationPermission(),
        ]);

        if (active) {
          setPermission(
            pushAllowed && localAllowed
              ? 'Notifications enabled'
              : 'Notifications need permission',
          );
        }

        const fcmToken = await getFcmToken();

        if (active) {
          setToken(fcmToken);
        }

        const initialMessage = await getNotificationThatOpenedApp();

        if (initialMessage && active) {
          setLastEvent(
            `Opened from push: ${messageSummary(initialMessage)}`,
          );
        }
      } catch (error) {
        recordError(
          crashlytics,
          error instanceof Error ? error : new Error(String(error)),
        );

        if (active) {
          setPermission('Firebase setup failed — see Metro logs');
        }
      }
    }

    initialise();

    const unsubscribeForeground = subscribeToForegroundMessages(
      async message => {
        setLastEvent(
          `Foreground push received: ${messageSummary(message)}`,
        );

        log(
          crashlytics,
          `Foreground FCM message: ${message.messageId ?? 'no-id'}`,
        );

        await showLocalNotification(
          String(
            message.notification?.title || 'New Firebase message',
          ),
          String(
            message.notification?.body ||
              message.data?.body ||
              'A push notification arrived.',
          ),
        );
      },
    );

    const unsubscribeOpen = subscribeToNotificationOpens(message =>
      setLastEvent(`Opened from push: ${messageSummary(message)}`),
    );

    return () => {
      active = false;
      unsubscribeForeground();
      unsubscribeOpen();
    };
  }, []);

  async function sendLocalNotification() {
    try {
      await showLocalNotification();

      setLastEvent('Local notification displayed with Notifee.');

      log(crashlytics, 'Local Notifee notification displayed');
    } catch (error) {
      recordError(
        crashlytics,
        error instanceof Error ? error : new Error(String(error)),
      );

      setLastEvent('Could not display local notification.');
    }
  }

  function confirmTestCrash() {
    Alert.alert(
      'Send test crash?',
      'The app will immediately close. Reopen it afterwards and check Crashlytics.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Crash app',
          style: 'destructive',
          onPress: () => crash(crashlytics),
        },
      ],
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Firebase Notifications</Text>

        <Text style={styles.subtitle}>
          Test push notifications, local notifications, and Crashlytics.
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>Notification Status</Text>

          <Text style={styles.value}>{permission}</Text>

          <Text style={styles.label}>FCM Token</Text>

          <Text selectable style={styles.token}>
            {token}
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={sendLocalNotification}>
          <Text style={styles.buttonText}>
            Send Local Notification
          </Text>
        </Pressable>

        <Pressable
          style={styles.crashButton}
          onPress={confirmTestCrash}>
          <Text style={styles.crashButtonText}>
            Force Test Crash
          </Text>
        </Pressable>

        <View style={styles.eventBox}>
          <Text style={styles.label}>Latest Event</Text>

          <Text style={styles.eventText}>{lastEvent}</Text>
        </View>

        <Text style={styles.note}>
          Use Firebase Console → Messaging → Test message and paste
          the FCM token above to send a test push notification.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    marginBottom: 6,
  },

  value: {
    fontSize: 16,
    color: '#222',
    marginBottom: 18,
  },

  token: {
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
  },

  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  crashButton: {
    borderWidth: 1,
    borderColor: '#e53935',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },

  crashButtonText: {
    color: '#e53935',
    fontSize: 16,
    fontWeight: '600',
  },

  eventBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },

  eventText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 21,
  },

  note: {
    fontSize: 13,
    color: '#777',
    lineHeight: 19,
  },
});