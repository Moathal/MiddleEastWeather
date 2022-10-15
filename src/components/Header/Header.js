import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import favicon from '../../assets/favicon.png';
import back from '../../assets/backIcon.ico.png';
import './Header.css';

function Header() {
  const location = useLocation();
  return (
    <div className="header-container">
      <Link className={location.pathname === '/' ? 'hidden' : 'show'} to="/" current={location.pathname}>
        <img className="backIcon" src={back} alt="back arrow" />
      </Link>
      <div className="website-identifier">
        <img className="logo" src={favicon} alt="logo" />
        <h1>MEWeather</h1>
      </div>
    </div>
  );
}

export default Header;
