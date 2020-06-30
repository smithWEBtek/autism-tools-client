import React from "react";
import "./Medication.scss";
const Medication = (props) => {
  return (
    <div key={props.index} className="medication-card">
      <h4>
        {props.medication.name}: {props.medication.description}
      </h4>
    </div>
  );
};

export default Medication;
