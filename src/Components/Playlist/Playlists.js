import React from "react";
import Playlist from "./Playlist";

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      playlists: [],
    };
  }

  componentDidMount() {
    fetch("https://api.autism-tools.org/api/v1/playlists")
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
