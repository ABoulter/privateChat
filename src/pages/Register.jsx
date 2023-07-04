import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mini Chat</span>
        <span className="title">Register</span>
        <form>
          <input
            type="text"
            placeholder="Display name"
            aria-label="Display name"
          />
          <input type="email" placeholder="email" aria-label="Email" />
          <input type="password" placeholder="password" aria-label="Password" />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            aria-label="Upload File"
          />
          <label htmlFor="file">
            <img src={Add} alt="Add an Avatar" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you already have an account? Click here to Login</p>
      </div>
    </div>
  );
};

export default Register;
