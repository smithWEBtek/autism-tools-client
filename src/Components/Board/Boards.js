import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index'

import Modal from '../../UI/Modal/Modal'
import Board from './Board/Board'
import BoardsIndex from './BoardsIndex/BoardsIndex'
import CreateBoard from './CreateBoard/CreateBoard'
import EditBoard from './EditBoard/EditBoard'

class Boards extends Component {
  state = {
    board: '',
    showBoard: false,
    createBoard: false,
    editBoard: false
  }

  componentDidMount() {
    // console.log('[Boards][this.state.boards][componentDidMount before]: ', this.state.boards)
    this.props.onFetchBoards()
    // console.log('[Boards][this.state.boards][componentDidMount after]: ', this.state.boards)
  }

  //********SHOW_BOARD form handling**************************
  showBoard = () => {
    this.setState({ showBoard: true })
  }

  showBoardClose = () => {
    this.setState({ showBoard: false })
  }

  //********CREATE_BOARD form handling **************************
  createBoardFormOpen = () => {
    this.setState({ createBoard: true })
  }

  createBoardFormCancel = () => {
    this.setState({ createBoard: false })
  }

  createBoard = (newBoardData) => {
    const { history } = this.props

    this.props.onCreateBoard(newBoardData, history)
    this.setState({ createBoard: false })
  }

  //********EDIT_BOARD form handling**************************
  showEditBoardForm = (id) => {
    let boardData = this.props.boards.filter(board => board.id === id)[0]
    this.setState({
      board: boardData,
      editBoard: true
    })
  }

  closeEditBoardForm = () => {
    this.setState({
      editBoard: false,
      board: null
    })
  }

  //********DELETE_BOARD handling****************
  deleteBoard = (id) => {
    let { history } = this.props
    this.props.onDeleteBoard(id, history)
  }

  render() {
    let { history } = this.props
    console.log("history: ", history)
    console.log("this.props", this.props)
    return (
      <div>
        {/*********SHOW BOARD MODAL********************/}
        {/* < button onClick={this.showBoard} > Show Board</button > */}
        <Modal
          show={this.state.showBoard}
          modalClosed={this.closeShowBoard}>
          <Board
            board={(newBoardData) => this.createBoard(newBoardData)}
            createBoardCancel={this.createBoardFormCancel} />
        </Modal>

        {/*********CREATE BOARD MODAL********************/}
        <button onClick={this.createBoardFormOpen}>Add Board</button>
        <Modal
          show={this.state.createBoard}
          modalClosed={this.createBoardFormCancel}>
          <CreateBoard
            createBoard={(newBoardData) => this.createBoard(newBoardData, history)}
            createBoardCancel={this.createBoardFormCancel} />
        </Modal>

        {/**********EDIT BOARD MODAL**********************/}
        <Modal
          show={this.state.editBoard}
          modalClosed={this.closeEditBoardForm}>
          {this.state.board ? <EditBoard
            board_id={this.state.board.id}
            close={() => this.closeEditBoardForm()}
          /> : null}
        </Modal>
        {/**********BOARD Index **************************/}
        <div>
          <div><h1>BoardsIndex</h1>
            <BoardsIndex
              boards={this.props.boards}
              // showBoard={(id) => this.showBoard(id)}
              editBoard={(id) => this.showEditBoardForm(id)}
              deleteBoard={(id) => this.deleteBoard(id)}
            />
          </div>
        </div>
      </div >
    )
  }
};

const mapStateToProps = state => {
  return {
    boards: state.brd.boards
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoards: () => dispatch(actions.fetchBoards()),
    onCreateBoard: (data, history) => dispatch(actions.createBoard(data, history)),
    onUpdateBoard: (data, history) => dispatch(actions.updateBoard(data, history)),
    onDeleteBoard: (id, history) => dispatch(actions.deleteBoard(id, history))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
