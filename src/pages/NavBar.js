
import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
function NavBar() {
  return (
    <>

    <nav class="navbar bg-dark rounded-0 p-1 navbar-expand-lg sticky-top bg-opacity-75">
  <div class="container-fluid">
  <h6 class="m-2"><Link to="/" className="custom"><img src="logo.png" class="card-img-top imgs-top" alt="..."/>&nbsp;Personal Portfolio</Link></h6>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-theme="dark" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ps-4">
        <a class="nav-link"><Link to="/" className="custom-link"><i class="fa-solid fa-house"></i> &nbsp;Home</Link></a>
        </li>
        <li class="nav-item ps-4">
           <a class="nav-link"><Link to="/skills" className="custom-link"><i class="fa-solid fa-code"></i> &nbsp;Skills</Link></a>
        </li>
       
        <li class="nav-item dropdown ps-4 ">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Link to="/projects" className="custom-link"><i class="fa-brands fa-github"></i> &nbsp;Projects</Link>
          </a>
          <ul class="dropdown-menu bg-dark bg-opacity-75 text-light border-start border-2 rounded-0">
          <a class="nav-link"><Link to="/design" className="custom-link">  &nbsp;UI/UX Design</Link></a>
          <a class="nav-link"><Link to="/django" className="custom-link">  &nbsp;Django Projects</Link></a>
          <a class="nav-link"><Link to="/react" className="custom-link">  &nbsp;React.js Projects</Link></a>
          </ul>
        </li>
        <li class="nav-item ps-4">
           <a class="nav-link"><Link to="/experience" className="custom-link"><i class="fa-solid fa-briefcase"></i> &nbsp;Experience</Link></a>
        </li>
        <li class="nav-item ps-4">
           <a class="nav-link"><Link to="/education" className="custom-link"><i class="fa-brands fa-google-scholar"></i> &nbsp;Education</Link></a>
        </li>
        <li class="nav-item ps-4">
           <a class="nav-link"><Link to="/contact" className="custom-link"><i class="fa-solid fa-message"></i> &nbsp;Contact Me</Link></a>
        </li>
        <li class="nav-item ps-4">
           <a class="nav-link"><Link to="/about" className="custom-link"><i class="fa-solid fa-circle-info"></i> &nbsp;About Me</Link></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar;
