import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainContext } from './../../../context/MainProvider';
import AuthService from '../../../services/AuthService';

const Menu = () => {
  const { state, signOut } = useContext(MainContext);

  const navigate = useNavigate();

  const signOutHandler = () => {
    AuthService.logoutUser();
    signOut?.();
    navigate('/');
  };

  return (
    <nav>
      <ul className="flex items-center gap-7">
        {state?.auth ? (
          <>
            <li>
              <p className="text-white">{state.userData?.login}</p>
            </li>
            <li>
              <p onClick={() => signOutHandler()} className="button-invert">
                Выход
              </p>
            </li>
          </>
        ) : (
          <li>
            <Link to="auth" className="button-invert">
              Вход / Регистрация
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
