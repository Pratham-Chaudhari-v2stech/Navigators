# 📱 React Native Learning Project

A React Native + TypeScript project built while learning the fundamentals of React Native development. This project demonstrates navigation, responsive layouts, Redux Toolkit integration, controlled forms, reusable components, FlatList rendering, responsive design, and TypeScript best practices.

---

# 🚀 Tech Stack

- React Native
- TypeScript
- React Navigation
- Redux Toolkit
- React Redux
- React Native Gesture Handler
- React Native Size Matters
- Metro Bundler

---

# 📂 Project Structure

```text
│
├── assets/
│
├── components/
│   └── UserCard.tsx
│
├── constants/
│   └── deals.ts
│
├── navigation/
│   ├── AppNavigator.tsx
│   
│
├── redux/
│   ├── store.ts
│   └── slices/
│       └── appSlice.ts
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── SignupScreen.tsx
│   ├── SignupScreen.styles.ts
│   ├── ListScreen.tsx
│ 
│       
│
│
└── App.tsx Used

- Native Stack Navigator
- Drawer Navigator
- Bottom Tab Navigator

---

# ✨ Features

- Stack Navigation
- Drawer Navigation
- Bottom Tab Navigation
- Responsive UI
- Responsive Scaling using `moderateScale()`
- Platform-specific Styling
- Reusable Components
- Controlled Forms
- Dynamic Deal Creation
- FlatList Rendering
- User Registration Form
- Form Validation
- Profile Card UI
- Global State Management using Redux Toolkit
- TypeScript Integration

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
- Flexbox
- Responsive Layouts
- Dimensions API
- Platform.select()
- Platform.OS
- SafeAreaView
- StatusBar
- Shadow (iOS)
- elevation (Android)
- Responsive Scaling using `moderateScale()`

Example

```tsx
padding: moderateScale(12);
fontSize: moderateScale(18);
borderRadius: moderateScale(20);
```

---

## Forms

Implemented fully controlled forms using React state.

### Features

- Controlled Inputs
- Dynamic Object Updates
- Form Validation
- Form Reset after Submission
- Numeric Keyboard

Example

```tsx
const [formData, setFormData] = useState({
  customer: '',
  company: '',
  amount: 0,
});
```

---

## FlatList

Implemented dynamic list rendering.

Learned

- data
- renderItem
- keyExtractor
- Dynamic Item Addition
- Updating Arrays using State

Example

```tsx
setDeals((prevDeals) => [
  ...prevDeals,
  formData,
]);
```

---

# 🗃️ Redux Toolkit

Implemented global state management using Redux Toolkit.

### Created Redux Store

Configured the Redux Store using `configureStore()`.

### Created App Slice

```ts
const initialState = {
  appTitle: 'User Registration App',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
```

### Concepts Learned

- Redux Store
- createSlice()
- configureStore()
- Provider
- useSelector()
- useDispatch()
- Global State
- Initial State
- Reducers

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
string[]
number[]
Array<string>
```

---

## Objects

```ts
type Deal = {
  id: string;
  customer: string;
  company: string;
  amount: number;
};
```

---

## Interfaces

Used for

- Component Props
- API Models
- Object Models

---

## Type Aliases

Used for

- Object Types
- Union Types
- Function Types

---

## Generic useState

```ts
const [deals, setDeals] = useState<Deal[]>([]);
```

---

## keyof Operator

Used for safely updating object properties.

```ts
const onChange = (
  value: string,
  field: keyof Deal
)
```

---

## Computed Property Names

Updated different object fields using a single function.

```ts
[field]: value
```

---

## Functional State Updates

```ts
setDeals((prevDeals) => [
  ...prevDeals,
  formData,
]);
```

---

## Generic Functions

```ts
async function fetchData<T>(
  url: string
): Promise<T>
```

---

## Strict Type Checking

Learned how TypeScript catches

- Invalid object properties
- Wrong data types
- Invalid navigation params
- Wrong function arguments
- Null / Undefined issues

before runtime.

---

# 📱 Screens Implemented

### Home Screen

- Navigation Entry
- Responsive Layout

### Sign Up Screen

- User Registration Form
- Controlled Inputs
- Form Validation

### List Screen

- Displayed Dynamic Lists
- FlatList Rendering

---

# 🛠 Packages Used

```bash
@react-navigation/native

@react-navigation/native-stack

@reduxjs/toolkit

react-redux

react-native-gesture-handler

react-native-safe-area-context

react-native-reanimated

react-native-screens

react-native-size-matters
```

---

# 🎯 Learning Outcome

Through this project I learned

- React Native fundamentals
- Building responsive user interfaces
- Drawer, Stack & Bottom Tab Navigation
- Responsive Scaling using `moderateScale()`
- Creating reusable components
- Controlled Forms
- Form Validation
- Dynamic FlatList Rendering
- Updating Arrays and Objects Immutably
- Platform-specific Styling
- TypeScript Integration
- Generic Types
- `keyof` Operator
- Functional State Updates
- Redux Toolkit Fundamentals
- Global State Management
- Organizing React Native projects
- Writing cleaner, scalable and type-safe React Native applications

---

# 📸 Screens

- Home
- Sign Up
- List

---