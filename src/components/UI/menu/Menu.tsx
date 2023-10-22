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
          <li>
            <p
              onClick={() => signOutHandler()}
              className="cursor-pointer rounded bg-primary px-3 py-2 text-sm text-white  transition hover:bg-primary"
            >
              Выход
            </p>
          </li>
        ) : (
          <li>
            <Link
              to="auth"
              className=" rounded bg-primary px-3 py-2 text-sm  text-white transition hover:bg-primary"
            >
              Вход / Регистрация
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
