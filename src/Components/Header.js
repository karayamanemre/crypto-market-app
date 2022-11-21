import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Styles/Header.module.css';
import home from '../Assets/home.png';
import mic from '../Assets/mic.png';
import settings from '../Assets/settings.png';
import logo from '../Assets/logo.png';
/* eslint-enable */
const NavBar = ({ page, set }) => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/">
          {page === 'home' ? (
            <img src={home} alt="" />
          ) : (
            <span onClick={() => set('home')}><img src={home} alt="home logo" /></span>
          )}
        </NavLink>
      </div>
      <img src={logo} alt="logo" />
      <div>
        <img src={mic} alt="microphone" />
        <img src={settings} alt="settings" />
      </div>
    </nav>
  );
};
/* eslint-disable */
export default NavBar;
