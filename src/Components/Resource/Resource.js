import React from "react";
import "./Resource.scss";
const Resource = (props) => {
  return (
    <div key={props.index} className="resource-card">
      <h3>{props.resource.name}</h3>
      <p>{props.resource.description}</p>
    </div>
  );
};

export default Resource;
