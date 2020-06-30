import React from "react";
import "./Tag.scss";
const Tag = (props) => {
  return (
    <div key={props.index} className="tag-card">
      <h4>
        {props.tag.name}: {props.tag.description}
      </h4>
    </div>
  );
};

export default Tag;
