import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';

function Root() {
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
