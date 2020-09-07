import React from "react";
import { Route, Link } from "react-router-dom";
import "./MainNav.scss";

import { Toolbar, Button, Typography } from '@material-ui/core';
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
        <Button variant="contained" size="small">
          <Link to="/login">
            <Typography variant="subtitle1" color='primary'>
              login
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small" className={useStyles.backgroundColor}>
          <Link to="/users">
            <Typography variant="subtitle1" color='primary'>
              users
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/events">
            <Typography variant="subtitle1" color='primary'>
              events
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/diets">
            <Typography variant="subtitle1" color='primary'>
              diets
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/treatments">
            <Typography variant="subtitle1" color='primary'>
              treatments
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/documents">
            <Typography variant="subtitle1" color='primary'>
              docs
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/resources">
            <Typography variant="subtitle1" color='primary'>
              resources
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/boards">
            <Typography variant="subtitle1" color='primary'>
              boards
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/playlists">
            <Typography variant="subtitle1" color='primary'>
              playlists
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link to="/tags">
            <Typography variant="subtitle1" color='primary'>
              tags
            </Typography>
          </Link>
        </Button>
      </Route>
    </Toolbar>
  );
};

export default MainNav;
