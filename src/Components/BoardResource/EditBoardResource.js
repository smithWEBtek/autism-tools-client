import React, { Component } from 'react';
import './EditBoard.scss';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/BoardActions'

class EditBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boardResource: '',
      id: '',
      name: '',
      description: '',
      close: null
    }
  }

  componentDidMount() {
    let boardResource = this.state.boardResource
    if (this.props.boardResource_id) {
      boardResource = this.props.boardResources.find(brd => brd.id === this.props.boardResource_id)
      this.setState({
        boardResource: boardResource,
        close: this.props.close
      })
    } else {
      boardResource = this.props.boardResources.find(brd => brd.id === +this.props.match.params.id)
      this.setState({ boardResource: boardResource })
    }

    this.setState({
      id: boardResource.id,
      name: boardResource.name,
      description: boardResource.description
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
          <p><label htmlFor="boardResource_name">First name </label>
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
    boardResources: state.brd.boardResources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateBoard: (data, history) => dispatch(actions.updateBoard(data, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBoard)
