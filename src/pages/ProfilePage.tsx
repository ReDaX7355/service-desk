import React, { useContext } from 'react';
import { MainContext } from '../context/MainProvider';

const ProfilePage = () => {
  const { state } = useContext(MainContext);

  return (
    <div>
      <p>{state?.user?.full_name}</p>
      <p>{state?.user?.email}</p>
      <p>{state?.user?.login}</p>
      <p>{state?.user?.role}</p>
    </div>
  );
};

export default ProfilePage;
