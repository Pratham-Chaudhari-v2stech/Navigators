# Redux-Saga & Side Effects

## 📌 Overview

Day 20 focuses on **Redux-Saga and handling side effects** in a React Native application.

Redux is primarily responsible for managing application state, while asynchronous operations such as API calls, retries, timers, cancellation, and other side effects require additional handling.

In this project, Redux-Saga is used to handle an asynchronous API request for fetching users.

---

## 🎯 Learning Objectives

- Understand why Redux-Saga is used for side effects.
- Understand JavaScript generator functions.
- Understand how `yield` works in a Saga.
- Learn the purpose of Saga effects:

  - `call`
  - `put`
  - `takeLatest`

- Configure Redux-Saga middleware.
- Handle an asynchronous API request using Saga.
- Manage loading, success, and error states.
- Understand how `takeLatest` helps prevent stale results and race-condition-related bugs.
- Compare Redux-Saga with Redux Toolkit's async/await approach.

---

## 🛠️ Technologies Used

- React Native
- TypeScript
- Redux Toolkit
- Redux-Saga
- React Redux
- Axios
- DummyJSON API

---

## 📂 Project Structure

```text
src/
├── api/
│   └── userApi.ts
│
├── redux/
│   ├── store.ts
│   ├── rootSaga.ts
│   │
│   └── users/
│       ├── userSlice.ts
│       └── userSaga.ts
│
├── screens/
│   └── UserSearchScreen.tsx
│
└── types/
    └── user.ts

App.tsx
```

---

## 🔄 Application Flow

The application follows this flow:

```text
User presses "Fetch Users"
          ↓
UserSearchScreen
          ↓
dispatch(fetchUsersRequest())
          ↓
Redux Action
          ↓
takeLatest()
          ↓
fetchUsersSaga()
          ↓
call(fetchUsersApi)
          ↓
Axios API Request
          ↓
     API Response
       ↙       ↘
   Success     Failure
      ↓           ↓
put(success)  put(failure)
      ↓           ↓
     Redux Reducer
          ↓
     Redux State
          ↓
        UI
```

---

## ⚙️ Redux State

The users feature maintains three important pieces of state:

```ts
{
  users: [],
  loading: false,
  error: null
}
```

### Loading

When the request starts:

```ts
loading: true;
```

### Success

When the API request succeeds:

```ts
users: [...]
loading: false
```

### Failure

When the API request fails:

```ts
error: 'Failed to fetch users';
loading: false;
```

---

## 🔹 Saga Effects

### `call`

`call` is used to execute a function or API request.

```ts
const users = yield call(fetchUsersApi);
```

The Saga middleware executes the API function and waits for its result before continuing.

---

### `put`

`put` is used to dispatch a Redux action from a Saga.

```ts
yield put(fetchUsersSuccess(users));
```

Conceptually, this is similar to:

```ts
dispatch(fetchUsersSuccess(users));
```

The action is then handled by the Redux reducer.

---

### `takeLatest`

`takeLatest` listens for a specific action and runs the latest Saga task.

```ts
yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
```

If a new matching action is dispatched while a previous Saga task is still running, the previous Saga task is cancelled and the latest one is handled.

This is particularly useful for:

- Search-as-you-type
- Autocomplete
- Repeated requests
- Refresh operations
- Requests where only the latest result matters

---

## 🧠 Why Redux-Saga?

Redux Toolkit with `async/await` or `createAsyncThunk` is often sufficient for straightforward API requests.

Redux-Saga becomes useful when asynchronous workflows become more complex.

For example:

```text
API Request
    ↓
Retry
    ↓
Timeout
    ↓
Cancel
    ↓
Another API Request
    ↓
Update Redux State
```

Saga provides effects and control mechanisms that make these workflows easier to organize and test.

Examples include:

- Request cancellation
- Retries
- Concurrent operations
- Sequential API calls
- Race conditions
- Listening for Redux actions
- Complex asynchronous workflows

---

## 🔍 Redux-Saga vs Async/Await

### Redux Toolkit + Async/Await

For a simple API request:

```text
dispatch
   ↓
async function
   ↓
API
   ↓
success/failure
   ↓
Redux state
```

This is simple and usually sufficient.

### Redux-Saga

For more complex workflows:

```text
dispatch
   ↓
Saga
   ↓
API
   ↓
retry / cancel / wait / race
   ↓
another operation
   ↓
Redux action
   ↓
state
```

Saga provides more explicit control over these asynchronous workflows.

---

## ❓ Concept Check

### 1. What problem does Redux-Saga solve that plain Redux Toolkit + async/await doesn't handle as cleanly?

Redux-Saga provides structured management of complex asynchronous side effects.

Redux Toolkit with `async/await` can handle normal API requests very well, but Saga provides additional mechanisms for:

- Cancellation
- Retries
- Concurrency
- Sequencing
- Race handling
- Listening for actions
- Complex asynchronous workflows

Therefore, Redux-Saga is particularly useful when asynchronous logic becomes complicated.

---

### 2. What does `takeLatest` protect against?

`takeLatest` helps prevent problems caused by multiple overlapping requests where an older request may finish after a newer request and incorrectly update the application state.

For example:

```text
User searches:

"r"
"re"
"rea"
"react"
```

Without appropriate handling, an older request could finish after the latest request:

```text
"react" request
      ↓
latest result

"rea" request
      ↓
older result arrives later
      ↓
could overwrite the latest result
```

`takeLatest` ensures that the latest matching Saga task is the one that remains active.

---

## Day 20 Deliverable

The completed deliverable is a **React Native user-fetching feature handled through Redux-Saga**.

The feature demonstrates:

- Redux Toolkit state management
- Redux-Saga middleware
- Generator functions
- `yield`
- `call`
- `put`
- `takeLatest`
- Axios API integration
- Loading state
- Success state
- Error state
- Redux state updates
- UI updates based on Redux state
