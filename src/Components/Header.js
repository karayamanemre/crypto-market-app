import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Styles/Header.module.css';
import logo from '../Assets/logo.png';
/* eslint-disable */
const NavBar = ({ set }) => {
  return (
    <nav className={styles.nav}>
        <NavLink to="/">
          <img src={logo} alt="logo" onClick={() => set('home')}/>
        </NavLink>
    </nav>
  );
};
/* eslint-disable */
export default NavBar;
