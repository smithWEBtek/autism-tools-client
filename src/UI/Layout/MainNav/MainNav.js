import React from "react";
import "./MainNav.scss";

const MainNav = () => {
  return (
    <div className="navbar">
      <div className="navbar__link">
        <p className="navbar__link--text">login</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">user</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">calendar</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">diet</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">treatment</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">doc</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">resource</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">board</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">playlist</p>
      </div>
      <div className="navbar__link">
        <p className="navbar__link--text">tags</p>
      </div>
    </div>
  );
};

export default MainNav;
