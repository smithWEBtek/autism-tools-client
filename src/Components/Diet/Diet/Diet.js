import React from "react";
import "./Diet.scss";

const Diet = (props) => {
  return (
    <div key={props.index} className="diet-card">
      <h4>
        {props.diet.name}: {props.diet.description}
      </h4>
    </div>
  );
};

export default Diet;
