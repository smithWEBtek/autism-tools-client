import React from "react";
import Event from "./Event";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      events: [],
    };
  }

  componentDidMount() {
    fetch("https://api.autism-tools.org/api/v1/events")
      .then((response) => response.json())
      .then((events) => this.setState({ events: events }));
  }

  showEvents = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedEvents;
    if (this.state.visible) {
      renderedEvents = this.state.events.map((event, index) => {
        return <Event event={event} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showEvents}>Events</button>
        </h2>
        <div>
          <p>Events | Today | Week | Month | Qtr | Year</p>
        </div>
        {renderedEvents}
      </div>
    );
  }
}

export default Events;
