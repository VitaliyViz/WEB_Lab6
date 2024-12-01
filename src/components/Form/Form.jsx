import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import "./Form.scss";

const FormError = ({ errors }) => {
  return (
    <div className="form-errors">
      {Object.entries(errors).map(([key, message]) => (
        <p key={key}>{message}</p>
      ))}
    </div>
  );
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is a required field')
    .min(2, 'First name must be at least 2 characters')
    .matches(/^[a-zA-Zа-яА-ЯіїєґҐ'’ ]+$/, "Name may contain only English and Ukrainian letters"),
  lastName: Yup.string()
    .required('Last name is a required field')
    .max(20, 'Last name must be less than 20 characters'),
  email: Yup.string()
    .email('Email is incorrect')
    .required('Email is a required field'),
  phoneNumber: Yup.string()
    .required('Phone number is a required field')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];    
    const updatedUsers = [...storedUsers, values];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    console.log('User Registered:', values);
    navigate('/success');
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="registration-form">
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field name="phoneNumber" type="text" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Register</button>

          {Object.keys(errors).length > 0 && touched && <FormError errors={errors} />}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
