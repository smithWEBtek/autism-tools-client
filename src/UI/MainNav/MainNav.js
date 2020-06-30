import React from "react";
import { Route, Link } from "react-router-dom";
import "./MainNav.scss";
const MainNav = () => {
  return (
    <div className="navbar">
      <Route>
        <div className="navbar__link">
          <Link to="/login" className="navbar__link--text">
            login
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/users" className="navbar__link--text">
            users
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/events" className="navbar__link--text">
            events
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/diets" className="navbar__link--text">
            diets
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/treatments" className="navbar__link--text">
            treatments
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/documents" className="navbar__link--text">
            docs
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/resources" className="navbar__link--text">
            resources
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/boards" className="navbar__link--text">
            boards
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/playlists" className="navbar__link--text">
            playlists
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/tags" className="navbar__link--text">
            tags
          </Link>
        </div>
      </Route>
    </div>
  );
};

export default MainNav;
