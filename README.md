# Device Utilities & File Handling

A small React Native CLI practice project demonstrating device utilities, local file handling, network connectivity, and runtime permissions.

## 📱 Features

### 1. File System Access

Uses `react-native-fs` to work with files stored locally on the device.

Implemented:

* Write a file
* Read a file
* Delete a file
* Check whether a file exists

Example flow:

```text
Write File
    ↓
Local Device Storage
    ↓
Read File
    ↓
Display File Content
```

---

### 2. Device Information

Uses `react-native-device-info` to display:

* Device model
* Operating system and version
* Application version
* Build number

Example:

```text
Device Information

Model: Pixel 7
OS: Android 13
App Version: 1.0.0
Build Number: 1
```

---

### 3. Network Status

Uses `@react-native-community/netinfo` to monitor the device's network connection.

Implemented:

* Online/offline status
* Connection type
* Real-time network status updates
* Offline banner

When the device loses its connection:

```text
⚠ No Internet Connection
```

The banner automatically disappears when the connection is restored.

---

### 4. Runtime Permissions

Uses `react-native-permissions` to request Android camera permission.

Implemented:

* Request camera permission
* Display permission status
* Handle permission results

Possible permission states include:

```text
Granted
Denied
Blocked
Unavailable
```

---

## 🛠️ Technologies Used

* React Native CLI
* TypeScript
* `react-native-fs`
* `react-native-device-info`
* `@react-native-community/netinfo`
* `react-native-permissions`

---

## 📂 Project Structure

```text
src/
├── components/
│   └── OfflineBanner.tsx
│
├── screens/
│   └── DeviceUtilities/
│       └── DeviceUtilitiesScreen.tsx
│
└── utils/
    ├── fileSystem.ts
    ├── deviceInfo.ts
    └── permissions.ts

App.tsx
```

### File Responsibilities

| File                        | Responsibility                          |
| --------------------------- | --------------------------------------- |
| `OfflineBanner.tsx`         | Displays the offline network banner     |
| `DeviceUtilitiesScreen.tsx` | Main UI and feature integration         |
| `fileSystem.ts`             | Local file read/write/delete operations |
| `deviceInfo.ts`             | Device and application information      |
| `permissions.ts`            | Camera permission handling              |

---

## 📦 Installation

Install the required dependencies:

```bash
npm install react-native-fs react-native-device-info @react-native-community/netinfo react-native-permissions
```

For iOS:

```bash
cd ios
pod install
cd ..
```

---

## 🔐 Android Permission

Camera permission is declared in:

```text
android/app/src/main/AndroidManifest.xml
```

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

---

## ▶️ Run the Project

Start Metro:

```bash
npm start
```

Run Android:

```bash
npm run android
```

If you make changes to native Android configuration, clean and rebuild:

```bash
cd android
./gradlew clean
cd ..
npm run android
```

---

## 🎯 Learning Objectives

This task demonstrates how React Native applications can interact with device-level functionality.

### File System

```text
React Native
     ↓
react-native-fs
     ↓
Device File Storage
```

### Device Information

```text
React Native
     ↓
react-native-device-info
     ↓
Device / OS / App Information
```

### Network

```text
React Native
     ↓
NetInfo
     ↓
Network State
     ↓
Online / Offline UI
```

### Permissions

```text
React Native
     ↓
react-native-permissions
     ↓
Android Permission API
     ↓
Permission Result
```

---

## ✅ Task Checklist

* [x] Write a file locally
* [x] Read a local file
* [x] Delete a local file
* [x] Display device information
* [x] Display application version
* [x] Display build number
* [x] Detect network status
* [x] Display offline banner
* [x] Request camera permission
* [x] Display permission status
* [x] Separate utility logic from UI

---

## 📚 Key Takeaway

This exercise demonstrates how React Native can access native device capabilities through third-party native modules while keeping the application code organized into reusable components, screens, and utility functions.
