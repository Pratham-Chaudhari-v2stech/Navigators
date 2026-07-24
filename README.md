# 💰 React Native Expense Tracker (TypeScript)

A simple **Expense Tracker** application built with **React Native**, **TypeScript**, **React Navigation**, and **AsyncStorage**. This project demonstrates how to persist data locally on the device so that expenses remain available even after the app is closed or restarted.

---

## 🚀 Features

* ➕ Add new expenses
* 📋 View recently added expenses
* 📖 View complete expense history
* 🗑️ Delete expenses
* 💾 Persist data using AsyncStorage
* 🔄 Automatically reload data when returning to a screen
* 🧩 Reusable UI components
* 🧭 Stack Navigation with multiple screens
* 📱 Built with TypeScript for type safety

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── EmptyState.tsx
│   ├── ExpenseCard.tsx
│   └── TotalExpenseCard.tsx
│
├── constants/
│   └── categories.ts
│
├── navigation/
│   └── AppNavigator.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── AddExpenseScreen.tsx
│   └── ExpenseHistoryScreen.tsx
│
├── storage/
│   └── expenseStorage.ts
│
├── types/
│   ├── expense.ts
│
└── App.tsx
```

---

## 📱 Screens

### 🏠 Home Screen

* Displays total expenses
* Shows the latest 5 expenses
* Navigate to Add Expense
* Navigate to Expense History

### ➕ Add Expense Screen

* Enter expense title
* Enter amount
* Select a category
* Save expense locally using AsyncStorage

### 📖 Expense History Screen

* View all saved expenses
* Delete expenses
* Automatically refreshes when revisited

---

## 🛠️ Tech Stack

* React Native CLI
* TypeScript
* React Navigation (Native Stack)
* AsyncStorage
* React Hooks

---

## 📦 Installation

```bash
git clone <repository-url>

cd ExpenseTracker

npm install
```

Install iOS pods (macOS only):

```bash
cd ios
pod install
```

Run the application:

### Android

```bash
npx react-native run-android
```

### iOS

```bash
npx react-native run-ios
```

---

## 💾 Local Storage

This project uses **AsyncStorage** to persist expenses.

Operations implemented:

* Save expenses
* Retrieve expenses
* Add new expense
* Delete expense

Data remains available even after the application is closed or restarted.

---

## 📌 Navigation Flow

```text
Home
 ├──► Add Expense
 │         │
 │         └── Save Expense
 │               │
 │               ▼
 │          AsyncStorage
 │               │
 │               ▼
 │         navigation.goBack()
 │
 └──► Expense History
```

---

## 🧠 Concepts Practiced

* Functional Components
* React Hooks

  * useState
  * useCallback
  * useFocusEffect
* Component Reusability
* Stack Navigation
* TypeScript Interfaces
* FlatList Rendering
* Local Data Persistence
* AsyncStorage CRUD Operations
* Project Folder Organization

---

## 📖 Learnings

Through this project, I learned:

* How to store and retrieve persistent data using AsyncStorage.
* The difference between temporary component state and persistent local storage.
* How to organize a React Native project into reusable components, screens, storage utilities, constants, and types.
* How to use React Navigation to move between multiple screens.
* How to refresh screen data automatically using `useFocusEffect` when navigating back.
* How to create reusable UI components to avoid duplicate code.
* How to build a clean CRUD flow (Create, Read, Delete) using local storage.
* How TypeScript interfaces improve code readability and reduce runtime errors.
* When to persist data locally versus when data should be fetched from a server.
* Why AsyncStorage is suitable for preferences, cached data, and offline support, but not for highly dynamic or sensitive data.

---

## 🎯 Future Improvements

* ✏️ Edit existing expenses
* 🔍 Search expenses
* 🗂️ Filter by category
* 📅 Filter by date
* 📊 Monthly expense summary
* 🌙 Dark mode
* 💱 Currency selection
* ☁️ Backend API integration
* 🔄 Replace AsyncStorage with MMKV for improved performance

---