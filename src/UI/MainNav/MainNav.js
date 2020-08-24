import React from "react";
import { Route, Link } from "react-router-dom";
import "./MainNav.scss";

import { Toolbar, Button, Typography } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'green',
    color: props => props.color,
    fontsize: '30px',
    marginRight: '2px'
  },
});

const MainNav = () => {
  return (
    <Toolbar variant="dense" className="navbar">
      <Route>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/login">
            <Typography variant="title" color='primary'>
              login
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small" className={useStyles.backgroundColor}>
          <Link to="/users">
            <Typography variant="title" color='primary'>
              users
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/events">
            <Typography variant="title" color='primary'>
              events
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/diets">
            <Typography variant="title" color='primary'>
              diets
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/treatments">
            <Typography variant="title" color='primary'>
              treatments
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/documents">
            <Typography variant="title" color='primary'>
              docs
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/resources">
            <Typography variant="title" color='primary'>
              resources
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/boards">
            <Typography variant="title" color='primary'>
              boards
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/playlists">
            <Typography variant="title" color='primary'>
              playlists
            </Typography>
          </Link>
        </Button>
        <Button className="navButton" variant="contained" size="small">
          <Link to="/tags">
            <Typography variant="title" color='primary'>
              tags
            </Typography>
          </Link>
        </Button>
      </Route>
    </Toolbar>
  );
};

export default MainNav;
