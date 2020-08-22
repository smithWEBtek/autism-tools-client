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
        <p>*******************************</p>
        <h1>The list of BoardResources for `${this.props.board.name}`</h1>
        <p>*******************************</p>
      </div>
    )
  }
}

export default BoardResources;
