import React, { useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/UI/Header';
import { MainContext } from './../context/MainProvider';

function Root() {
  const { signIn } = useContext(MainContext);

  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('userName');

    if (login) {
      signIn?.(login);
      navigate('/tickets');
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container m-auto px-[20px] py-[50px]">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
