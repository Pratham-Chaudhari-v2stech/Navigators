# Day 22 — Advanced Forms & Feedback

A React Native practice project demonstrating **advanced form handling, schema validation, OTP input, navigation, and toast-based feedback**.

This project was created as part of my React Native training plan for **Day 22 — Advanced Forms & Feedback**.

---

## 📚 What I Learned

This project focuses on replacing manually managed form state with reusable tools and patterns that are more suitable for larger React Native applications.

### ▸ React Hook Form

`react-hook-form` manages form state and input handling without requiring separate `useState` variables and change handlers for every field.

Instead of manually managing:

```tsx
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
```

and writing separate validation and change-handling logic, React Hook Form provides utilities such as:

* `useForm`
* `Controller`
* `handleSubmit`
* `formState`
* `errors`
* `reset`

It also helps reduce unnecessary re-renders, which becomes more useful as forms become larger.

---

### ▸ Yup Schema Validation

`yup` allows validation rules to be defined in a separate schema instead of writing manual `if` conditions throughout the component.

For example:

```tsx
const loginSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});
```

The Yup schema is connected to React Hook Form using `yupResolver`.

This keeps the validation logic separate, reusable, and easier to maintain.

---

### ▸ OTP Input

The project uses `react-native-confirmation-code-field` to create an OTP verification screen.

The OTP screen demonstrates:

* Multiple OTP input cells
* OTP value handling
* OTP validation
* Automatic input/focus behavior
* Verification feedback

---

### ▸ Toast Notifications

The project uses `react-native-flash-message` for displaying success and error messages.

Examples include:

```text
Success → Login successful
Success → OTP verified successfully
Error   → Invalid OTP
Error   → Please fix the validation errors
```

Toast notifications are useful for short, non-blocking feedback because they don't interrupt the user's interaction with the application like `Alert.alert()` does.

---

## 🚀 Features

### 🔐 Login Screen

The login screen demonstrates:

* Email input
* Password input
* React Hook Form
* Yup validation
* Form submission
* Validation error messages
* Navigation to the OTP screen

---

### 🔢 OTP Screen

The OTP screen demonstrates:

* OTP input using `react-native-confirmation-code-field`
* OTP validation using Yup
* OTP submission
* Success/error toast messages
* Navigation to the success screen

---

### ✅ Success Screen

The success screen provides a final confirmation after successful OTP verification.

The flow is:

```text
Login Screen
     │
     ▼
Validate Login Form
     │
     ▼
   OTP Screen
     │
     ▼
Validate OTP
     │
     ▼
 Success Screen
```

---

## 🗂️ Project Structure

```text
src/
│
├── components/
│   ├── CustomButton.tsx
│   └── CustomInput.tsx
│
├── navigation/
│   └── AppNavigator.tsx
│
├── screens/
│   ├── LoginScreen.tsx
│   ├── OTPScreen.tsx
│   └── SuccessScreen.tsx
│
├── types/
│   └── auth.types.ts
│
├── utils/
│   └── toast.ts
│
└── validation/
    ├── loginSchema.ts
    └── otpSchema.ts
│
├── App.tsx
└── README.md
```

## 🛠️ Technologies & Libraries

* React Native
* TypeScript
* React Navigation
* React Hook Form
* Yup
* `@hookform/resolvers`
* `react-native-confirmation-code-field`
* `react-native-flash-message`

---

## 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Run the application on Android:

```bash
npx react-native run-android
```

---

## 🧪 Day 22 Hands-On Practice

### 1. Rebuild the Form

The original Day 4 form was rebuilt using:

* React Hook Form
* Yup
* `yupResolver`
* Reusable `CustomInput`
* Reusable `CustomButton`

---

### 2. Build an OTP Screen

Created an OTP verification screen using:

```text
react-native-confirmation-code-field
```

The OTP is validated using a dedicated Yup schema:

```text
validation/
└── otpSchema.ts
```

---

### 3. Add Toast Feedback

Created a reusable toast utility:

```text
utils/
└── toast.ts
```

This allows success and error feedback to be triggered without repeatedly writing the flash-message configuration inside each screen.

---

## 💡 Concept Check

### What does React Hook Form save you from doing manually?

React Hook Form saves you from manually managing form state and validation for every individual input.

Without it, you might need:

```text
useState for each input
        ↓
onChangeText handlers
        ↓
individual error states
        ↓
manual validation
        ↓
manual form submission
        ↓
manual reset logic
```

With React Hook Form:

```text
useForm()
   ↓
register / Controller
   ↓
handleSubmit()
   ↓
validation
   ↓
formState.errors
```

This results in cleaner and more maintainable forms, especially when a form contains many fields.

---

### Why is a toast usually better UX than `Alert.alert()` for confirmations?

A toast is usually better for simple confirmations because it is:

* **Non-blocking**
* **Temporary**
* **Less disruptive**
* **Quick to understand**
* **Doesn't require the user to dismiss a popup**

For example:

```text
✓ Login successful
```

can appear briefly while the user continues using the application.

`Alert.alert()` is more appropriate when the user needs to explicitly acknowledge something or make a decision.

---

## 🎯 Key Takeaways

Through this project, I learned how to:

* Build forms using React Hook Form
* Manage form state without multiple `useState` variables
* Create reusable Yup validation schemas
* Connect Yup with React Hook Form using `yupResolver`
* Create reusable form components
* Build an OTP verification screen
* Validate OTP input
* Create reusable toast utilities
* Provide non-blocking success and error feedback
* Organize a React Native project into reusable folders
* Connect multiple screens using React Navigation

---