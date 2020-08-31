import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom';
import BoardResource from '../BoardResource/BoardResource';

import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/BoardResourceActions'

import './BoardResource.scss'

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

  //********SHOW_BOARD handling*****************
  showBoardResourceClose = () => {
    this.setState({ showBoardResource: false, boardResource: null })
  }

  showBoardResource = (id) => {
    const boardResource = this.props.boardResources.filter(boardResource => boardResource.id === id)[0]
    this.setState({
      showBoardResource: true,
      boardResource: boardResource
    })
  }

  render() {
    const renderBoardResources = this.props.boardResources.map(boardResource => {
      return (
        <BoardResource
          key={boardResource.id}
          className='board-resource'
          boardResource={boardResource}
          show={() => this.showBoardResource}
          close={() => this.showBoardResourceClose}
        />
      )
    })

    return (
      <div>
        <h2>All BoardResources</h2>
        <div>
          {renderBoardResources}
        </div>
        {/**********BOARD_RESOURCE show **************************/}
        {this.state.board ? <BoardResource
          boardResource={this.state.boardResource}
          close={() => this.showBoardResourceClose()}
        /> : null}
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
