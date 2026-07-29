# Day 14 – Animations & Gestures

## 📌 Objective

Learn how animations and gestures work in React Native using the built-in **Animated API** and **PanResponder**. Understand the difference between the **JavaScript Thread** and the **UI Thread**, why animation performance matters, and how **React Native Reanimated** improves smoothness for complex animations.

---

## 📚 Topics Covered

- Animated API
- Animated.Value
- Animated.timing()
- Animated.spring()
- Animated.sequence()
- useNativeDriver
- PanResponder
- Swipe Gesture
- Tap Animation
- Transform Animations
- JavaScript Thread
- UI Thread
- Animation Performance
- Gesture Handling

---

## 🛠️ Project Overview

Built a single screen demonstrating different animation and gesture interactions.

### Features

### 1. Fade Animation
- A box smoothly fades in and out.
- Implemented using `Animated.timing()`.

### 2. Tap Scale Animation
- A card scales up when tapped.
- Returns to its original size with a spring animation.
- Implemented using:
  - `Animated.spring()`
  - `Animated.sequence()`

### 3. Swipe to Delete
- User can drag an item horizontally.
- If swiped beyond a threshold, it remains partially open revealing the Delete area.
- Otherwise, it springs back to its original position.
- Implemented using:
  - `PanResponder`
  - `Animated.Value`
  - `Animated.spring()`

---

## 📂 Folder Structure

```text
src
│
├── components
│   ├── FadeBox.tsx
│   ├── ScaleCard.tsx
│   └── SwipeableItem.tsx
│
├── data
│   └── tasks.ts
│
└── screens
    └── AnimationDemoScreen.tsx
```

---

## 🔑 Key Concepts Used

### Animated API
Used for creating smooth UI animations such as:
- Fade In / Fade Out
- Scale
- Translation
- Rotation
- Opacity

### Animated.Value
Stores values that change during an animation.

Example:

```tsx
const opacity = useRef(new Animated.Value(0)).current;
```

### Animated.timing()

Animates a value over a specified duration.

```tsx
Animated.timing(opacity, {
  toValue: 1,
  duration: 500,
  useNativeDriver: true,
}).start();
```

### Animated.spring()

Creates smooth spring-based animations.

```tsx
Animated.spring(scale, {
  toValue: 1.2,
  useNativeDriver: true,
}).start();
```

### Animated.sequence()

Runs multiple animations one after another.

```tsx
Animated.sequence([
  Animated.spring(...),
  Animated.spring(...),
]).start();
```

### PanResponder

Used to detect drag and swipe gestures.

Common callbacks:
- `onMoveShouldSetPanResponder`
- `onPanResponderMove`
- `onPanResponderRelease`

### useNativeDriver

Runs supported animations on the native side for better performance.

```tsx
useNativeDriver: true
```

---

## 📖 Learnings

- Learned the basics of the **React Native Animated API**.
- Used **Animated.Value**, `Animated.timing()`, `Animated.spring()`, and `Animated.sequence()` to create smooth animations.
- Implemented **fade** and **tap scale** animations.
- Learned **PanResponder** for handling swipe gestures.
- Built a simple **swipe-to-delete** interaction.
- Understood the purpose of **useNativeDriver** for improving animation performance.
- Learned the difference between the **JavaScript Thread** and the **UI Thread** in React Native.
- Understood that heavy JavaScript work (API calls, calculations, rendering large lists) can block the JS Thread and cause animation **jank**, especially on lower-end devices.
- Learned that **React Native Reanimated** runs animations on the UI Thread, making complex animations and gestures smoother.
- Understood when to use the **Animated API** (simple animations) and **Reanimated** (complex, gesture-driven animations).
- Practiced creating gesture-based interactions using React Native's built-in tools.

---

## ✅ Deliverable

A React Native screen showcasing:
- Fade Animation
- Tap Scale Animation
- Swipe-to-Delete Gesture

using the **Animated API** and **PanResponder**.