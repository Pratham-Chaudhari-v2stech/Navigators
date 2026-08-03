# Internationalization (i18n) & Accessibility

## 📌 Overview

This project demonstrates how to build a React Native application that supports multiple languages using **react-i18next** and implements basic **accessibility** features for users who rely on assistive technologies such as TalkBack (Android) and VoiceOver (iOS).

The application includes a simple Login screen where users can switch between **English** and **Hindi** at runtime without restarting the application. It also demonstrates the use of accessibility labels and roles to improve usability.

---

## 🚀 Features

* 🌐 Internationalization using **react-i18next**
* 🇮🇳 English and Hindi language support
* 🔄 Runtime language switching
* 📄 Translation files using JSON
* ♿ Basic Accessibility support
* 🏷️ accessibilityLabel for inputs and buttons
* 🎯 accessibilityRole for buttons and headers
* 🧩 Reusable UI Components
* 🧭 React Navigation integration
* 📱 Built with React Native CLI + TypeScript

---

## 📂 Folder Structure

```text
Day18-I18n-Accessibility/
│
├── android/
├── ios/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── CustomButton.tsx
│   │   ├── CustomInput.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ScreenHeader.tsx
│   │
│   ├── constants/
│   │   ├── Colors.ts
│   │   └── Fonts.ts
│   │
│   ├── i18n/
│   │   └── index.ts
│   │
│   ├── locales/
│   │   ├── en.json
│   │   └── hi.json
│   │
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   └── navigationTypes.ts
│   │
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   └── LoginScreen.styles.ts
│   │
│   ├── utils/
│   │   ├── accessibility.ts
│   │   └── helpers.ts
│   │
│   └── App.tsx
│
├── index.js
├── app.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 📱 Screen

### Login Screen

* Welcome Header
* Email Input
* Password Input
* Forgot Password
* Login Button
* Language Switcher (English / Hindi)

---

## 🌍 Internationalization

This project uses **react-i18next** to provide multilingual support.

### Supported Languages

* 🇺🇸 English
* 🇮🇳 Hindi

Language can be switched at runtime using the Language Switcher component.

Translations are stored inside:

```text
src/locales/
├── en.json
└── hi.json
```

Example:

```json
{
  "login": "Login"
}
```

```json
{
  "login": "लॉगिन"
}
```

Instead of hardcoding text, components use translation keys:

```tsx
t('login')
```

---

## ♿ Accessibility

The following accessibility features were implemented:

* accessibilityLabel
* accessibilityRole
* accessibilityHint
* Header accessibility role
* Button accessibility role
* Accessible TextInput fields

Examples:

```tsx
accessibilityLabel="Email Input"
```

```tsx
accessibilityRole="button"
```

These improvements help screen readers describe UI elements correctly.

---

## 🛠️ Technologies Used

* React Native CLI
* TypeScript
* React Navigation
* i18next
* react-i18next
* react-native-localize

---

## ▶️ Installation

```bash
npm install
```

Install i18n packages:

```bash
npm install react-i18next i18next react-native-localize
```

Run Android:

```bash
npx react-native run-android
```

---


## 📚 Learnings

During this project, I learned:

* How internationalization (i18n) works in React Native.
* How to configure **react-i18next** and initialize translation resources.
* Why translation keys should be used instead of hardcoded strings.
* How runtime language switching works using `i18n.changeLanguage()`.
* How translation files are organized using JSON.
* The purpose of `react-native-localize` for detecting the device language.
* The importance of designing applications for multiple languages from the beginning.
* How accessibility improves usability for users relying on screen readers.
* How to use `accessibilityLabel`, `accessibilityRole`, and `accessibilityHint`.
* How to create reusable UI components such as buttons, inputs, and language switchers.
* How separating constants, utilities, translations, and components makes a project easier to maintain.
* Why reusable components reduce code duplication and improve scalability.
* The importance of organizing React Native projects using a clean folder structure.

---

## 🧠 Concept Check

### Why is RTL (Right-to-Left) support a layout concern and not just a translation concern?

RTL languages such as Arabic and Hebrew require the entire layout to be mirrored. Navigation, icons, alignment, paddings, margins, text alignment, and row directions often need to change. Simply translating the text is not enough because the overall user interface must also adapt to the reading direction.

### What breaks if text is hardcoded instead of using translation keys?

Hardcoded text makes it difficult to support multiple languages because every screen must be edited manually. It also increases maintenance effort, makes translations error-prone, and prevents runtime language switching. Using translation keys allows the application to change languages without modifying the UI code.

---

## 🔮 Future Improvements

* Support additional languages
* Add RTL language support (Arabic/Hebrew)
* Persist selected language using AsyncStorage
* Add form validation
* Implement Dark Mode
* Improve accessibility with dynamic font scaling
* Fetch translations remotely from an API or localization service

---
