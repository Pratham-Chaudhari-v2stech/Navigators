# Testing Basics (Jest & React Native Testing Library)

## Overview

This project demonstrates the basics of unit testing in a React Native application using **Jest** and **React Native Testing Library**. The focus of this assignment is to understand how to write and execute tests for application logic instead of manually verifying behavior every time changes are made.

As the deliverable, a unit test suite was written for a custom `useDebounce` hook to verify its behavior under different scenarios.

---

## Objectives

* Understand the purpose of unit testing.
* Learn the fundamentals of Jest.
* Learn the basics of React Native Testing Library.
* Write and execute the first passing unit test.
* Verify hook behavior using fake timers.

---

## Technologies Used

* React Native
* TypeScript
* Jest
* React Native Testing Library

---

## Deliverable

A unit test suite was created for the custom `useDebounce` hook.

### Files

```text
src/
└── hooks/
    ├── useDebounce.ts
    └── useDebounce.test.ts
```

---

## What Was Tested

### 1. Initial Value

Verified that the hook immediately returns the initial value passed to it.

**Expected Result**

```text
Input: "Hello"

↓

Output: "Hello"
```

---

### 2. Debounced Update

Verified that the hook updates its value only after the specified delay.

**Flow**

```text
Initial Value

↓

Hello

↓

Value changes to World

↓

Wait 500ms

↓

Hook updates

↓

Result = World
```

---

### 3. Timer Cleanup

Verified that when the value changes before the delay completes, the previous timer is cancelled and only the latest value is applied.

**Flow**

```text
A

↓

B

↓

300ms

↓

C

↓

Old timer cancelled

↓

500ms

↓

Result = C
```

---

## Test Execution

Run all tests:

```bash
npm test
```

Run only the debounce test:

```bash
npx jest src/hooks/useDebounce.test.ts
```

---

## Key Testing Concepts Learned

### Jest

* `describe()` groups related test cases.
* `test()` defines an individual test scenario.
* `expect()` verifies the expected output.
* Fake timers allow testing asynchronous code without waiting in real time.

### React Native Testing Library

* `renderHook()` renders a custom hook in a test environment.
* `rerender()` simulates the hook receiving updated values.
* `result.current` provides the hook's latest returned value.
* `act()` ensures React processes state updates before assertions are made.

---

# Learnings

During this assignment, I learned:

* Understood the purpose and importance of unit testing in React Native.
* Learned how Jest is used to write and execute automated tests.
* Learned the difference between testing logic and manually verifying application behavior.
* Understood how `describe()`, `test()`, and `expect()` work together to structure test cases.
* Learned how `renderHook()` allows custom React hooks to be tested without creating a component.
* Learned that `result.current` always contains the latest value returned by a hook.
* Understood how `rerender()` simulates new props or updated values.
* Learned why `act()` is required when a hook updates React state.
* Learned how fake timers (`jest.useFakeTimers()`) make timer-based code deterministic and fast to test.
* Understood how `jest.advanceTimersByTime()` simulates the passage of time instantly.
* Learned how cleanup functions (`clearTimeout`) prevent stale timers from updating state.
* Gained a clear understanding of how a debounce hook delays updates until the user stops changing the input.
* Successfully wrote and executed the first passing unit tests for a custom React hook.

---

## Outcome

This assignment provided a practical introduction to testing in React Native. It demonstrated how to verify hook behavior using Jest and React Native Testing Library, laying the foundation for testing more complex components and application features in future assignments.
