import React from "react";
import "./Document.scss";
const Document = (props) => {
  return (
    <div key={props.index} className="document-card">
      <h4>
        {props.document.name}: {props.document.description}
      </h4>
    </div>
  );
};

export default Document;
