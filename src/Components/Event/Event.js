import React from "react";
import "./Event.scss";
const Event = (props) => {
  return (
    <div key={props.index} className="event-card">
      <h4>
        {props.event.name}: {props.event.description}
      </h4>
    </div>
  );
};

export default Event;
