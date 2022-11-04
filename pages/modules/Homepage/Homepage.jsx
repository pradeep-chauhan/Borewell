import React from 'react'
import { Nav } from 'react-bootstrap'

const Navbar = () => {
  return (
    <section className='home'>
      <div className='container'>
        <nav class="navbar navbar-expand-lg  " id="navbar-2">
          <div class="container-fluid">
            <a class="navbar-brand" id="logo" href="#">Borewell</a>
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
                  <a class="nav-link" href="#">VIDEOS</a>
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
        <div className='container mt-5'>
          <div className='row col-9 mt-5 mx-3'>
            <h2 className='display-5 mx-3'>Trusted & Reliable</h2>
            <h2 className='display-4'>Borewell Contractors</h2>
          </div>
        </div>
        <div className='container mt-3 '>
          <div class="btn btn-info button rounded-pill mx-5 ">Enquire Now</div>
        </div>
      </div>
    </section>
  )
}

export default Navbar