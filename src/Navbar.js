import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import './navbar.css'

function Navbar() {
  return (
    <div className="header">
   <nav className="navclass">
    <div className="logo">
      LOGO
    </div>
    <div className="navlist">
    <ol className="navlistchild"><li ><a href="/#about">About</a></li><li ><a href="/#jobs">Experience</a></li><li><a href="/#projects">Work</a></li><li><a href="/#contact">Contact</a></li><li><div className='buttonresume'>
            <a href="https://github.com/nayanCode" role="button" class="btn btn-outline-info p-2 w-100">Resume</a>
            </div></li></ol>
    </div>
    </nav>
    </div>
  );
}

export default Navbar;
