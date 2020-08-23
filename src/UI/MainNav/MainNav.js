import React from "react";
import { Route, Link } from "react-router-dom";
import "./MainNav.scss";

import { Toolbar, Button } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography';

const MainNav = () => {
  return (
    <Toolbar variant="dense" >
      <Route>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/login">
            login
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/users">
            users
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/events">
            events
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/diets">
            diets
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/treatments">
            treatments
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/documents">
            docs
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/resources">
            resources
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/boards">
            boards
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/playlists">
            playlists
          </Link>
        </Button>
        <Button variant="outlined" color="primary" size="small">
          <Link to="/tags">
            tags
          </Link>
        </Button>
      </Route>
    </Toolbar>
  );
};

export default MainNav;
