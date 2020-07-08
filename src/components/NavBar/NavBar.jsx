import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          HomeClone
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Signup
            </NavLink>
            <NavLink className="nav-item nav-link" to="/postings">
              Postings
            </NavLink>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
