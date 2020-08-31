import React from 'react';

const BoardResource = (props) => {
  console.log('[BoardResource]')

  return (
    <div className="boardResource">
      <h3>{props.boardResource.resource.name}</h3>
      <p>{props.boardResource.resource.description}</p>
    </div>
  )
}

export default BoardResource;
