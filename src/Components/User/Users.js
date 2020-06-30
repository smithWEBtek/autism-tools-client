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

  render() {
    const renderedUsers = this.state.users.map((user, index) => {
      return <User user={user} key={index} />;
    });

    return this.state.visible ? (
      <div>{renderedUsers}</div>
    ) : (
      <h3>Users page</h3>
    );
  }
}

export default Users;
