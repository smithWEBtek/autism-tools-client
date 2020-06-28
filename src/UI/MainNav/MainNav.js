import React from "react";
import "./MainNav.scss";

const MainNav = () => {
  return (
    <div className="navbar">
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">login</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">user</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">calendar</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">diet</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">treatment</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">doc</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">resource</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">board</p>
      </div>
      <div className="navbar__navlink">
        <p className="navbar__navlink--text">playlist</p>
      </div>
    </div>
  );
};

export default MainNav;
