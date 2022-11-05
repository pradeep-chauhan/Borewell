// import React from 'react'
// import { Map, Phone, Envelope } from 'react-bootstrap-icons';
// import { Facebook, Instagram, Whatsapp, Twitter } from 'react-bootstrap-icons'
// const Footer = () => {
//   return (
//     <section>
//       <div className='container'>
//         <div className='row pt-5'>
//           <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
//             <h4 className="mb-4 ">Mahalaxmi Borewell</h4>
//             <p className="footer-para d-flex justify-content-start text-justify e">We have successfully Drilled and Solved problem for many areas in Udaipur
//             </p>
//             <ul className="list-inline mb-0 mt-3 mb-5">
//               <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
//               <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
//               <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Instagram /></a> </li>
//               <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
//             </ul>
//             <br />
//           </div>
//           <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
//             <div className='row'>
//               <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
//                 <Map className="fa fa-map-marker"></Map>
//               </div>
//               <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
//                 <p>648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024</p>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
//                 <Phone className="fa fa-phone contactIcon"></Phone>
//               </div>
//               <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
//                 <p><a href="tel:+91xxxxxxxxxx" className="">+91-1234567890</a></p>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
//                 <Envelope> </Envelope>
//               </div>
//               <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
//                 <p><a href="mailto:abc.com" className=""> xyz@gmail.com </a></p>
//               </div>
//             </div>
//           </div>
//           <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14510.127844554047!2d73.8154725!3d24.6053439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e7045afd7ce9%3A0xd7bdb60d6cbac5d8!2sAlvrio%20Labs!5e0!3m2!1sen!2sin!4v1667555392366!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default Footer


import React from 'react'
import { Facebook, Instagram, Whatsapp, Twitter } from 'react-bootstrap-icons'
const Footer = () => { const today = new Date();
  const year = today.getFullYear();
  return (
    // <section>
    //   <div className="container">
    //     <div className="row pt-5">
    //       <div className="col-lg-5 col-xl-5 col-sm-12 col-md-5 col-xs-12">
    //         <h4 className="mb-4 ">Mahalaxmi Borewell</h4>
    //         <p className="footer-para d-flex justify-content-start text-justify e">
    //          
    //         </p>
    //         <ul className="list-inline mb-0 mt-3 mb-5">
    //           <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
    //           <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
    //           <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Instagram /></a> </li>
    //           <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
    //         </ul>
    //       </div>
    //       <div className="col-lg-5 col-xl-5 col-sm-12 col-md-5 col-xs-12">
    //         <h4 className="mb-4 ">QUICK LINK</h4>
    //         <ul className="list-inline mb-0 mt-3 mb-5">
    //           <li> <p>Home</p> </li>
    //           <li> <p>Services</p> </li>
    //           <li> <p>About US</p> </li>
    //           <li> <p>Testimonial</p> </li>
    //           <li> <p>Contact</p> </li>
    //         </ul>
    //       </div>
    //       <div className="col-lg-2 col-xl-2 col-sm-12 col-md-4 col-xs-12">
    //         <h4>Follow us on</h4>

    //       </div>
    //     </div>
    //   </div>
    // </section>
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


