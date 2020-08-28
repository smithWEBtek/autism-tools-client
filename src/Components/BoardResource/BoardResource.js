import React from 'react';

const BoardResource = (props) => {
  console.log('[BoardResource]')

  return (
    <div className="boardResource">
      <h3>{props.boardResource.name}</h3>
      <p>{props.boardResource.description}</p>
    </div>
  )
}

export default BoardResource;
