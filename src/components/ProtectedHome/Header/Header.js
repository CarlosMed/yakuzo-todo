import React from 'react';
import './Header.css';
import { Circles } from './svg';

const Header = ({amount}) => {
  return (
    <header>
      <Circles />
      <h4 className="white-text">Carlos</h4>
      <p className="white-text">You have { amount } remaining tasks for today</p>
    </header>
  );
};

export default Header;
