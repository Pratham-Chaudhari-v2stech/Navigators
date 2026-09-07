# Secure Approval POC

A React Native CLI proof-of-concept demonstrating a **secure customer approval flow** using:

* 🔐 Biometric Authentication
* ✍️ Digital Signature Capture
* 📋 Approval Summary
* 📦 Mock Approval Payload
* 🧭 React Navigation
* 🔷 TypeScript

This project is intended as a learning POC to understand how native device capabilities such as biometrics and signature capture can be integrated into a React Native application.

---

## 1. Project Overview

The application simulates a customer approval process.

The user first views customer information, then verifies their identity using biometric authentication, provides a digital signature, reviews the approval information, and finally confirms the approval.

### Approval Flow

```text
Customer Details
       ↓
Biometric Verification
       ↓
Digital Signature
       ↓
Approval Summary
       ↓
Confirm Approval
       ↓
Success Screen
```

---

## 2. Features

### 🔐 Biometric Verification

The application uses:

```text
react-native-simple-biometrics
```

to authenticate the user using the device's available biometric authentication mechanism.

Depending on the device, this could be:

* Fingerprint
* Face authentication
* Other supported biometric authentication

The application first checks whether biometric authentication is available.

```ts
const canAuthenticate =
  await SimpleBiometrics.canAuthenticate();
```

Then it requests authentication:

```ts
const result = await SimpleBiometrics.requestBioAuth(
  'Customer Approval',
  'Authenticate to approve the customer',
);
```

The approval flow continues only when authentication succeeds.

---

### ✍️ Digital Signature

The application uses:

```text
react-native-signature-capture
```

to provide a signature pad.

The user can:

* Draw a signature
* Clear the signature
* Confirm the signature

The captured signature is returned as an encoded value.

```ts
const handleSignature = (result: {
  encoded: string;
}) => {
  onSignatureCaptured(result.encoded);
};
```

The signature is stored in React state.

---

### 📋 Approval Summary

After biometric verification and signature capture, the application displays:

* Customer name
* Approval amount
* Biometric verification status
* Captured signature

Example:

```text
Approval Summary

Customer: Rahul Sharma
Amount: ₹50000
Biometric: ✓ Verified

Signature:
[ Captured Signature ]

[ Confirm Approval ]
```

---

### 📦 Mock Approval Payload

When the user confirms the approval, the application creates a payload similar to what would eventually be sent to a backend API.

Example:

```json
{
  "customerId": "CUS001",
  "customerName": "Rahul Sharma",
  "amount": 50000,
  "biometricVerified": true,
  "signature": "BASE64_SIGNATURE_DATA",
  "approvedAt": "2026-09-07T..."
}
```

Currently, this payload is only logged to the console.

There is no backend integration in this POC.

---

## 3. Technologies Used

| Technology                     | Purpose                            |
| ------------------------------ | ---------------------------------- |
| React Native CLI               | Mobile application framework       |
| TypeScript                     | Type-safe development              |
| React Navigation               | Screen navigation                  |
| react-native-simple-biometrics | Biometric authentication           |
| react-native-signature-capture | Digital signature                  |
| React Hooks                    | State management                   |
| Android/iOS Native APIs        | Device authentication capabilities |

---

## 4. Project Structure

```text
SecureApproval/
│
├── android/
├── ios/
│
├── src/
│   │
│   ├── components/
│   │   ├── ApprovalSummary.tsx
│   │   └── SignaturePad.tsx
│   │
│   ├── navigation/
│   │   └── AppNavigation.tsx
│   │
│   ├── screens/
│   │   ├── ApprovalScreen.tsx
│   │   └── SuccessScreen.tsx
│   │
│   ├── services/
│   │   └── biometricService.ts
│   │
│   ├── types/
│   │   └── approval.ts
│   │
│   └── utils/
│       └── approvalPayload.ts
│
├── App.tsx
├── package.json
└── tsconfig.json
```

---

## 5. Folder Responsibilities

### `components/`

Contains reusable UI components.

#### `SignaturePad.tsx`

Responsible for:

