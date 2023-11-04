import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu/Menu';
import { MainContext } from './../../context/MainProvider';

const Header = () => {
  const { state } = useContext(MainContext);

  return (
    <header className="bg-primary py-5 shadow-md">
      <div className="container m-auto px-5">
        <div className="flex items-center justify-between">
          <Link
            to={state?.auth ? '/tickets' : '/'}
            className="text-3xl font-bold italic text-white"
          >
            SD
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
