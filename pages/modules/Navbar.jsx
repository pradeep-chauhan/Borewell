import React from 'react'
import 'animate.css';
const Navbar = () => {
  return (
    <section>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg fixed-top bg-transparent mx-5">
          <a class="navbar-brand text-black" href="#">Mahalaxmi Borewell</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
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
        </div > 
      </section> 
  )
}

export default Navbar