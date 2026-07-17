# Day 5 – Navigation Fundamentals (React Native)

## 📌 Objective

The goal of this project was to understand how navigation works in React Native using **React Navigation** by implementing:

- Drawer Navigator
- Bottom Tab Navigator
- Native Stack Navigator
- Typed navigation using TypeScript
- Passing parameters between screens

---

# 🚀 What I Built

An **Employee Management App** demonstrating nested navigation.

The app consists of:

- Dashboard
- Employee Module
- Employee Details
- Add Employee
- Profile
- Settings

Navigation used:

- **Drawer Navigator**
- **Bottom Tab Navigator**
- **Native Stack Navigator**

---

# 📂 Folder Structure

```text
src
│
├── navigation
│   ├── AppNavigator.tsx
│   ├── RootDrawer.tsx
│   ├── MainTabs.tsx
│   ├── EmployeeStack.tsx
│   ├── SettingsStack.tsx
│   └── types.ts
│
├── screens
│   ├── Dashboard
│   │     DashboardScreen.tsx
│   │
│   ├── Employees
│   │     EmployeeList.tsx
│   │     EmployeeDetails.tsx
│   │     AddEmployee.tsx
│   │
│   ├── Profile
│   │     ProfileScreen.tsx
│   │
│   └── Settings
│         SettingsScreen.tsx
│
├── components
│     EmployeeCard.tsx
│     CustomHeader.tsx
│
├── data
│     employees.ts
│
└── App.tsx
```

---


```
NavigationContainer
        │
        ▼
Root Drawer
│
├── Home
│     │
│     ▼
│  Bottom Tabs
│
│  ├── Dashboard
│  ├── Employees
│  │      │
│  │      ▼
│  │  Employee Stack
│  │      ├── Employee List
│  │      ├── Employee Details
│  │      └── Add Employee
│  │
│  └── Profile
│
└── Settings
       │
       ▼
   Settings Stack
       │
       ▼
  Settings Screen
```

---

# 📱 Screens

### Dashboard

- Landing screen
- Navigate to Employee Module
- Open Drawer

---

### Employee List

- Displays employee list
- Navigate to Employee Details
- Navigate to Add Employee

---

### Employee Details

- Receives employeeId as parameter
- Displays employee information

---

### Add Employee

- Screen for adding employee (UI only)

---

### Profile

- Demonstrates Bottom Tab navigation

---

### Settings

- Opens from Drawer
- Demonstrates nested Stack inside Drawer

---

# 🔀 Navigation Used

## Drawer Navigator

Used for top-level navigation.

Contains:

- Home
- Settings

Example:

```tsx
navigation.openDrawer();
```

---

## Bottom Tab Navigator

Used for switching between major sections.

Contains:

- Dashboard
- Employees
- Profile

Example:

```tsx
navigation.navigate('Employees');
```

---

## Native Stack Navigator

Used for screen-to-screen navigation inside Employee Module.

Flow:

```
Employee List
      ↓
Employee Details
      ↓
Add Employee
```

Example:

```tsx
navigation.navigate('EmployeeDetails', {
  employeeId: 1,
});
```

---

# 📦 Passing Parameters

Typed using TypeScript.

```ts
export type EmployeeStackParamList = {
  EmployeeList: undefined;

  EmployeeDetails: {
    employeeId: number;
  };

  AddEmployee: undefined;
};
```

Navigation:

```tsx
navigation.navigate('EmployeeDetails', {
    employeeId: employee.id,
});
```

Receiving:

```tsx
const { employeeId } = route.params;
```

---

# ✅ Concepts Learned

## Navigation as State

Unlike React.js websites, React Native navigation does **not** use URLs.

Instead, React Navigation stores the navigation history in JavaScript state.

Example Stack:

```
Employee List

↓

Employee Details

↓

Add Employee
```

Pressing Back removes the current screen from the stack.

---

## Stack Navigator

A Stack Navigator behaves like a stack data structure.

```
push()

Employee List

↓

Employee Details

↓

Add Employee
```

```
pop()

Employee List

↓

Employee Details
```

Used when screens depend on previous screens.

Examples:

- Login → OTP → Home
- Products → Product Details
- Employee List → Details

---

## Bottom Tab Navigator

A Bottom Tab Navigator switches between independent sections.

```
Dashboard

Employees

Profile
```

Switching tabs does not push new screens onto the stack.

Used for:

- Home
- Search
- Notifications
- Profile

---

## Drawer Navigator

A Drawer Navigator provides a side menu.

Example:

```
☰

Home

Settings
```

It is generally used for global navigation.

---

# 💡 Learning Section

During this task I learned:

- How React Navigation works internally
- Difference between Stack, Tab and Drawer navigators
- Navigation is maintained as JavaScript state
- How nested navigators work
- How parent navigators expose methods such as `openDrawer()`
- Passing typed parameters using TypeScript
- Creating reusable navigation files
- Organizing navigation into multiple navigators
- Using `NavigationContainer`
- Difference between navigating, pushing and going back

---

# 📝 Concept Check

## 1. How does navigation state in React Native differ from URL-based routing on the web?

### React Native

- Navigation is stored in JavaScript state.
- There is no browser URL.
- Screens are pushed and popped from memory.
- Back navigation is handled by React Navigation.

### React.js (Web)

- The URL represents the current page.
- Browser history controls navigation.
- Refreshing the page loads the URL again.

---

## 2. When would you choose a Tab Navigator over a Stack Navigator?

### Use Bottom Tabs when:

- Switching between independent sections.
- Home
- Profile
- Search
- Settings

Users can move freely between tabs.

---

### Use Stack Navigator when:

Screens follow a sequence.

Examples:

- Login → OTP → Dashboard
- Employee List → Details
- Products → Product Details

Each new screen is pushed onto the stack.

---

# 🛠 Technologies Used

- React Native
- React Navigation
- TypeScript
- Native Stack Navigator
- Bottom Tab Navigator
- Drawer Navigator

---

# 🎯 Deliverables Completed

- ✅ Stack Navigator
- ✅ Bottom Tab Navigator
- ✅ Drawer Navigator
- ✅ Nested Navigation
- ✅ Typed Navigation (TypeScript)
- ✅ Passing Parameters
- ✅ 3+ Working Screens
- ✅ Employee Management Demo App

---

# 📚 Key Takeaways

This project helped me understand how React Navigation manages application state using nested navigators. I learned when to use Stack, Bottom Tabs, and Drawer navigation, how to organize navigation into separate files, and how TypeScript improves navigation safety by providing typed routes and parameters.