import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.scss';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>Registration Successful!</h1>
      <p>Thank you for registering. You can now explore our services.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default SuccessPage;
