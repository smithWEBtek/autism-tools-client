import React from "react";
import "./MainNav.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="navbar">
      <Router>
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
          <Link to="/calendar" className="navbar__link--text">
            calendar
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/diet" className="navbar__link--text">
            diet
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/treatment" className="navbar__link--text">
            treatment
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/doc" className="navbar__link--text">
            doc
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/resource" className="navbar__link--text">
            resource
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/board" className="navbar__link--text">
            board
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/playlist" className="navbar__link--text">
            playlist
          </Link>
        </div>
        <div className="navbar__link">
          <Link to="/tags" className="navbar__link--text">
            tags
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default MainNav;
