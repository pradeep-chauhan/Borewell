import React from 'react'
import 'animate.css';
const Navbar = () => {
  return (
<section className='home row' >
       <div className='container-fluid col'>
          <nav class="navbar navbar-expand-lg navbar-nav-scroll positio animate__animated animate__bounce"  id="navbar-2"> 
            <a class="navbar-brand ms-4" id="logo" href="#">Mahalaxmi Borewell</a>
            <button
              class="navbar-toggler scrolled"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end me-5">
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
          </nav>
          <div className="container">
            <div className="row mt-5 pt-5">
              <div className="col-8 mt-5">
                <h1 className='display-4'>BOREWELLS DRILLING EQUIPMENTS &</h1>
                <h1 className='display-4'> CONTRACTOR</h1>
              </div>
              <div className='container  mt-3 '>
                <div class="btn  button rounded-pill ">Enquire Now</div>
              </div>
            </div>
          </div>
        </div > 
      </section> 
  )
}

export default Navbar