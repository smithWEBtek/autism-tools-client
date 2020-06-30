import React from "react";
import Tag from "./Tag";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      tags: [],
    };
  }

  componentDidMount() {
    fetch("https://api.autism-tools.org/api/v1/tags")
      .then((response) => response.json())
      .then((tags) => this.setState({ tags: tags }));
  }

  showTags = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedTags;
    if (this.state.visible) {
      renderedTags = this.state.tags.map((tag, index) => {
        return <Tag tag={tag} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showTags}>Tags</button>
        </h2>
        <p>Fun | Boring | Stressful | Happy | Singing | Dancing | New | Old</p>
        {renderedTags}
      </div>
    );
  }
}

export default Tags;
