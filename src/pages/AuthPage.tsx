import React, { useState } from 'react';
import FormSignIn from '../components/Forms/FormSignIn';
import FormSignUp from '../components/Forms/FormSignUp';

const AuthPage = () => {
  const [signUp, setSignUp] = useState(false);

  const hundleChangeForm = (): void => {
    setSignUp((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="mx-auto max-w-lg rounded border border-gray-100 p-12 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)]">
        <h3 className="text-center text-xl font-bold">
          {signUp ? 'Регистрация' : 'Вход'}
        </h3>
        {signUp ? (
          <FormSignUp hundleChangeForm={hundleChangeForm} />
        ) : (
          <FormSignIn hundleChangeForm={hundleChangeForm} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
