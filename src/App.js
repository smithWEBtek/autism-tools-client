import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.scss";
import MainHeader from "./UI/MainHeader/MainHeader";
import MainNav from "./UI/MainNav/MainNav";
import Login from "./Components/Login/Login";
import Users from "./Components/User/Users";
import Events from "./Components/Event/Events";
import Diets from "./Components/Diets/Diets";
import Treatments from "./Components/Treatment/Treatments";
import Documents from "./Components/Document/Documents";
import Resources from "./Components/Resource/Resources";
import Playlists from "./Components/Playlist/Playlists";
import Boards from "./Components/Boards/Boards";
import Tags from "./Components/Tag/Tags";

class App extends React.Component {
  render() {
    console.log("process.env.REACT_APP_API_URL: ", process.env.REACT_APP_API_URL)
    return (
      <Router>
        <div>
          <MainHeader />
          <MainNav />
          <div className="maincanvas">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/diets">
                <Diets />
              </Route>
              <Route path="/treatments">
                <Treatments />
              </Route>
              <Route path="/documents">
                <Documents />
              </Route>
              <Route path="/resources">
                <Resources />
              </Route>
              <Route path="/boards">
                <Boards />
              </Route>
              <Route path="/playlists">
                <Playlists />
              </Route>
              <Route path="/tags">
                <Tags />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
