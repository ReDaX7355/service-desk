import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu/Menu';

const Header = () => {
  return (
    <header className="bg-white py-5 shadow-md">
      <div className="container m-auto px-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold italic text-primary">
            SD
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
