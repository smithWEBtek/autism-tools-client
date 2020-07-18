import React from "react";
import Diet from "./Diet/Diet";
const API_URL = process.env.REACT_APP_API_URL

class Diets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      diets: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/diets`)
      .then((response) => response.json())
      .then((diets) => this.setState({ diets: diets }));
  }

  showDiets = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedDiets;
    if (this.state.visible) {
      renderedDiets = this.state.diets.map((diet, index) => {
        return <Diet diet={diet} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showDiets}>Diets</button>
        </h2>
        <p>Diets | Meals | Recipes | Rules</p>
        {renderedDiets}
      </div>
    );
  }
}

export default Diets;
