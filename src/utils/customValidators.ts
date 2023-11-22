import { string } from 'yup';

export const emailZHAW = string()
  .required('Required')
  .matches(/^(.+)@(zhaw\.ch|students\.zhaw\.ch)$/, 'No valid E-Mail address');

export const password = string()
  .required('Required')
  .min(8, 'Password must have at least 8 characters')
  .matches(/[0-9]/, 'Password must contain at least 1 number')
  .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
  .matches(
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/,
    'Password must contain at least one special character'
  )
  .max(20, 'Max password length is 20');
