import React, { useEffect, useState } from 'react'
import 'animate.css';

const Navbar = () => {
  return (
    <section >
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent mx-5" id="navbar-2">
          <div className="container-fluid">
            <a className="navbar-brand" id="logo" href="#">Mahalaxmi Borewell</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav navbar-nav-drop">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">ABOUT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">GALLERY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">TESTIMONIALS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div >
    </section>
  )
}

export default Navbar