* Rendering the signature area
* Saving the signature
* Clearing the signature
* Returning the captured signature to the parent component

#### `ApprovalSummary.tsx`

Responsible for displaying the final approval information.

---

### `navigation/`

Contains application navigation.

#### `AppNavigation.tsx`

Defines the navigation stack:

```text
Approval
   ↓
Success
```

The navigation parameter list is typed using TypeScript:

```ts
export type RootStackParamList = {
  Approval: undefined;
  Success: undefined;
};
```

This gives type safety when navigating between screens.

---

### `screens/`

Contains complete application screens.

#### `ApprovalScreen.tsx`

This is the main screen.

It controls the approval flow:

```text
Customer Details
       ↓
Biometric Verification
       ↓
Signature
       ↓
Approval Summary
       ↓
Confirm Approval
```

#### `SuccessScreen.tsx`

Displayed after successful approval.

It shows:

```text
✓ Approval Successful

✓ Biometric Verified
✓ Signature Captured

[ Done ]
```

---

### `services/`

Contains logic that interacts with native/device functionality.

#### `biometricService.ts`

Keeps biometric logic separate from the UI.

Instead of calling the biometric library directly inside the screen, the screen calls:

```ts
authenticateWithBiometrics();
```

This separation makes the code easier to maintain and test.

---

### `types/`

Contains TypeScript types/interfaces.

#### `approval.ts`

Defines the approval data structure:

```ts
export interface ApprovalData {
  customerId: string;
  customerName: string;
  amount: number;
  biometricVerified: boolean;
  signature: string | null;
  approvedAt: string | null;
}
```

---

### `utils/`

Contains helper functions.

#### `approvalPayload.ts`

Creates the final approval payload:

```ts
createApprovalPayload({
  customerId,
  customerName,
  amount,
  biometricVerified,
  signature,
});
```

It also generates the approval timestamp:

```ts
approvedAt: new Date().toISOString()
```

---

## 6. Installation

Create a React Native CLI project:

```bash
npx @react-native-community/cli init SecureApproval
```

Move into the project:

```bash
cd SecureApproval
```

---

## 7. Install Dependencies

### React Navigation

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

Install the required native dependencies:

```bash
npm install react-native-screens react-native-safe-area-context
```

---

### Biometric Authentication

```bash
npm install react-native-simple-biometrics
```

---

### Digital Signature

```bash
npm install react-native-signature-capture
```

---

## 8. Android Setup

After installing native dependencies, clean the Android build:

```bash
cd android
./gradlew clean
cd ..
```

Then rebuild:

```bash
npx react-native run-android
```

For a physical Android device, make sure:

```bash
adb devices
```

shows the device.

---

## 9. iOS Setup

On macOS, install iOS dependencies:

```bash
cd ios
pod install
cd ..
```

Then run:

```bash
npx react-native run-ios
```

> iOS development/building requires macOS with Xcode.

---

## 10. Biometric Flow

The biometric service performs two main operations.

### Step 1 — Check availability

```ts
const canAuthenticate =
  await SimpleBiometrics.canAuthenticate();
```

This determines whether biometric authentication can be used.

### Step 2 — Request authentication

```ts
const result =
  await SimpleBiometrics.requestBioAuth(
    'Customer Approval',
    'Authenticate to approve the customer',
  );
```

If authentication succeeds:

```ts
setBiometricVerified(true);
```

The signature step is then displayed.

---

## 11. Signature Flow

The `SignaturePad` component creates a signature capture view.

When the user confirms the signature:

```ts
signatureRef.current?.saveImage();
```

The library triggers the save callback:

```ts
onSaveEvent={handleSignature}
```

The encoded signature is then returned:

```ts
onSignatureCaptured(result.encoded);
```

The parent screen stores it:

```ts
setSignature(capturedSignature);
```

---

## 12. Approval Validation

Before approval is submitted, two conditions must be satisfied.

### Biometric must be verified

```ts
if (!biometricVerified) {
  Alert.alert(
    'Biometric Required',
    'Please complete biometric verification first.',
  );

  return;
}
```

### Signature must exist

