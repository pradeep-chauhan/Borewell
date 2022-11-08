import React from 'react'
import { Facebook, Instagram, Whatsapp, Twitter } from 'react-bootstrap-icons'
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section class="footer">
      <figure class="mb-0">
        <svg class="fill-body rotate-180 body-fill" width="100%" height="150" viewBox="0 0 500 150"
          preserveAspectRatio="none">
          <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
        </svg>
      </figure>
      <div class="container position-relative">
        <div class="row">
          <div class="col-lg-6 mx-auto text-center mb-5">
            <h4 className="mb-4 ">Mahalaxmi Borewell</h4>
            <p class="mt-3 text-white">We have successfully Drilled and Solved problem for many areas in Udaipur </p>
            <ul class="nav justify-content-center justify-content-center text-primary-hover mt-3 mt-md-0">
              <li class="nav-item"><a class="nav-link text-white" href="#">Home</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="#">Services</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="#">About</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="#">Testimonial</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="#">Contact us</a></li>
            </ul>
            <ul className="list-inline mb-0 mt-3 mb-5">
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Instagram /></a> </li>
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <hr></hr>
          <div className="col-12 col-md-8 col-sm-12 col-xs-12 mt-3 mb-2 ">
            <span className='text-black'> © {year} Mahalaxmi Borewell. All Rights Reserved
            </span></div>
          <div className="col-12 col-md-4 col-sm-12 col-xs-12 mt-3 mb-2  ">
            <p className='text-black'>Design and Developed By <strong> <a href="https://alvrio.io/">Alvrio Labs</a></strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer


