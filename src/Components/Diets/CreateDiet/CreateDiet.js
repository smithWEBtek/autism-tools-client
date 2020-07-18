import React, { Component } from 'react';
import './CreateBoard.scss'

class CreateBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }
  }

  componentDidMount() {
    // this.props.onFetchTeachers()
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newBoardData = this.state;
    this.props.createBoard(newBoardData)
    this.setState({
      name: '',
      description: ''
    });
    this.props.createBoardCancel()
  }

  render() {
    return (
      <div>
        <p>Complete form and click 'Add Board'</p>
        <form onSubmit={this.handleSubmit}>
          <p><label htmlFor="student_name">name </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="name"
              required />
          </p>
          <p><label>description </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="description"
              required />
          </p>

          <button
            type="button"
            onClick={this.props.createBoardCancel}
            className="Danger"
          >CANCEL</button>
          <button className="Success"
          >CREATE Board</button>
        </form>
      </div>
    )
  }
}

export default CreateBoard;
