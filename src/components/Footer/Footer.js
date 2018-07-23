import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

export const Footer = () => {
  return (
      <footer className="container">
        <ul className="row valign-wrapper center-align">
          <li className="col s2">
            <i className="material-icons small">menu</i>
          </li>
          <li className="col s8">
            <Link
              to="/add"
              className="btn-floating btn-large pulse pink accent-2">
              <i className="material-icons add">add</i>
            </Link>
          </li>
          <li className="col s2">
            <i className="material-icons small">brightness_3</i>
          </li>
        </ul>
      </footer>
  );
};
