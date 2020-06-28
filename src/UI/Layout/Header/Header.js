import React from "react";
import "./Header.scss";
import Logo from "../../Assets/atools.svg";
import MainNav from "../MainNav/MainNav";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={Logo} alt="autism-tools-logo" />
        <h2 className="header__title">autism-tools.org</h2>
      </div>
      <MainNav />
    </>
  );
};

export default Header;
