import React from "react";
import User from "./User";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3001"), { cors: "no-cors" })
    fetch("https://api.autism-tools.org")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    const renderedUsers = this.state.users.map((user, index) => {
      return <User user={user} index={index} />;
    });

    return (
      <div>
        <h1>So far so good.</h1>
        {renderedUsers}
      </div>
    );
  }
}

export default Users;
