import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../r.jpg';
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand fs-2 fw-bold" href="#"><img src={logo} width="75" height="75" className="rounded-circle"/>Razia Sultana</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" className="navHover nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" className="navHover nav-link" >About Me</Link>
        </li>
        <li class="nav-item">
          <Link to="/projects" className="navHover nav-link" >Projects</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" className="navHover nav-link" >Contact Me</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav> 
        </div>
    );
};

export default Header;