import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/BoardResourceActions'

import './BoardResources.scss'

class BoardResources extends Component {
  state = {
    boardResource: null,
    showBoardResource: false,
    createBoardResource: false,
    editBoardResource: false
  }

  componentDidMount() {
    this.props.onFetchBoardResources()
  }

  render() {
    const renderBoardResources = this.props.boardResources.map(br => {
      return (
        <div key={br.id} className='board-resource'>{br.resource.name}</div>
      )
    })

    return (
      <div>
        <h2>All BoardResources</h2>
        <div>
          {renderBoardResources}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boardResources: state.brdres.boardResources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoardResources: () => dispatch(actions.fetchBoardResources())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardResources);
