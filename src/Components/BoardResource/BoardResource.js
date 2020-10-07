import React from 'react';

const BoardResource = (props) => {
  const hrefRegex = new RegExp('https');
  let href = 'non link'
  if (props.boardResource.resource.location.match(hrefRegex)) {
    href = props.boardResource.resource.location
  }
  console.log('href: ', href)
  return (
    <div className="boardResource">
      <h3>{props.boardResource.resource.name}</h3>
      <p>{props.boardResource.resource.description}</p>
      <a href={props.boardResource.resource.location}>LINK</a>
      <p>lorem</p>
    </div>
  )
}

export default BoardResource;
