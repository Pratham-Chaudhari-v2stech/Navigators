# 🌦️ Weather App

A React Native Weather App built using **React Native CLI** and **TypeScript**. The app allows users to search for the current weather of any city, displays detailed weather information, and stores recent searches locally using AsyncStorage.

---

## 📱 Features

* 🔍 Search weather by city name
* 🌡️ View current temperature
* 🤗 View "Feels Like" temperature
* 🌧️ Weather condition with icon
* 💨 Wind speed
* 💧 Humidity
* 🌍 Pressure
* 👀 Visibility
* ☀️ UV Index
* 🏭 Air Quality (PM2.5)
* 🕒 Local time of the searched city
* 💾 Recent searches stored using AsyncStorage
* 🗑️ Clear recent search history
* ⏳ Loading indicator while fetching data
* ❌ Error handling for invalid city names
* 🧭 Navigation between Home and Weather Details screens
* 🏗️ Modular project structure with reusable components

---

## 🛠️ Tech Stack

* React Native CLI
* TypeScript
* React Navigation (Native Stack)
* Axios
* AsyncStorage
* WeatherAPI.com

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── SearchBar.tsx
│   └── RecentSearchItem.tsx
│
├── constants/
│   └── api.ts
│
├── navigation/
│   └── AppNavigator.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   └── WeatherDetailsScreen.tsx
│
├── services/
│   └── weatherApi.ts
│
├── storage/
│   └── recentSearchStorage.ts
│
├── types/
│   └── weather.ts
│
└── App.tsx
```

---

## 🚀 How to Run

1. Clone the repository.
2. Install dependencies.

```bash
npm install
```

3. Install iOS pods (macOS only).

```bash
cd ios
pod install
```

4. Start Metro.

```bash
npx react-native start
```

5. Run the application.

Android:

```bash
npx react-native run-android
```

iOS:

```bash
npx react-native run-ios
```

---

## 🔑 API Setup

This project uses **WeatherAPI.com**.

1. Create a free account.
2. Generate an API key.
3. Add your API key inside:

```text
src/constants/api.ts
```

Example:

```ts
export const API_KEY = 'YOUR_API_KEY';
export const API = 'https://api.weatherapi.com/v1/current.json';
```

---

# 📚 Learnings

## Push Notifications

Learned how push notifications work in mobile applications.

* Push notifications are **not sent directly by the React Native app**.
* They are delivered by the operating system using platform-specific push services:

  * **Firebase Cloud Messaging (FCM)** for Android.
  * **Apple Push Notification Service (APNs)** for iOS.
* The app registers with the push service and receives a unique **device token**.
* This device token is sent to a backend server.
* Whenever the backend wants to notify the user, it sends the notification request to FCM/APNs using the device token.
* The operating system then delivers the notification to the device, even if the application is completely closed.

### Push Notification Flow

```text
React Native App
       │
       ▼
Register with FCM / APNs
       │
       ▼
Receive Device Token
       │
       ▼
Send Token to Backend
       │
       ▼
Backend Sends Notification Request
       │
       ▼
FCM / APNs
       │
       ▼
Operating System
       │
       ▼
Notification Displayed on Device
```

---

## Local Notifications vs Push Notifications

### Local Notifications

* Triggered by the application itself.
* Do not require a backend.
* Can be scheduled for reminders, alarms, timers, etc.

### Push Notifications

* Triggered by a backend server.
* Delivered through FCM (Android) or APNs (iOS).
* Can arrive even when the application is in the background or completely closed.

---

## Native Modules

Learned why some React Native features require native code.

* JavaScript cannot directly access many device capabilities.
* Features such as:

  * Camera
  * Push Notifications
  * Bluetooth
  * NFC
  * Background Services
  * Biometric Authentication
  * GPS
* require native Android (Kotlin/Java) or iOS (Swift/Objective-C) implementations.

React Native libraries expose these native capabilities through **Native Modules**, allowing JavaScript to communicate with platform-specific code.

### Why rebuilding is required

When installing libraries that include native code:

* New Android or iOS source files are added to the project.
* Native dependencies are linked into the application.
* The project must be rebuilt for the native code to be compiled.

A simple JavaScript reload is **not** enough because the native binaries need to be regenerated.

---

## Hands-on Practice

During this module, learned:

* The overall architecture of push notifications.
* The role of FCM and APNs in delivering notifications.
* The purpose of a device token.
* Why a backend server is required for production push notifications.
* The difference between local notifications and push notifications.
* Why native modules are required for hardware and operating system features.
* Why installing native libraries requires rebuilding the Android/iOS application.


---

## API Integration

* Performed HTTP requests using Axios.
* Passed query parameters using Axios `params`.
* Managed asynchronous API calls with `async/await`.
* Implemented loading and error handling while fetching weather data.

---

## AsyncStorage

* Stored recent city searches locally.
* Retrieved stored data when the app launched.
* Converted arrays to strings using `JSON.stringify()`.
* Converted stored strings back into arrays using `JSON.parse()`.
* Removed duplicate recent searches.
* Cleared stored data using `AsyncStorage.removeItem()`.

---

## React Hooks

* Used `useState` for managing component state.
* Used `useEffect` for loading stored data and fetching API data after component mount.

---

## TypeScript

* Created interfaces for API responses.
* Typed navigation parameters.
* Used typed function parameters and return types for better code safety.

---

## Component Reusability

* Created reusable components such as:

  * SearchBar
  * RecentSearchItem

* Separated API logic, storage logic, UI components, and screen components into different folders for better maintainability.

---

## AppState

Implemented an `AppStateScreen` to understand the React Native application lifecycle.

Learned how to:

* Detect whether the app is currently in the foreground (`active`) or background (`background`).
* Listen for app state changes using `AppState.addEventListener()`.
* Store the previous app state using `useRef`.
* Detect when the user returns to the app by comparing the previous and current states.
* Clean up the event listener inside the `useEffect` cleanup function to prevent memory leaks.

Example use cases of `AppState`:

* Refresh data when the app returns to the foreground.
* Pause or resume videos and games.
* Save user progress before the app goes to the background.
* Refresh account information in banking applications.
* Reduce battery usage by stopping unnecessary background work.

---

## Overall Concepts Reinforced

* React Native project structure
* Functional components
* State management using hooks
* Navigation between screens
* API consumption
* Local data persistence
* Reusable component design
* TypeScript best practices
* App lifecycle awareness using `AppState`

---

## Future Improvements

* Search suggestions (autocomplete)
* Current location weather using device GPS
* Five-day weather forecast
* Pull-to-refresh
* Dark mode
* Favorite cities
* Push notifications for weather alerts
* Unit toggle (°C / °F)
* Better weather animations and icons
