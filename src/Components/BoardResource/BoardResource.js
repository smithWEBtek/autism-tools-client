import React from 'react';

const BoardResource = (props) => {
  console.log('[BoardResource]')

  return (
    <div>
      <p>*******************************</p>
      <h3>A Single BoardResource: ${props.boardResource}</h3>
      <p>*******************************</p>
    </div>
  )
}

export default BoardResource;
