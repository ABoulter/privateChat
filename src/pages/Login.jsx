import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mini Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="email" aria-label="Email" />
          <input type="password" placeholder="password" aria-label="Password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register here!</p>
      </div>
    </div>
  );
};

export default Login;
