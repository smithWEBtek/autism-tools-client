import React from "react";
import "./App.css";
import MainNav from "./UI/MainNav/MainNav";

import Users from "./Components/User/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        autism-tools.org
        <MainNav />
        <Users />
      </header>
    </div>
  );
}

export default App;
