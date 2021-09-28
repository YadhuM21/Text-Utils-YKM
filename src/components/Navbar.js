import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import React, { useState } from 'react'


export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${(props.mode==='light' ? 'light': 'black')} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color: props.mode==='light'?"black":"white"}} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={{color: props.mode==='light'?"black":"white"}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: props.mode==='light'?"black":"white"}} to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className="mx-2">
          <button className="btn btn-danger mx-1" data-toggle="modal" data-target="#loginModal">Login</button>
          <button className="btn btn-primary mx-1" data-toggle="modal" data-target="#signupModal">SignUp</button>
      </div>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}>
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.btnName}
          </label>
        </div>
    </div>
  </div>
</nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About'
};
