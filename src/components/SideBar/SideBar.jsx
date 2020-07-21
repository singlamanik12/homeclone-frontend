import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, NavLink } from "react-router-dom";
export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/login">
        Login
      </a>

      <a className="menu-item" href="/signup">
        Signup
      </a>

      <a className="menu-item" href="/promotions">
        Promotions
      </a>
    </Menu>
  );
};
