import React from "react";
import "./Playlist.scss";
const Playlist = (props) => {
  return (
    <div key={props.index} className="playlist-card">
      <h4>
        {props.playlist.name}: {props.playlist.description}
      </h4>
    </div>
  );
};

export default Playlist;
