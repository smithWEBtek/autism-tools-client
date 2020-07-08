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

  componentWillMount() {
    // this.props.onFetchTeachers()
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  // handleTeacherSelect = (event) => {
  //   this.setState({
  //     teacher_id: this.props.teachers.find(teacher => teacher.lastname === event.target.value).id
  //   })
  // }

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
    // const teacherOptions = this.props.teachers.map(teacher => {
    //   return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    // })

    return (
      <div>
        <p>Complete form and click 'Add Board'</p>
        <form onSubmit={this.handleSubmit}>
          <p><label htmlFor="student_name">First name </label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="firstname"
              required />
          </p>
          <p><label>Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="lastname"
              required />
          </p>
          <p><label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="email"
              required />
          </p>
          <p><label>Level</label>
            <input
              type="text"
              name="level"
              value={this.state.level}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="level"
              required />
          </p>
          {/* <p><label>Select Teacher</label>
            <select
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleTeacherSelect(event)}>
              {teacherOptions}
            </select>
          </p> */}
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
