import React from "react";
import Playlist from "./Playlist";

const API_URL = process.env.REACT_APP_API_URL

class Playlists extends React.Component {
  state = {
    visible: false,
    playlists: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/playlists`)
      .then((response) => response.json())
      .then((playlists) => this.setState({ playlists: playlists }));
  }

  showPlaylists = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedPlaylists;
    if (this.state.visible) {
      renderedPlaylists = this.state.playlists.map((playlist, index) => {
        return <Playlist playlist={playlist} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showPlaylists}>Playlists</button>
        </h2>
        <p>Audio | Video</p>
        {renderedPlaylists}
      </div>
    );
  }
}

export default Playlists;
