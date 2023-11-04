import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainContext } from './../../../context/MainProvider';

const Menu = () => {
  const { state, signOut } = useContext(MainContext);

  const navigate = useNavigate();

  const signOutHandler = () => {
    signOut?.();
    navigate('/');
  };

  return (
    <nav>
      <ul className="flex items-center gap-7">
        {state?.auth ? (
          <>
            <li>
              <p className="text-white">{state.user?.full_name}</p>
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
