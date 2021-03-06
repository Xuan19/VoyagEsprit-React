import React from 'react';
import './header.scss';
import logo from 'src/assets/logo.png';

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" />
    {/* <h1 className="page-title">VoyagEsprit</h1> */}
  </div>
);

// eslint-disable-next-line eol-last
export default Header;