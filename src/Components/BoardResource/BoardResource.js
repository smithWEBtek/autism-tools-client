import React from 'react';

const BoardResource = (props) => {
  return (
    <div className="boardResource">
      <h3>{props.boardResource.resource.name}</h3>
      <p>{props.boardResource.resource.description}</p>
    </div>
  )
}

export default BoardResource;
