import React, { Component } from 'react';
import './EditBoard.scss';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/BoardActions'

class EditBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: '',
      id: '',
      name: '',
      description: '',
      close: null
    }
  }

  componentDidMount() {
    let board = this.state.board
    if (this.props.board_id) {
      board = this.props.boards.find(brd => brd.id === this.props.board_id)
      this.setState({
        board: board,
        close: this.props.close
      })
    } else {
      board = this.props.boards.find(brd => brd.id === +this.props.match.params.id)
      this.setState({ board: board })
    }

    this.setState({
      id: board.id,
      name: board.name,
      description: board.description
    })
  }

  toggleActiveSelect = () => {
    let toggle = this.state.active
    this.setState({ active: !toggle })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
  }

  handleCancel = () => {
    if (this.state.close) {
      this.props.close()
    } else {
      this.props.history.goBack()
    }
  }

  handleSubmit = (e) => {
    let { history } = this.props
    let data = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description
    }
    this.props.onUpdateBoard(data, history)
    if (this.state.close) {
      this.props.close()
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p className="FormInstructions">Edit form and click 'Update Board'</p>
        <form className="Form">
          <p><label htmlFor="board_name">First name </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            /></p>
          <p><label>Last name </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            /></p>
          <button
            type="button"
            name="cancel"
            onClick={this.handleCancel}
            className="Danger"
          >CANCEL</button>
          <button
            type='button'
            className="Success"
            onClick={(e) => this.handleSubmit(e)}
          >SAVE</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boards: state.brd.boards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateBoard: (data, history) => dispatch(actions.updateBoard(data, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBoard)
