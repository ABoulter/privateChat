import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Mini Chat</span>
      <div className="user">
        <img src="" alt="" />
        <span>Andrei</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
