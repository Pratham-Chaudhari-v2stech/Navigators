# Debugging & Error Handling

## 🎯 Objective

Learn how to debug React Native applications and prevent complete application crashes by using an **Error Boundary** with a fallback UI.

---

## 📚 Topics Covered

- React Native Debugger / Flipper
- Console logging for debugging
- Error Boundaries
- Render-time vs Event-handler errors
- Fallback UI

---

## ✅ Deliverable

Implemented an **Error Boundary** that catches a simulated render crash and displays a friendly fallback screen instead of letting the application crash.

---

## ✨ Features

- ErrorBoundary class component
- `getDerivedStateFromError()` to update the UI after an error
- `componentDidCatch()` to log error details
- **"Simulate Render Crash"** button for testing
- Custom fallback UI with a **"Try Again"** button

---

## 📁 Project Structure

```text
App
└── ErrorBoundary
    └── NavigationContainer
        └── AppNavigator
            └── Screens
```

---

## ⚙️ How It Works

1. User presses **Simulate Render Crash**.
2. The screen intentionally throws a render error.
3. **ErrorBoundary** catches the error.
4. React renders the fallback UI.
5. The application continues running instead of crashing.

---

## 🧠 Concept Check

### ❓ Why doesn't an Error Boundary catch errors thrown inside event handlers?

Error Boundaries only catch errors that occur while React is **rendering components**, during **lifecycle methods**, or inside **constructors**.

Event handlers such as `onPress`, `onChange`, etc., execute **after rendering**, so they are **not captured** by an Error Boundary. These errors should be handled using **`try...catch`** blocks.

---

### ❓ Why is a fallback UI useful?

Instead of displaying a blank screen or terminating the application, a fallback UI provides users with a meaningful message and a way to recover from the error. This improves the overall user experience and helps developers debug issues more effectively.

---

# 📖 Learnings

## Error Boundaries

- Learned that an **Error Boundary** is a special React component that catches JavaScript errors occurring during rendering.
- Understood that Error Boundaries prevent the entire application from crashing by displaying a fallback UI.
- Learned that Error Boundaries **only catch render-time errors**.

---

## What Error Boundaries Do NOT Catch

Error Boundaries **do not** catch:

- Errors inside event handlers (`onPress`, `onChange`, etc.)
- Errors inside asynchronous code (`setTimeout`, `Promises`, `async/await`)
- Server-side rendering errors
- Errors thrown inside the Error Boundary itself

These scenarios require manual error handling using `try...catch`.

---

## Debugging

- Practiced debugging React Native applications using:
  - `console.log()`
  - React Native Debugger
  - Flipper

- Learned how logging helps identify the source of application issues.

---

## Important Lifecycle Methods

### `static getDerivedStateFromError()`

- Invoked after a child component throws an error.
- Updates the component state.
- Displays the fallback UI.

### `componentDidCatch()`

- Called after an error has been caught.
- Used for:
  - Logging errors
  - Sending crash reports
  - Analytics (Crashlytics, Sentry, etc.)

---

## Class Components vs Functional Components

- Learned that Error Boundaries currently require **Class Components**.
- React only supports the lifecycle methods required for Error Boundaries (`getDerivedStateFromError()` and `componentDidCatch()`) in class components.
- Functional components cannot act as Error Boundaries unless a third-party library (e.g., `react-error-boundary`) is used.

---

## Practical Implementation

- Created an Error Boundary component.
- Simulated a render crash using a button.
- Verified that the Error Boundary caught the error.
- Displayed a custom fallback UI with a **"Try Again"** button.
- Prevented the application from crashing completely.

---

## 🎯 Outcome

Successfully implemented a reusable **Error Boundary** that catches simulated render crashes, logs the error, and displays a custom recovery screen instead of allowing the application to crash.