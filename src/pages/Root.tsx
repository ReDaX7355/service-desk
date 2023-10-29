import React, { useEffect, useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/UI/Header';
import { MainContext } from './../context/MainProvider';
import { getUserByLogin } from './../server/api';
import { IUser } from './../types/IUser';

function Root() {
  const { signIn } = useContext(MainContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const login = localStorage.getItem('user_login');

    if (login) {
      getUserByLogin(login).then((data: IUser | undefined) => {
        signIn?.(data);
        navigate('/tickets');
        setLoading(false);
      });
    }
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <>
          <Header />
          <div className="container m-auto px-[20px] py-[50px]">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export default Root;
