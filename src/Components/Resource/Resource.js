import React from "react";
import "./Resource.scss";
const Resource = (props) => {
  return (
    <div key={props.index} className="resource-card">
      <h4>
        {props.resource.name}: {props.resource.description}
      </h4>
    </div>
  );
};

export default Resource;
