# 📱 React Native API Integration (TypeScript)

A simple React Native application built with **TypeScript** that demonstrates how to fetch data from a public REST API using **Axios**. The project focuses on handling asynchronous API calls, strongly typing API responses, and managing different UI states such as loading, error, success, and empty.

---

## 🚀 Features

* 🌐 Fetch posts from a public REST API
* ⚡ Axios for HTTP requests
* 🔄 Async data fetching using `async/await`
* 🎯 TypeScript interfaces for API responses
* 📋 Display data using `FlatList`
* ⏳ Loading state with `ActivityIndicator`
* ❌ Error state with Retry functionality
* 📭 Empty state when no data is returned
* 🧩 Reusable UI components
* 📁 Clean and scalable project structure

---

## 🛠 Tech Stack

* React Native CLI
* TypeScript
* Axios
* React Hooks (`useState`, `useEffect`)
* FlatList

---

## 📂 Project Structure

```text
src
│
├── api
│   └── postApi.ts
│
├── components
│   ├── EmptyView.tsx
│   ├── ErrorView.tsx
│   ├── LoadingView.tsx
│   └── PostItem.tsx
│
├── constants
│   └── api.ts
│
├── screens
│   └── HomeScreen.tsx
│
├── styles
│   └── HomeStyle.ts
│
├── types
│   └── post.ts
│
└── App.tsx
```

---

## 📡 API Used

**DummyJSON Posts API**

```
https://dummyjson.com/posts
```

The application fetches a list of posts and displays:

* Title
* Body
* Tags
* User ID

---

## 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd <project-folder>
```

Install dependencies

```bash
npm install
```

Install Axios

```bash
npm install axios
```

Run Android

```bash
npx react-native run-android
```

Run iOS (macOS only)

```bash
npx react-native run-ios
```

---

## 📱 Application Flow

```text
App Launch
     │
     ▼
HomeScreen
     │
     ▼
useEffect()
     │
     ▼
Fetch Posts (Axios)
     │
     ├──────────────┐
     ▼              ▼
Success          Failure
     │              │
     ▼              ▼
Store Data      Show Error
     │              │
     ▼              │
FlatList        Retry Button
     │
     ▼
Display Posts
```

---

## 📚 Concepts Covered

* Axios API Integration
* HTTP GET Request
* Async/Await
* React Hooks
* useEffect
* useState
* TypeScript Interfaces
* Typed API Responses
* FlatList
* ActivityIndicator
* Component Reusability
* Error Handling
* Conditional Rendering

---

## 🧠 Learnings

Through this project, I learned:

* How to fetch data from a public REST API using Axios.
* Why API calls should be placed inside `useEffect()` when loading data on screen initialization.
* How `async/await` simplifies asynchronous code and improves readability.
* How to define TypeScript interfaces for API responses to catch type errors during development.
* The importance of separating **loading**, **error**, **empty**, and **success** states instead of only checking if data exists.
* How to use `ActivityIndicator` to provide visual feedback while data is loading.
* How to implement a retry mechanism when an API request fails.
* How to display dynamic data efficiently using `FlatList`.
* How to separate API logic into a dedicated service layer (`postApi.ts`) instead of making API calls directly inside UI components.
* How reusable components such as `LoadingView`, `ErrorView`, `EmptyView`, and `PostItem` help keep screens clean and maintainable.
* How organizing code into folders like **api**, **components**, **constants**, **types**, **styles**, and **screens** improves project scalability and readability.

---

## 🎯 Future Improvements

* Pull-to-refresh
* Search posts
* Pagination (Load More)
* Filter posts by tags
* View post details on a separate screen
* Offline caching using AsyncStorage
* API state management using Redux Toolkit or Redux Saga

---
