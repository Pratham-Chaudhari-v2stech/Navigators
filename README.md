# 📱 React Native Learning Project

A React Native + TypeScript project built while learning the fundamentals of React Native development. This project demonstrates navigation, responsive layouts, TypeScript integration, forms, FlatList rendering, and reusable components.

---

# 🚀 Tech Stack

- React Native
- TypeScript
- React Navigation
- React Native Gesture Handler
- React Native Size Matters
- Metro Bundler

---

# 📂 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── DealCard.tsx
│   └── CustomButton.tsx
│
├── constants/
│   └── deals.ts
│
├── navigation/
│   ├── AppNavigator.tsx
│   ├── DrawerNavigator.tsx
│   └── ManageDealsTabs.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── SettingsScreen.tsx
│   ├── ProfileScreen.tsx
│   │
│   └── ManageDeals/
│       ├── ActiveDealsScreen.tsx
│       └── ClosedDealsScreen.tsx
│
└── App.tsx
```

---

# 🧭 Navigation Structure

```text
Stack Navigator
│
▼
Drawer Navigator
│
├── Home
├── Manage Deals
│      │
│      ▼
│   Bottom Tab Navigator
│      ├── Active Deals
│      └── Closed Deals
├── Settings
└── Profile
```

### Navigation Used

- Native Stack Navigator
- Drawer Navigator
- Bottom Tab Navigator

---

# ✨ Features

- Drawer Navigation
- Bottom Tab Navigation
- Stack Navigation
- Responsive UI
- FlatList Rendering
- Reusable Components
- TypeScript Integration
- Controlled Forms
- Add Deals Dynamically
- Responsive Scaling
- Platform-specific Styling

---

# 📚 React Native Concepts Learned

## Core Components

- View
- Text
- Image
- TextInput
- Pressable
- Button
- FlatList
- ScrollView

---

## Styling

- StyleSheet.create()
- Inline Styles vs StyleSheet
- Style Organization
- Responsive Layouts
- Flexbox
- Percentage Width/Height
- Dimensions API
- aspectRatio
- Platform.select()
- Platform.OS
- Shadow (iOS)
- elevation (Android)
- SafeAreaView
- StatusBar

---

## Responsive Design

Used

```tsx
Dimensions.get('window')
```

and

```tsx
moderateScale()
```

Example

```tsx
padding: moderateScale(12)
borderRadius: moderateScale(20)
fontSize: moderateScale(18)
```

### Why moderateScale?

Instead of writing fixed values like

```tsx
padding: 12
fontSize: 18
```

we use

```tsx
padding: moderateScale(12)
fontSize: moderateScale(18)
```

This scales the UI based on the device screen size, making spacing and font sizes look more consistent across small and large devices.

Package used:

```bash
npm install react-native-size-matters
```

---

# 📝 Forms

Implemented a controlled form using

- useState
- TextInput
- Pressable

Features

- Add Deal
- Input Validation
- Dynamic State Updates
- Form Reset after Submit

---

# 📋 FlatList

Learned

- data
- renderItem
- keyExtractor
- showsVerticalScrollIndicator

Example

```tsx
<FlatList
    data={deals}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <DealCard item={item} />
    )}
/>
```

---

# ⚡ TypeScript Concepts Learned

## Primitive Types

- string
- number
- boolean
- any
- unknown
- void
- never

---

## Arrays

```ts
number[]
string[]
Array<number>
```

---

## Objects

```ts
type User = {
    name: string;
    age: number;
}
```

---

## Union Types

```ts
type Theme = "light" | "dark";
```

---

## Literal Types

```ts
type Status = "loading" | "success" | "error";
```

---

## Interfaces

Created interfaces for

- Component Props
- API Models
- Objects

Example

```ts
interface User {
    name: string;
    age: number;
    email?: string;
}
```

---

## Type Aliases

Used for

- Unions
- Function Types
- Object Types

Example

```ts
type Theme = "light" | "dark";
```

---

## Interface vs Type

### Interface

Used for

- Props
- API Responses
- Object Models

### Type

Used for

- Union Types
- Function Types
- Literal Types
- Type Composition

---

## Function Typing

```ts
function add(a:number,b:number):number
```

---

## Props Typing

```ts
interface ButtonProps {
    title:string;
    onPress:()=>void;
}
```

---

## Optional Properties

```ts
email?: string
```

---

## Readonly Properties

```ts
readonly id:number
```

---

## keyof

Used for updating object properties safely.

Example

```ts
const onChange = (
    value:string,
    field:keyof Deal
)
```

---

## Generic useState

```ts
const [deals,setDeals] =
useState<Deal[]>([])
```

---

## Generic Functions

Learned generic functions like

```ts
async function fetchData<T>(
    url:string
):Promise<T>
```

where the caller decides what type `T` should be.

---

## Strict Type Checking

Learned how TypeScript catches

- Wrong data types
- Missing object properties
- Invalid navigation params
- Null / Undefined issues
- Wrong function arguments

before runtime.

---

# 📱 Navigation Learning

Implemented

- Native Stack Navigator
- Drawer Navigator
- Bottom Tabs

Typed all navigation using

```ts
RootStackParamList
DrawerParamList
ManageDealsTabParamList
```

Example

```ts
type DrawerParamList = {
    Home: undefined;
    Settings: undefined;
}
```

---

# 🛠 Packages Used

```bash
@react-navigation/native

@react-navigation/native-stack

@react-navigation/drawer

@react-navigation/bottom-tabs

react-native-gesture-handler

react-native-reanimated

react-native-safe-area-context

react-native-screens

react-native-size-matters
```

---

# 🎯 Learning Outcome

Through this project I learned

- React Native fundamentals
- Responsive UI development
- Navigation architecture
- Reusable component creation
- TypeScript integration
- Responsive scaling using `moderateScale`
- Controlled forms
- FlatList optimization
- Platform-specific styling
- Navigation typing
- Writing cleaner and type-safe React Native applications

---

# 📸 Screens

- Home
- Manage Deals
- Active Deals
- Closed Deals
- Settings
- Profile


---
