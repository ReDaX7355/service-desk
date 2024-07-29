import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from './../context/MainProvider';

const Navigation = () => {
  const { state } = useContext(MainContext);

  if (!state?.auth) return null;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-5">
        <ul className="flex gap-4">
          {state.userData?.role === 'support' && (
            <>
              <li>
                <NavLink
                  to="/tickets"
                  className={({ isActive }) =>
                    [isActive ? 'nav-link-active' : 'nav-link'].join(' ')
                  }
                >
                  Открытые заявки
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search_tickets"
                  className={({ isActive }) =>
                    [isActive ? 'nav-link-active' : 'nav-link'].join(' ')
                  }
                >
                  Поиск по заявкам
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                [isActive ? 'nav-link-active' : 'nav-link'].join(' ')
              }
            >
              Профиль
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
