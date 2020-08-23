import React from 'react';
import Button from '@material-ui/core/Button'

const BoardResource = (props) => {
  console.log('[BoardResource]')

  return (
    <div>
      <p>*******************************</p>
      <h3>A Single BoardResource: ${props.boardResource}</h3>
      <Button>Material UI</Button>
      <p>*******************************</p>
    </div>
  )
}

export default BoardResource;
