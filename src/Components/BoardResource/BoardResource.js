import React from 'react';
import Iframe from 'react-iframe'

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
      <Iframe
        title={props.boardResource.resource.name}
        width="560"
        height="315"
        src={href}
        frameborder="0"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </div>
  )
}

export default BoardResource;
