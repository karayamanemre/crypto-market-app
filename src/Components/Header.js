import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';

const NavBar = ({ set }) => {
  return (
    <header className="bg-gray-800 text-white flex justify-center items-center p-2 shadow">
      <div className="flex items-center">
        <NavLink to="/" onClick={() => set('home')}>
          <img src={logo} alt="logo" className="h-20 mx-auto" />
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
