import React, { useEffect, useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Header from '../components/UI/Header';
import { MainContext } from './../context/MainProvider';
import { getUserByLogin } from './../server/api';
import { IUser } from './../types/IUser';

function Root() {
  const { signIn } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const userLogin = localStorage.getItem('user_login');

    if (userLogin) {
      getUserByLogin(userLogin).then((data: IUser | undefined) => {
        signIn?.(data);
        navigate('/tickets');
        setIsLoading(false);
      });
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <>
      <Header key="header" />
      <Navigation />
      <div className="container m-auto px-[20px] py-[40px]">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
