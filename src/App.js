import React from "react";
import Layout from "./UI/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Users from "./Components/User/Users";
// import Events from "../../Components/Event/Events";
// import Diets from "../../Components/Diet/Diets";
// import Treatments from "../../Components/Treatment/Treatments";
// import Documents from "../../Components/Document/Documents";
// import Resources from "../../Components/Resource/Resources";
import Boards from "./Components/Board/Boards";
// import Playlists from "../../Components/Playlist/Playlists";
// import Tags from "../../Components/Tag/Tags";

function App() {
  return (
    <>
      <Layout />
      <Boards />
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/boards" component={Boards}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
