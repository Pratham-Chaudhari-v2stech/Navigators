import * as yup from 'yup';

export const loginSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Name is required'),

  email: yup
    .string()
    .trim()
    .email('Please enter a valid email')
    .required('Email is required'),

  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});