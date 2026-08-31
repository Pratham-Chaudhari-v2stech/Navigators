# Firebase Notifications & Crashlytics – React Native

A React Native CLI demo project that demonstrates how to integrate **Firebase Cloud Messaging (FCM)**, **Notifee local notifications**, and **Firebase Crashlytics**.

## Features

* 🔔 Request notification permissions
* 📱 Get the device FCM token
* ☁️ Receive Firebase Cloud Messaging notifications
* 🔔 Display local notifications using Notifee
* 🚀 Handle notifications when the app is opened from a notification
* 📊 Log events using Firebase Crashlytics
* 💥 Send a test crash to Crashlytics
* 📝 Record errors in Crashlytics

## Tech Stack

* React Native CLI
* TypeScript
* Firebase
* Firebase Cloud Messaging (FCM)
* Firebase Crashlytics
* Notifee

## Project Structure

```text
.
├── android/
├── ios/
├── src/
│   └── services/
│       ├── firebaseMessaging.ts
│       └── localNotification.ts
├── App.tsx
├── package.json
└── README.md
```

## Requirements

Before running the project, make sure you have:

* Node.js
* npm
* React Native development environment
* Android Studio
* Android SDK
* A Firebase project
* Android device or emulator

## Firebase Setup

### 1. Create a Firebase Project

Go to the Firebase Console:

https://console.firebase.google.com/

Create a new Firebase project.

### 2. Add Android App

Inside your Firebase project:

1. Open **Project Settings**
2. Select **Add app**
3. Select **Android**
4. Enter your Android package name
5. Download `google-services.json`

Place the file here:

```text
android/app/google-services.json
```

### 3. Enable Cloud Messaging

Firebase Console → **Messaging**

Use the Firebase Messaging test composer to send a notification to your device.

The application displays the device's FCM token on the home screen.

Copy that token and use it as the test recipient.

## Install Dependencies

Clone the repository:

```bash
git clone <your-repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

## Android Setup

Make sure your Firebase configuration is correctly added to:

```text
android/app/google-services.json
```

Then clean the Android build:

```bash
cd android
./gradlew clean
cd ..
```

Run the application:

```bash
npx react-native run-android
```

## Notification Flow

The application handles notifications in different states.

### Foreground

When the application is open:

```text
Firebase Cloud Messaging
        ↓
React Native Firebase Messaging
        ↓
Foreground message handler
        ↓
Notifee
        ↓
Local notification displayed
```

Android does not automatically display an FCM notification payload while the app is in the foreground, so the application uses Notifee to display the notification locally.

### Background

When the application is running in the background, Firebase handles the notification according to the message payload and Android notification configuration.

### App Opened From Notification

The application also checks whether it was opened by tapping a notification.

```text
Notification
     ↓
User taps notification
     ↓
Application opens
     ↓
Initial notification message is retrieved
     ↓
Latest Event is updated
```

## Local Notification

The **Send Local Notification** button creates a notification directly on the device using Notifee.

This does not require Firebase.

```text
User taps button
       ↓
showLocalNotification()
       ↓
Notifee
       ↓
Android notification
```

## Crashlytics

The application also demonstrates Firebase Crashlytics.

### Logging

Example:

```ts
log(crashlytics, 'Local Notifee notification displayed');
```

### Recording Errors

Errors are recorded using:

```ts
recordError(
  crashlytics,
  error instanceof Error ? error : new Error(String(error)),
);
```

### Test Crash

The **Force Test Crash** button intentionally crashes the application.

After reopening the application, Firebase Crashlytics should process and display the crash report.

> Test crashes should only be used during development/testing.

## Testing FCM

1. Run the application.
2. Wait for the FCM token to appear.
3. Copy the token.
4. Open Firebase Console.
5. Go to **Messaging**.
6. Create a test notification.
7. Select the device/token.
8. Send the notification.
9. Check the application for the received notification.

## Important Notes

### Notification Permission

Notification permission must be granted before notifications can be displayed.

On newer Android versions, notification permission must be explicitly requested.

### FCM Token

The FCM token identifies the application instance/device for Firebase Cloud Messaging.

The token can change, so production applications should handle token refresh appropriately.

### Notifee

Notifee is used to create and display local Android notifications, especially for foreground FCM messages.

## Useful Commands

Install dependencies:

```bash
npm install
```

Start Metro:

```bash
npx react-native start
```

Run Android:

```bash
npx react-native run-android
```

Clean Android:

```bash
cd android
./gradlew clean
cd ..
```

Check connected devices:

```bash
adb devices
```

## Learning Outcomes

This project demonstrates:

* Firebase project configuration
* FCM token generation
* Push notification permissions
* Foreground FCM message handling
* Notification open handling
* Local notifications with Notifee
* Crashlytics logging
* Crashlytics error reporting
* Intentional test crash reporting
* Basic Firebase integration in React Native CLI

## License

This project is created for learning and development purposes.
