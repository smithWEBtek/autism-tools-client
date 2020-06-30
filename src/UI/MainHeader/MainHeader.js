import React from "react";
import "./MainHeader.scss";
import Logo from "../Assets/atools.svg";

const MainHeader = () => {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={Logo} alt="autism-tools-logo" />
        <h2 className="header__title">autism-tools.org</h2>
      </div>
    </>
  );
};

export default MainHeader;
