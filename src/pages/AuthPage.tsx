import React from 'react';
import FormAuth from './../components/Forms/FormAuth';

const AuthPage = () => {
  return (
    <div className="container">
      <div className="mx-auto max-w-lg rounded border border-gray-100 bg-white px-12 py-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] sm:p-12">
        <FormAuth />
      </div>
    </div>
  );
};

export default AuthPage;
