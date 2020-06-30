import React from "react";
import User from "./User";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://api.autism-tools.org/api/v1/users")
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
        <p>Images | Videos | Links | Games | Audio</p>
        {renderedUsers}
      </div>
    );
  }
}

export default Users;
