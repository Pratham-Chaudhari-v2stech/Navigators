# Smart Search App

A React Native application built with **React Native CLI** and **TypeScript** that demonstrates advanced React concepts including **Custom Hooks**, **useRef**, and **useLayoutEffect**. The app allows users to search **Products** and **Users** using the DummyJSON API while showcasing reusable components and reusable business logic.

---

# Features

* 🔍 Search Products using the DummyJSON Products API.
* 👤 Search Users using the DummyJSON Users API.
* ⏱️ Debounced search to reduce unnecessary API calls.
* 🔄 Reusable `useFetch` hook for API requests.
* ⌨️ Auto-focus the search input using `useRef`.
* 🧭 Dynamically update the screen title using `useLayoutEffect`.
* 📦 Reusable UI components (`SearchBar`, `ProductCard`, `UserCard`).
* 📃 Display results efficiently using `FlatList`.
* ⏳ Loading indicator while fetching data.
* ❌ Error handling for failed API requests.
* 📭 Empty state when no matching results are found.
* ✅ Fully typed using TypeScript interfaces and generics.

---

# Project Structure

```text
src/
│
├── components/
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   └── UserCard.tsx
│
├── constants/
│   └── api.ts
│
├── hooks/
│   ├── useDebounce.ts
│   └── useFetch.ts
│
├── navigation/
│   ├── AppNavigator.tsx
│   └── types.ts
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── ProductSearchScreen.tsx
│   └── UserSearchScreen.tsx
│
├── services/
│   └── api.ts
│
└── types/
    ├── product.ts
    └── user.ts
```

---

# Technologies Used

* React Native CLI
* TypeScript
* React Navigation
* Axios
* DummyJSON API
* React Hooks

---

# Learnings

## Custom Hooks

* A **custom hook** is simply a JavaScript/TypeScript function whose name starts with **`use`** and that uses one or more React hooks internally.
* Custom hooks allow reusable stateful logic to be shared across multiple components without duplicating code.
* If the same combination of `useState`, `useEffect`, or other hooks appears in multiple components, it's a strong indication that the logic should be extracted into a custom hook.
* Built two reusable custom hooks:

  * **`useDebounce`** to delay updating the search value until the user stops typing, reducing unnecessary API requests.
  * **`useFetch`** to encapsulate API fetching logic, including loading, error handling, and storing fetched data.
* The same custom hooks were reused in both the **Product Search** and **User Search** screens.

---

## useRef

* `useRef` stores a mutable value that persists across re-renders without causing a component to re-render when the value changes.
* Used `useRef` to store a reference to the search `TextInput`.
* Automatically focused the search input when the screen opened by calling:

```tsx
inputRef.current?.focus();
```

* `useRef` is commonly used for:

  * Input focus
  * Timer IDs (`setTimeout`, `setInterval`)
  * Storing previous values
  * Accessing native component methods

* Unlike `useState`, updating a ref **does not trigger a re-render**, making it ideal for values that do not affect the UI.

---

## useLayoutEffect

* `useLayoutEffect` runs **synchronously after React has updated the UI but before the screen is painted**.
* Used `useLayoutEffect` to:

  * Dynamically update the navigation title.
  * Focus the search input before the user sees the screen.
* Compared with `useEffect`:

  * `useEffect` runs **after** the screen is painted.
  * `useLayoutEffect` runs **before** the screen is painted, making it useful for UI measurements or updates that should happen without visible flicker.

---


## Generic Custom Hook

* Implemented `useFetch<T>()` using TypeScript Generics.
* The same hook can fetch different types of data while maintaining type safety.
* Used it for both:

  * Product API responses.
  * User API responses.

---

## Axios Instance

* Created a reusable Axios instance using `axios.create()`.
* Centralized common API configuration such as:

  * Base URL
  * Request timeout
* This approach avoids repeating configuration across every API request and makes future enhancements like authentication headers and interceptors easier.

---

## Debouncing

* Implemented a reusable `useDebounce` hook.
* Instead of calling the API on every keystroke, the app waits for the user to stop typing for a specified delay before making the request.
* This improves application performance and reduces unnecessary network requests.

---

## Reusable Components

Created reusable UI components to improve maintainability:

* `SearchBar`
* `ProductCard`
* `UserCard`

These components keep the screen components clean and encourage code reuse.

---

## Separation of Concerns

Organized the project into separate folders for:

* Components
* Hooks
* Navigation
* Services
* Types
* Constants
* Screens

This makes the project easier to maintain, scale, and understand.

---

## Deliverable

Successfully built:

* A custom `useDebounce` hook from scratch.
* A custom `useFetch` hook from scratch.
* Reused both hooks across multiple screens.
* Implemented `useRef` for input focus.
* Implemented `useLayoutEffect` for updating navigation options before the screen is painted.

---

## Concept Check

### What makes a function a hook instead of a regular function?

A function becomes a custom hook when:

* Its name starts with **`use`**.
* It uses one or more React hooks (`useState`, `useEffect`, `useRef`, etc.) internally.
* It encapsulates reusable stateful logic that can be shared across multiple components while following React's Rules of Hooks.

---

### Why use `useRef` instead of `useState` for a timer ID?

A timer ID is not displayed in the UI.

If it were stored using `useState`, every update would trigger an unnecessary re-render.

Using `useRef` allows the timer ID to persist across renders while avoiding extra re-renders, making it the preferred choice for values that don't affect the rendered output.

---

# APIs Used

### Search Products

```text
GET /products/search?q={query}
```

### Search Users

```text
GET /users/search?q={query}
```

Base URL:

```text
https://dummyjson.com
```

---

