import React from "react";
import "./Supplement.scss";
const Supplement = (props) => {
  return (
    <div key={props.index} className="supplement-card">
      <h4>
        {props.supplement.name}: {props.supplement.description}
      </h4>
    </div>
  );
};

export default Supplement;
