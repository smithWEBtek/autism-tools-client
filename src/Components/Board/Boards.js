import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/BoardActions'

import './Boards.scss'
import Modal from '../../UI/Modal/Modal'
import Board from './Board'
import BoardsIndex from './BoardsIndex'
import CreateBoard from './CreateBoard'
import EditBoard from './EditBoard'
import BoardResources from '../BoardResource/BoardResources'

// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography';

class Boards extends Component {
  state = {
    board: null,
    showBoard: false,
    createBoard: false,
    editBoard: false
  }

  componentDidMount() {
    this.props.onFetchBoards()
  }

  //********SHOW_BOARD handling*****************
  showBoardClose = () => {
    this.setState({ showBoard: false })
  }

  showBoard = (id) => {
    const board = this.props.boards.filter(board => board.id === id)[0]
    this.setState({
      showBoard: true,
      board: board
    })
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
    console.log('***************HISTORY', history)
    let baseUrl = window.location.host + '/boards'

    return (
      <div>
        {/*********CREATE BOARD MODAL********************/}
        {/* <Button onClick={this.createBoardFormOpen} id='add-board'>Add Board</Button> */}
        <Button onClick={this.createBoardFormOpen} >Add Board</Button>
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
              editBoard={(id) => this.showEditBoardForm(id)}
              deleteBoard={(id) => this.deleteBoard(id)}
              showBoard={(id) => this.showBoard(id)}
            />
          </div>
          <BoardResources />
        </div>

        {/**********BOARD show modal **************************/}
        <Modal
          show={this.state.showBoard}
          modalClosed={this.showBoardClose}>
          {this.state.board ? <Board
            board={this.state.board}
            close={() => this.showBoardClose()}
          /> : null}
        </Modal>

        <div>
          <Switch>
            <Route path={`${baseUrl}/:id/edit`} component={EditBoard} />
            <Route path={`${baseUrl}/new`} exact component={CreateBoard} />
            <Route path={`${baseUrl}/:id`} component={Board} />
            <Route path={baseUrl} exact component={Boards} />
          </Switch>
        </div>
      </div >
    )
  }
};

const mapStateToProps = state => {
  return {
    boards: state.brd.boards
  }
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
