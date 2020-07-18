import React from "react";
import Resource from "./Resource";

const API_URL = process.env.REACT_APP_API_URL

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      resources: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/resources`)
      .then((response) => response.json())
      .then((resources) => this.setState({ resources: resources }));
  }

  showResources = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedResources;
    if (this.state.visible) {
      renderedResources = this.state.resources.map((resource, index) => {
        return <Resource resource={resource} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showResources}>Resources</button>
        </h2>
        <p>Images | Videos | Links | Games | Audio</p>
        {renderedResources}
      </div>
    );
  }
}

export default Resources;
