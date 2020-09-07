import React from 'react';
import './style.scss';
// import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
// import { Button } from '@material-ui/core';

function Header() {
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>{' '}
        <div className='calltoaction'>
          <ul>
            <li>ABOUT US</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
