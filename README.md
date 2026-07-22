# 📋 React Native Todo App (TypeScript + Redux Toolkit)

A simple and scalable **Todo Application** built with **React Native**, **TypeScript**, and **Redux Toolkit**. This project demonstrates centralized global state management using Redux Toolkit, typed Redux hooks, slices, actions, and selectors.

---

## 🚀 Features

* ➕ Add new todos
* ✅ Mark todos as completed
* 🗑️ Delete todos
* 🌍 Global state management using Redux Toolkit
* 🏪 Centralized Redux Store
* 🎯 Typed Actions, Reducers, and Selectors
* 📝 Fully typed with TypeScript
* 📱 Clean and responsive React Native UI

---

## 🛠️ Tech Stack

* React Native
* TypeScript
* Redux Toolkit
* React Redux
* React Hooks

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── AddTodo.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
│
├── redux/
│   ├── store.ts
│   ├── hooks.ts
│   └── todoSlice.ts
│
├── screens/
│   └── HomeScreen.tsx
│
├── types/
│   └── todos.ts
│
├── App.tsx
└── index.tsx
```

---

## ⚙️ Redux State Flow

```text
User Action
     │
     ▼
dispatch(action)
     │
     ▼
Redux Store
     │
     ▼
Todo Slice Reducer
     │
     ▼
Updated State
     │
     ▼
Selector (useSelector)
     │
     ▼
Components Re-render
```

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Metro

```bash
npm start
```

### 4. Run Android

```bash
npm run android
```

### 5. Run iOS

```bash
npm run ios
```

---

# 📚 Learnings

This project helped me strengthen my understanding of global state management in React Native using Redux Toolkit and TypeScript.

## ✅ Redux Toolkit

* Learned how to configure a Redux Store using `configureStore()`.
* Created a Redux Slice using `createSlice()`.
* Managed application state in a centralized store.
* Learned how Redux Toolkit reduces boilerplate compared to traditional Redux.
* Understood immutable state updates using Immer.
* Generated Redux actions automatically using `createSlice`.

---

## ✅ React Redux

* Wrapped the application with the Redux `Provider`.
* Used `useDispatch` to dispatch Redux actions.
* Used `useSelector` to access state from the Redux Store.
* Created typed hooks (`useAppDispatch` and `useAppSelector`) for better TypeScript support.

---

## ✅ Redux Store

* Learned why a centralized store is useful for larger applications.
* Registered reducers inside the Redux Store.
* Understood how application state is stored globally.
* Learned the flow of:

  * Dispatch Action
  * Reducer
  * Store Update
  * Component Re-render

---

## ✅ Redux Slice

* Created a `todoSlice` using `createSlice()`.
* Implemented reducers for:

  * Add Todo
  * Toggle Todo
  * Delete Todo
* Learned how actions and reducers are generated together inside a slice.

---

## ✅ Selectors

* Learned how selectors read only the required part of the Redux Store.
* Created reusable selectors to avoid repeating store access logic.
* Understood how selectors improve performance by allowing components to subscribe only to the data they need.

---

## ✅ TypeScript

* Created interfaces for Todo objects.
* Typed Redux state using interfaces.
* Used `PayloadAction` for strongly typed Redux actions.
* Used `RootState` and `AppDispatch` for type-safe Redux operations.

---

## ✅ React Component Architecture

* Organized the project into reusable components.
* Separated UI from business logic.
* Kept Redux logic inside dedicated files (`store`, `slice`, and `hooks`).
* Followed a scalable folder structure suitable for medium and large applications.

---

## ✅ Key Concepts Learned

* Global State Management
* Redux Store
* Redux Toolkit
* createSlice
* configureStore
* Actions
* Reducers
* Dispatch
* Selectors
* Typed Hooks
* Predictable State Updates

---

# 📌 Future Improvements

* ✏️ Edit existing todos
* 🔍 Search todos
* 🗂️ Filter All / Active / Completed
* 💾 Persist todos using AsyncStorage or Redux Persist
* 🎨 Improve UI with custom styling and animations
* 🌙 Dark Mode support