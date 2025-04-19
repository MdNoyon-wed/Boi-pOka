import React from 'react';
import Navber from '../heaber/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;