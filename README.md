# 📋 React Native Todo App (TypeScript)

A simple and scalable **Todo Application** built with **React Native**, **TypeScript**, **Context API**, and **useReducer**. This project demonstrates how to manage shared state without Redux by combining React's built-in Context API with the `useReducer` hook.

---

## 🚀 Features

* ➕ Add new todos
* ✅ Mark todos as completed
* 🗑️ Delete todos
* ⚡ Shared state using Context API
* 🔄 Centralized state management with `useReducer`
* 📝 Fully typed with TypeScript
* 📱 Clean and responsive React Native UI

---

## 🛠️ Tech Stack

* React Native
* TypeScript
* React Context API
* React `useReducer`
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
├── context/
│   ├── TodoContext.tsx
│   └── TodoProvider.tsx
│
├── reducers/
│   └── todoReducer.ts
│
├── screens/
│   └── HomeScreen.tsx
│
├── types/
│   └── todo.ts
│
├── App.tsx
└── index.tsx
```

---

## ⚙️ State Management Flow

```text
User Action
     │
     ▼
dispatch(action)
     │
     ▼
useReducer
     │
     ▼
New State
     │
     ▼
Context API
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

This project helped me strengthen my understanding of React Native state management concepts and TypeScript.

### ✅ Context API

* Learned how to create a Context using `createContext`.
* Used a custom `useTodo()` hook to access shared state.
* Avoided prop drilling by providing state from a single `TodoProvider`.
* Understood when Context API is suitable for sharing state across multiple components.

### ✅ useReducer

* Learned how reducers centralize state update logic.
* Managed all todo operations using dispatched actions.
* Implemented actions such as:

  * Add Todo
  * Delete Todo
  * Toggle Todo
* Understood the reducer pattern of:

  * Current State
  * Action
  * New State

### ✅ TypeScript

* Created interfaces for Todo objects.
* Defined state and action types.
* Used union types for reducer actions.
* Improved type safety and editor autocompletion.

### ✅ Redux Concepts

Although this project does not use Redux, it helped me understand the core concepts that Redux is built on:

* State
* Actions
* Dispatch
* Reducers
* Predictable state updates

I also learned the difference between local state management using `useReducer` and global state management using a Redux Store.

### ✅ React Component Architecture

* Organized the project into reusable components.
* Separated UI, business logic, and state management.
* Followed a scalable folder structure suitable for medium-sized applications.

---

# 📌 Future Improvements

* ✏️ Edit existing todos
* 🔍 Search todos
* 🗂️ Filter All / Active / Completed
* 💾 Persist todos using AsyncStorage
* 🎨 Improve UI with custom styling and animations
* 🌙 Dark Mode support

---

