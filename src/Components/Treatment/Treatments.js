import React from "react";
import Treatment from "./Treatment";

class Treatments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      treatments: [],
    };
  }

  componentDidMount() {
    fetch("https://api.autism-tools.org/api/v1/treatments")
      .then((response) => response.json())
      .then((treatments) => this.setState({ treatments: treatments }));
  }

  showTreatments = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedTreatments;
    if (this.state.visible) {
      renderedTreatments = this.state.treatments.map((treatment, index) => {
        return <Treatment treatment={treatment} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showTreatments}>Treatments</button>
        </h2>
        <p>Medications | Supplements</p>
        {renderedTreatments}
      </div>
    );
  }
}

export default Treatments;
