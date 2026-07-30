# Performance Optimization Demo

A React Native application built with **React Native CLI** and **TypeScript** to demonstrate common React and React Native performance optimization techniques. The project optimizes an existing search application by reducing unnecessary re-renders and improving `FlatList` performance.

---

# Features

* 🔍 Search Products using the DummyJSON Products API.
* 👤 Search Users using the DummyJSON Users API.
* ⏱️ Debounced search using a reusable `useDebounce` hook.
* 🔄 Reusable `useFetch` hook for API requests.
* ⚡ Optimized `FlatList` rendering.
* 🧠 Reduced unnecessary re-renders using `React.memo`.
* 🎯 Stable callback references using `useCallback`.
* 📦 Reusable UI components.
* ⏳ Loading indicator while fetching data.
* ❌ Error handling.
* 📭 Empty state for no search results.
* ✅ Fully typed with TypeScript.

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
* React Hooks
* DummyJSON API

---

# Learnings

## React.memo

* `React.memo` is a Higher Order Component (HOC) that prevents unnecessary re-rendering of a component.
* A memoized component re-renders only when:

  * Its own state changes.
  * Its props change.
* If a parent component re-renders but the child receives the same props, `React.memo` skips rendering the child.
* Used `React.memo` to optimize:

  * `ProductCard`
  * `UserCard`

Example:

```tsx
export default memo(ProductCard);
```

---

## useCallback

* `useCallback` memoizes a function and preserves its reference between renders.
* Without `useCallback`, a new function is created on every render.
* This is useful when passing callbacks to memoized child components or components like `FlatList`.

Used for:

```tsx
const renderItem = useCallback(
  ({ item }) => (
    <ProductCard product={item} />
  ),
  []
);
```

Benefits:

* Stable function reference.
* Prevents unnecessary updates caused by new callback references.
* Works well with `React.memo`.

---

## FlatList Performance Optimizations

Optimized `FlatList` using:

### initialNumToRender

```tsx
initialNumToRender={10}
```

* Controls how many items are rendered when the list first loads.
* Improves initial loading performance.

---

### maxToRenderPerBatch

```tsx
maxToRenderPerBatch={10}
```

* Controls how many new items are rendered in one rendering batch while scrolling.
* Prevents rendering too many items at once.

---

### windowSize

```tsx
windowSize={5}
```

* Specifies how many screenfuls of items should remain mounted around the visible area.
* Larger values improve scroll smoothness.
* Smaller values reduce memory usage.

---

### removeClippedSubviews

```tsx
removeClippedSubviews
```

* Removes native views that are far outside the visible screen.
* Helps reduce memory usage, especially on Android and large lists.

---

### keyExtractor

```tsx
keyExtractor={item => item.id.toString()}
```

* Provides a unique key for each list item.
* Helps React efficiently identify, update, and reuse list items.

---

## Avoiding Inline Functions

Instead of:

```tsx
renderItem={({ item }) => (
  <ProductCard product={item} />
)}
```

Used:

```tsx
const renderItem = useCallback(
  ({ item }) => (
    <ProductCard product={item} />
  ),
  []
);
```

This keeps the callback reference stable across renders and avoids creating a new function on every render.

---

## FlatList Virtualization

Learned that `FlatList` is already optimized by default using virtualization.

Instead of rendering every item in the dataset, it renders only the visible items and a small buffer around them.

The optimization props fine-tune this behavior for large or complex lists.

---

## getItemLayout

Learned that `getItemLayout` is useful only when every list item has a fixed size.

Since the cards in this project are not guaranteed to have a fixed height, this optimization was intentionally not implemented.

---

# Deliverable

Successfully optimized an existing search application by:

* Implementing `React.memo` for reusable card components.
* Using `useCallback` to memoize `FlatList`'s `renderItem`.
* Optimizing `FlatList` using:

  * `initialNumToRender`
  * `maxToRenderPerBatch`
  * `windowSize`
  * `removeClippedSubviews`
* Improved rendering efficiency by avoiding inline callback functions.
* Documented why `getItemLayout` was not suitable for this project.

---

# Concept Check

## Why does passing an inline function as a prop cause unnecessary re-renders?

Every time a component renders, an inline function creates a new function object with a different reference. Components that compare props by reference (such as `React.memo`) see it as a changed prop, which can lead to unnecessary re-renders. Using `useCallback` preserves the same function reference until its dependencies change.

---

## Can `useMemo` hurt performance?

Yes.

`useMemo` itself has a cost because React must store the cached value and compare dependency arrays on every render.

Using `useMemo` for inexpensive calculations or everywhere "just in case" can add unnecessary overhead and make an application slower instead of faster.

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

Base URL

```text
https://dummyjson.com
```
