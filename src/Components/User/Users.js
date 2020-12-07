import React from "react";
import User from "./User";

const API_URL = process.env.REACT_APP_API_URL

class Users extends React.Component {
  state = {
    visible: false,
    users: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  showUsers = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedUsers;
    if (this.state.visible) {
      renderedUsers = this.state.users.map((user, index) => {
        return <User user={user} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showUsers}>Users</button>
        </h2>
        <p>User Profile | Caregiver Instructions</p>
        {renderedUsers}
      </div>
    );
  }
}

export default Users;
