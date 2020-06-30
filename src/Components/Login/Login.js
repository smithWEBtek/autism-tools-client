import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div>
      <h3>Login page</h3>
      <form>
        <p>
          <input type="text" value="Enter username"></input>
        </p>
        <p>
          <input type="text" value="Enter email"></input>
        </p>
        <p>
          <input type="text" value="Enter password"></input>
        </p>
        <p>
          <button type="cancel" className="button-cancel">
            cancel
          </button>
          <button type="submit" className="button-submit">
            submit
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
