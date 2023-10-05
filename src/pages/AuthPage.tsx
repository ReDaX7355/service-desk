import React from 'react';
import FormSignIn from '../components/Form/FormSignIn';

const AuthPage = () => {
  return (
    <div className="container">
      <h2 className="text-lg">Авторизация</h2>
      <FormSignIn />
    </div>
  );
};

export default AuthPage;
