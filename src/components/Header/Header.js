import React from 'react';
import { Circles } from './svg';
import './Header.css'

export const Header = (props) => {
  const { amount } = props;
  return (
    <header>
      <Circles />
      <h4 className="white-text">Carlos</h4>
      <p className="white-text">You have { amount } remaining tasks for today</p>
    </header>
  );
};
