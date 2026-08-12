import { AccessibilityRole, AccessibilityState } from 'react-native';

type AccessibilityConfig = {
  accessibilityLabel: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityHint?: string;
  accessibilityState?: AccessibilityState;
};

export const accessibility = {
  emailInput: {
    accessibilityLabel: 'Email Input',
  },

  passwordInput: {
    accessibilityLabel: 'Password Input',
  },

  loginButton: {
    accessibilityLabel: 'Login Button',
    accessibilityRole: 'button',
    accessibilityHint: 'Logs into your account',
  },

  englishButton: {
    accessibilityLabel: 'Switch language to English',
    accessibilityRole: 'button',
  },

  hindiButton: {
    accessibilityLabel: 'Switch language to Hindi',
    accessibilityRole: 'button',
  },
} satisfies Record<string, AccessibilityConfig>;
