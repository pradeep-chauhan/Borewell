import React, { useEffect, useState } from 'react'
import 'animate.css';
const Navbar = () => {
  return (
    <section >
      <div class="container-fluid ">
        <nav class="navbar navbar-expand-lg fixed-top bg-transparent mx-5" id="navbar-2">
          <div class="container-fluid">
            <a class="navbar-brand" id="logo" href="#">Mahalaxmi Borewell</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SERVICES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">GALLERY</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">TESTIMONIALS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CONTACT</a>
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












