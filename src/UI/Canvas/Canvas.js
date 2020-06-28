import React from "react";
import "./Canvas.scss";

import Users from "../../Components/User/Users";
import Events from "../../Components/Event/Events";
import Diets from "../../Components/Diet/Diets";
import Treatments from "../../Components/Treatment/Treatments";
import Documents from "../../Components/Document/Documents";
import Resources from "../../Components/Resource/Resources";
import Boards from "../../Components/Board/Boards";
import Playlists from "../../Components/Playlist/Playlists";
import Tags from "../../Components/Tag/Tags";

const Canvas = () => {
  return (
    <div className="canvas">
      <Users />
      <Events />
      <Diets />
      <Treatments />
      <Documents />
      <Resources />
      <Boards />
      <Playlists />
      <Tags />
    </div>
  );
};

export default Canvas;
