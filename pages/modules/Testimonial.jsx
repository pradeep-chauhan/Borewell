// import React from 'react'
// import Image from 'next/image'
// import Image1 from '../images/people1.jpeg'
// import Image2 from '../images/people2.webp'
// import Image3 from '../images/people3.webp'
// import Image4 from '../images/people4.jpg'
// import Image5 from '../images/people5.jpeg'

// const Resposnive ={
//   0:{items: 1.2,
//   margin: 5,},
//   580: {
//   items: 2,
//   margin: 10},
//   768:{
//   items: 2.5,
//   margin: 10},
//   900: {
//   items: 3,
//   margin: 10},
//   1200:{
//   items: 3.5,
//   margin: 20},
//   1400: {
//   items: 4,
//   margin: 20,
//   }
// }

// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   // Client-side-only code
//   window.$ = window.jQuery = require("jquery");
// }
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import dynamic from "next/dynamic";

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
//   nav: true,
//   responsive: {Resposnive},
//   navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],

// },
// );



// const Testimonial = () => {
//   return (
//     <div className='testimonial-image'>
//    <div class="container-xxl py-5">
//         <div class="container">
//             <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
//                 <p class="text-primary text-uppercase mb-2">Client's Review</p>
//                 <h1 class="display-6 mb-0">More Than 20000+ Customers Trusted Us</h1>
//             </div>
//             <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
//                 <div class="testimonial-item bg-white p-4">
//                     <div class="d-flex align-items-center mb-4">

//                         <div class="ms-4">
//                             <h5 class="mb-1">Client Name</h5>
//                             <span>Profession</span>
//                         </div>
//                     </div>
//                     <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
//                 </div>
//                 <div class="testimonial-item bg-white p-4">
//                     <div class="d-flex align-items-center mb-4">

//                         <div class="ms-4">
//                             <h5 class="mb-1">Client Name</h5>
//                             <span>Profession</span>
//                         </div>
//                     </div>
//                     <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
//                 </div>
//                 <div class="testimonial-item bg-white p-4">
//                     <div class="d-flex align-items-center mb-4">
//                         <img class="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-3.jpg" alt="" />
//                         <div class="ms-4">
//                             <h5 class="mb-1">Client Name</h5>
//                             <span>Profession</span>
//                         </div>
//                     </div>
//                     <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
//                 </div>
//                 <div class="testimonial-item bg-white p-4">
//                     <div class="d-flex align-items-center mb-4">
//                         <div class="ms-4">
//                             <h5 class="mb-1">Client Name</h5>
//                             <span>Profession</span>
//                         </div>
//                     </div>
//                     <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Testimonial


import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import Image1 from '../images/people1.jpeg'
import Image2 from '../images/people2.webp'
import Image3 from '../images/people3.webp'
import Image4 from '../images/people4.jpg'
import Image5 from '../images/people5.jpeg'
export default class Testimonials extends Component {
  render() {
    return (
      <>
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
          <h1 className='heading text-center service mt-5'>Testimonail</h1>
          <p className='paragraph text-center mb-5'>You Can See our clients feedback </p>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >

          <div>
            <Image src={Image2} className="tm-people " />
            <div className="myCarousel">
              <h3>Mr. Praveen</h3>
              
              <p>
                Cost involved in the project was clearly explained. It was reasonable enough. Installation was followed with accurate scientific method.
              </p>
            </div>
          </div>

          <div>
            <Image src={Image3} className="tm-people " />
            <div className="myCarousel">
              <h3>Mr. Karthik</h3>
              
              <p>
                It's my pleasure gaining best information about process followed at installation. MahaLaxmi has expert Ground Water Surveyors to predict with accuracy.
              </p>
            </div>
          </div>

          <div>
            <Image src={Image1} className="tm-people " />
            <div className="myCarousel">
              <h3>Mr. Ravi</h3>
              
              <p>
                There was no hindrance at work. Team worked sincerely with less supervision. They proved their skills.
              </p>
            </div>
          </div>
        </Carousel>
      </>
    );
  }
}