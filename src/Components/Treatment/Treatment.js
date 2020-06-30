import React from "react";
import "./Treatment.scss";
const Treatment = (props) => {
  return (
    <div key={props.index} className="treatment-card">
      <h4>
        {props.treatment.name}: {props.treatment.description}
      </h4>
    </div>
  );
};

export default Treatment;
