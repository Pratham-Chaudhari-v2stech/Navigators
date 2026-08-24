# UI Polish Libraries

A React Native practice project demonstrating modern UI polish libraries and styling techniques.

## Overview

This project was created as part of the React Native training plan for **Day 21 — UI Polish Libraries**.

The goal of this exercise was to build a polished React Native screen using multiple UI libraries and understand when each library is useful.

## Technologies Used

* React Native `0.81.4`
* React `19.1.0`
* TypeScript
* NativeWind `4.2.6`
* React Native Vector Icons `10.3.0`
* React Native SVG `15.15.5`
* React Native Linear Gradient `2.8.3`
* Lottie React Native `7.3.0`
* React Native Reanimated `3.19.1`

## Libraries Demonstrated

### 1. React Native Vector Icons

Used for standard UI icons such as:

* Profile icon
* Check icon
* Arrow icon

Example:

```tsx
<Icon
  name="check"
  size={24}
  color="#16A34A"
/>
```

### 2. React Native SVG

Used to create a custom profile illustration without relying on image assets.

The custom SVG contains shapes such as:

* Circles
* Paths
* Custom colors

### 3. React Native Linear Gradient

Used to create the profile header gradient.

```tsx
<LinearGradient
  colors={['#4F46E5', '#06B6D4']}
>
  ...
</LinearGradient>
```

### 4. Lottie React Native

Used to display a success animation after profile completion.

The animation JSON file is stored in:

```text
src/assets/animations/success.json
```

### 5. NativeWind

Used as the primary styling approach for the screen.

Instead of traditional React Native `StyleSheet` objects:

```tsx
<View style={styles.container}>
```

NativeWind utility classes are used:

```tsx
<View className="flex-1 bg-gray-50">
```

## Project Structure

```text
Navigators/
│
├── src/
│   ├── components/
│   │   ├── CustomIllustration.tsx
│   │   ├── ProfileHeader.tsx
│   │   └── StatusAnimation.tsx
│   │
│   ├── screens/
│   │   └── ProfileDemoScreen.tsx
│   │
│   └── assets/
│       └── animations/
│           └── success.json
│
├── App.tsx
├── global.css
├── global.d.ts
├── nativewind-env.d.ts
├── tailwind.config.js
├── babel.config.js
├── metro.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Deliverable Screen

The main screen is a **Profile Demo Screen** containing:

* Gradient profile header
* Vector icon
* Custom SVG profile illustration
* Profile completion information
* Lottie success animation
* NativeWind-styled UI
* Continue button with vector icon

## Screen Flow

```text
App
 │
 ▼
ProfileDemoScreen
 │
 ├── ProfileHeader
 │    ├── LinearGradient
 │    └── Vector Icon
 │
 ├── CustomIllustration
 │    └── SVG
 │
 ├── Profile Status
 │    └── Vector Icon
 │
 ├── StatusAnimation
 │    └── Lottie
 │
 └── Continue Button
      └── Vector Icon
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Start Metro:

```bash
npx react-native start --reset-cache
```

Run the Android application:

```bash
npx react-native run-android
```

## NativeWind Configuration

NativeWind is configured using:

```text
tailwind.config.js
global.css
nativewind-env.d.ts
babel.config.js
metro.config.js
```

The project uses Tailwind-style utility classes such as:

```tsx
<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-2xl font-bold text-gray-900">
    Welcome
  </Text>
</View>
```

## Key Concepts Learned

### When to use SVG vs Vector Icons

**Vector icons** are better for common UI icons such as search, edit, delete, settings, arrows, and checkmarks.

**SVG** is more suitable for custom graphics, illustrations, logos, and designs that require detailed control over paths, shapes, and styling.

### NativeWind vs StyleSheet

**NativeWind**

```tsx
<View className="flex-1 bg-white p-4">
```

Advantages:

* Fast utility-based styling
* Styles remain close to the component
* Consistent spacing and design utilities
* Useful when a project already follows Tailwind conventions

**StyleSheet**

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});
```

Advantages:

* Explicit object-based styling
* Easy to organize complex styles
* Standard React Native approach
* Useful when extensive custom styling is required

The choice depends on the project's architecture, team conventions, and UI complexity.

## Learning Outcome

By completing this project, I practiced:

* Using vector icon libraries
* Creating custom SVG graphics
* Implementing gradient backgrounds
* Integrating Lottie JSON animations
* Styling React Native components with NativeWind
* Organizing reusable UI components
* Combining multiple UI libraries in a single screen
