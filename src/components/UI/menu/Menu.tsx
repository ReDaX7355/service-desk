import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-7">
        <li>
          <Link
            to="auth"
            className="rounded bg-primary px-3 py-2 text-sm text-white  transition hover:bg-primary-hover"
          >
            Вход / Регистрация
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
