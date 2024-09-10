import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  age: yup.number()
    .required("Age is required")
    .min(18, 'Age must be greater than 18'),
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  number: yup.string().required('Number is required')
    .min(9, 'Number must include at least 9 digits'),
    adress: yup.string().required('Address is required'),
});