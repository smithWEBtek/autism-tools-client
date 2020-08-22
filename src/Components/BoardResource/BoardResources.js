import React, { Component } from 'react';

class BoardResources extends Component {
  state = {
    boardResources: [],
    board: null
  }

  componentDidMount = () => {
    // getBoardResources()
    console.log('[BoardResources] componentDidMount')
  }

  render() {
    return (
      <div>
        <p>All BoardResources</p>
      </div>
    )
  }
}

export default BoardResources;
