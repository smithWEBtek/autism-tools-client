import React from "react";
import "./MainHeader.scss";
import Logo from "../Assets/atools.svg";
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={Logo} alt="autism-tools-logo" />
        <Link to='/'>
          <h2 className="header__title">autism-tools.org</h2>
        </Link>
      </div>
    </>
  );
};

export default MainHeader;
