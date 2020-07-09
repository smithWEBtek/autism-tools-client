import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index'

import { Container } from 'reactstrap'
import Modal from '../../UI/Modal/Modal'
// import Board from './Board/Board'
import CreateBoard from './CreateBoard/CreateBoard'
import EditBoard from './EditBoard/EditBoard'
import BoardsList from './BoardsList/BoardsList'

class Boards extends Component {
  state = {
    board: '',
    showBoard: false,
    createBoard: false,
    editBoard: false
  }

  componentDidMount() {
    this.props.onFetchBoards();
  }

  //********SHOW_BOARD form handling**************************
  showBoardClose = () => {
    this.setState({ showBoard: false })
  }

  //********CREATE_BOARD form handling **************************
  createBoardForm = () => {
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

    const { boards } = this.props;

    return (
      <Container>
        <hr />

        {/*********CREATE BOARD MODAL********************************************/}
        <button onClick={this.createBoardForm}>Add Board</button>
        <Modal
          show={this.state.createBoard}
          modalClosed={this.createBoardFormCancel}>
          <CreateBoard
            createBoard={(newBoardData) => this.createBoard(newBoardData)}
            createBoardCancel={this.createBoardFormCancel} />
        </Modal>

        {/**********EDIT BOARD MODAL**********************************************/}
        <Modal
          show={this.state.editBoard}
          modalClosed={this.closeEditBoardForm}>
          {this.state.board ? <EditBoard
            board_id={this.state.board.id}
            close={() => this.closeEditBoardForm()}
          /> : null}
        </Modal>

        {/**********BOARDS LIST**********************************************/}
        <div>
          <Switch>
            {/* <Route path={`${match.url}/:id/edit`} exact component={EditBoard} /> */}
            {/* <Route path={`${match.url}/new`} exact component={CreateBoard} /> */}
            {/* <Route path={`${match.url}/:id`} exact component={Board} /> */}
            <Route path={Location.href} exact />
          </Switch>
        </div>
        <div>
          <div><h5 className="IndexHeaderBackground">ALL boards</h5>
            <BoardsList
              boards={boards}
              edit={(id) => this.showEditBoardForm(id)}
              deleteBoard={(id) => this.deleteBoard(id)} />
          </div>
        </div>
      </Container >
    )
  }
};

const mapStateToProps = state => {
  return {
    boards: state.boards.boards
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
