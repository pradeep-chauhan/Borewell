import React from 'react'
import Image from 'next/image'
import Image1 from '../images/people1.jpeg'
import Image2 from '../images/people2.webp'
import Image3 from '../images/people3.webp'
import Image4 from '../images/people4.jpg'
import Image5 from '../images/people5.jpeg'

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  nav: true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"]
});
const Testimonial = () => {
  return (
    <div className='testimonial-image'>
      <div className='container'>
        <div className='row pt-5'>
          <div className='col'>
            <h1 className='heading text-center'>Testimonail</h1>
            <p className='paragraph text-center mb-5'>You Can See our clients feedback </p>
           
          </div>
        </div>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div class="item">
            <div class="card">
              <div className="card t5 testimonial-card">
                <div className="d-flex justify-content-center">
                  <Image src={Image1} className="tm-people " />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">David Jones</h5>
                  <p className="card-text d-flex justify-content-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, sapiente doloremque quas fugiat aut vero nobis nihil! Labore laboriosam eligendi assumenda aperiam numquam maiores culpa similique ullam illum laborum..</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card">
              <div className="card t5 testimonial-card">
                <div className="d-flex justify-content-center">
                  <Image src={Image3} className="img-fluid tm-people" />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">David Jones</h5>
                  <p className="card-text d-flex justify-content-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, sapiente doloremque quas fugiat aut vero nobis nihil! Labore laboriosam eligendi assumenda aperiam numquam maiores culpa similique ullam illum laborum..</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card">
              <div className="card t5 testimonial-card">
                <div className="d-flex justify-content-center">
                  <Image src={Image4} className="tm-people " />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">David Jones</h5>
                  <p className="card-text d-flex justify-content-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, sapiente doloremque quas fugiat aut vero nobis nihil! Labore laboriosam eligendi assumenda aperiam numquam maiores culpa similique ullam illum laborum..</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card">
              <div className="card t5 testimonial-card">
                <div className="d-flex justify-content-center">
                  <Image src={Image5} className="tm-people " />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">David Jones</h5>
                  <p className="card-text d-flex justify-content-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, sapiente doloremque quas fugiat aut vero nobis nihil! Labore laboriosam eligendi assumenda aperiam numquam maiores culpa similique ullam illum laborum..</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  )
}

export default Testimonial