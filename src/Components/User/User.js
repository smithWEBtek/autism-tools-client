import React from "react";
import "./User.css";
const User = (props) => {
  return (
    <div key={props.index} className="user-card">
      <h4>
        {props.user.username}: {props.user.email}
      </h4>
    </div>
  );
};

export default User;
