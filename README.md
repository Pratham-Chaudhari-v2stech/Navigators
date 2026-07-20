# 📚 Student Course Manager

A simple React Native application built using **React Native CLI** and **TypeScript** as a Week 1 assignment. The app demonstrates the fundamentals of React Native including navigation, forms, lists, local storage, and TypeScript.

---

## 📱 Features

- 🔐 Login Screen with basic form validation
- 🏠 Home Dashboard
- 📚 View all courses
- ➕ Add a new course
- 📖 View complete course details
- 💾 Persistent storage using AsyncStorage
- 🚪 Drawer Navigation
- 🧭 Stack Navigation
- ✅ Fully typed using TypeScript

---

## 📂 Project Structure

```
src
│
├── screens
│   ├── Login.tsx
│   ├── Home.tsx
│   ├── Courses.tsx
│   ├── AddCourse.tsx
│   ├── CourseDetails.tsx
│   └── Profile.tsx
│
├── navigation
│   ├── AppNavigator.tsx
│   └── RootDrawer.tsx
│
├── storage
│   └── courseStorage.ts
│
├── types
│   └── type.ts
│
└── App.tsx
```

---

## 🚀 Tech Stack

- React Native CLI
- TypeScript
- React Navigation
  - Native Stack Navigator
  - Drawer Navigator
- AsyncStorage
- React Hooks

---

## 📱 Navigation Flow

```
Login
   │
   ▼
Drawer Navigation
   │
   ├── Home
   │      │
   │      └── Add Course
   │
   ├── Courses
   │      │
   │      ├── Add Course
   │      └── Course Details
   │
   └── Profile
```

---

## 💾 Data Storage

The application stores course information locally using **AsyncStorage**.

Each course contains:

- ID
- Title
- Instructor
- Duration
- Level
- Description

Data persists even after closing the application.

---

## 📖 Concepts Practiced

### React Native

- Functional Components
- Core Components
  - View
  - Text
  - TextInput
  - FlatList
  - ScrollView
  - TouchableOpacity
- StyleSheet
- Flexbox Layout
- KeyboardAvoidingView
- TouchableWithoutFeedback

---

### TypeScript

- Interfaces
- Type Aliases
- Typed Props
- Navigation Types
- State Typing
- Function Typing
- Strict Type Checking

---

### Navigation

- Native Stack Navigator
- Drawer Navigator
- Nested Navigation
- Passing Parameters Between Screens
- Typed Navigation using RootStackParamList

---

### Forms

- Controlled Components
- Form Validation
- State Management with useState
- Input Handling

---

### Lists

- FlatList
- keyExtractor
- Custom Render Item
- Dynamic Data Rendering

---

### AsyncStorage

- Saving Data
- Reading Data
- Updating Data
- Persistent Local Storage
- Helper Functions for Storage Operations

---

### React Hooks

- useState
- useCallback
- useFocusEffect

---

## 🎯 Learning Outcomes

This project helped me understand:

- Setting up a React Native CLI project
- Building reusable and typed components
- Structuring a React Native project
- Working with multiple navigators
- Difference between Stack and Drawer navigation
- Passing typed parameters between screens
- Creating controlled forms
- Form validation techniques
- Rendering dynamic lists using FlatList
- Using AsyncStorage for persistent local data
- Managing screen lifecycle with `useFocusEffect`
- Organizing reusable storage helper functions
- Using TypeScript for safer React Native development

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone <repository-url>
```

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

---

## 📸 Screens

- Login
- Home
- Courses List
- Add Course
- Course Details
- Profile

(Add screenshots here)

---

## 🌟 Future Improvements

- Edit Course
- Delete Course
- Search Courses
- Course Categories
- Authentication using API
- Redux Toolkit / Redux Saga Integration
- Dark Mode
- Form validation using Formik + Yup
- Unit Testing

---
