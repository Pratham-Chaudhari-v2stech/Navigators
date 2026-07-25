# 📍 React Native Location Permission App

A simple **React Native** application built with **TypeScript** that demonstrates Android **runtime permissions** and access to the device's **current location**. The app requests location permission from the user, fetches the current GPS coordinates, and displays them on the screen.

---

# 🚀 Features

* 📍 Request runtime location permission
* 📱 Handle Android permission flow using `PermissionsAndroid`
* 🌍 Fetch the device's current location
* 📌 Display latitude and longitude
* ❌ Handle permission denial gracefully
* ⚠️ Display appropriate status messages and alerts
* 🧩 Clean separation of permission logic and UI

---

# 🛠️ Tech Stack

* React Native CLI
* TypeScript
* React Hooks (`useState`)
* `PermissionsAndroid`
* `react-native-geolocation-service`

---

# 📂 Project Structure

```text
src/
├── screens/
│   └── LocationScreen.tsx
│
├── utils/
│   └── permissions.ts
│
└── App.tsx
```

---

# 📱 App Flow

1. Launch the application.
2. Tap **Get Current Location**.
3. The app requests location permission.
4. If permission is granted:

   * Fetch the current GPS coordinates.
   * Display the latitude and longitude.
5. If permission is denied:

   * Show an alert message.
   * Display an appropriate status message.

---

# 🔐 Runtime Permission Flow

```text
User taps button
        │
        ▼
Request Location Permission
        │
        ▼
Permission Granted?
     /          \
   Yes           No
   │             │
   ▼             ▼
Fetch GPS     Show Alert
Coordinates   & Status
   │
   ▼
Display Latitude & Longitude
```

---

# 📷 Testing on Android Emulator

Since the Android emulator does not have real GPS hardware, a location must be simulated manually.

To set the emulator location:

1. Open the Android Emulator.
2. Click the **⋮ (Extended Controls)** button.
3. Select **Location**.
4. Enter latitude and longitude values.
5. Click **Send**.
6. Tap **Get Current Location** in the app.

---

# ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Install the location library:

```bash
npm install react-native-geolocation-service
```

Run the Android application:

```bash
npx react-native run-android
```

---

# 📚 Learnings

During this project, I learned:

* The difference between declaring a permission in `AndroidManifest.xml` and requesting it at runtime.
* How Android's runtime permission model protects user privacy.
* How to request location permission using `PermissionsAndroid`.
* How to handle both granted and denied permission states without crashing the app.
* How to use `async`/`await` for asynchronous permission requests.
* How to fetch the current GPS coordinates using `react-native-geolocation-service`.
* How to manage dynamic data using React's `useState` hook.
* How to display native alert dialogs using the `Alert` API.
* The importance of separating business logic (`permissions.ts`) from UI (`LocationScreen.tsx`) for better code organization and reusability.
* How Android emulators simulate GPS locations and why manual location configuration is required when testing without a physical device.

---

# 🎯 Outcome

This project demonstrates how to integrate a native device feature into a React Native application while following Android's runtime permission model and handling different permission scenarios in a user-friendly manner.