```ts
if (!signature) {
  Alert.alert(
    'Signature Required',
    'Please provide your signature first.',
  );

  return;
}
```

Only after both checks pass is the approval payload created.

---

## 13. Mock Backend Payload

The POC currently does not communicate with a backend.

Instead, it creates a mock payload:

```ts
const payload = createApprovalPayload({
  customerId,
  customerName,
  amount,
  biometricVerified,
  signature,
});
```

The payload is logged:

```ts
console.log(
  JSON.stringify(payload, null, 2),
);
```

In a real application this could later be replaced with an API call:

```ts
await axios.post(
  '/approval',
  payload,
);
```

---

## 14. Important Concept

### Biometric Data Is NOT Sent to the Backend

The application does not receive or store the user's actual fingerprint or face data.

The biometric system is handled by the operating system.

The application receives a result such as:

```text
Authentication successful
```

or:

```text
Authentication failed
```

Therefore, the backend would normally receive an application-level verification result rather than the user's raw biometric information.

---

## 15. State Management

The main approval screen maintains three pieces of state:

```ts
const [biometricVerified, setBiometricVerified] =
  useState(false);

const [signature, setSignature] =
  useState<string | null>(null);

const [showSignaturePad, setShowSignaturePad] =
  useState(false);
```

### `biometricVerified`

Tracks whether biometric authentication succeeded.

```text
false → Authentication not completed
true  → Authentication successful
```

### `signature`

Stores the captured signature.

```text
null → No signature
string → Signature captured
```

### `showSignaturePad`

Controls whether the signature component is visible.

```text
false → Hide signature pad
true  → Show signature pad
```

---

## 16. Navigation Flow

React Navigation manages two screens:

```text
┌──────────────────────┐
│   Approval Screen    │
└──────────┬───────────┘
           │
           │ Confirm Approval
           ↓
┌──────────────────────┐
│   Success Screen     │
└──────────────────────┘
```

Navigation is type-safe because the application defines:

```ts
export type RootStackParamList = {
  Approval: undefined;
  Success: undefined;
};
```

Then:

```ts
navigation.navigate('Success');
```

TypeScript verifies that `Success` is a valid screen.

---

## 17. Learning Objectives

This POC helps demonstrate several important React Native concepts.

### React Native

* Components
* Props
* State
* Hooks
* Conditional rendering
* Styles
* Native modules

### TypeScript

* Interfaces
* Union types
* Generic React Navigation types
* Function parameter types
* Return types

### React Navigation

* Native Stack Navigator
* Navigation props
* Typed navigation
* Screen configuration

### Native Features

* Biometric authentication
* Signature capture
* Android/iOS native integration

### Application Architecture

* Components
* Screens
* Services
* Utilities
* Types

---

## 18. Future Improvements

This POC can later be extended with:

* Backend API integration
* Authentication/token handling
* Customer API
* Real approval API
* Loading indicators
* Error handling
* Network error handling
* Redux/Zustand state management
* Secure local storage
* Approval history
* Multiple customers
* Dynamic customer data
* Digital signature upload
* Server-side signature verification
* Audit logging
* Approval status tracking

---

## 19. Production Considerations

This project is a **POC** and should not be considered production-ready.

A production implementation should additionally consider:

* Secure API communication using HTTPS
* Authentication and authorization
* Secure token storage
* Server-side validation
* Proper error handling
* Signature integrity
* Audit trails
* Replay protection
* Device security
* Biometric authentication policies
* Backend verification of approval state

---

## 20. Summary

The Secure Approval POC demonstrates a simple but realistic mobile approval workflow:

```text
Customer Details
       ↓
Check Biometric Availability
       ↓
Biometric Authentication
       ↓
Capture Digital Signature
       ↓
Display Approval Summary
       ↓
Validate Approval
       ↓
Create Approval Payload
       ↓
Navigate to Success
```

The main architectural idea is to keep responsibilities separated:

```text
Screen
  ↓
Service / Component / Utility
  ↓
Native Library
```

This makes the application easier to understand, maintain, test, and extend with a real backend in the future.
