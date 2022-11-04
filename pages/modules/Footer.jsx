// import React from 'react'
// import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons'

// const Footer = () => {
//   return (
//     <div>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-5'>
//             <ul className="list-inline mb-0 mt-3 mb-5">
//               <li className="list-inline-item">HOME</li>
//               <li className="list-inline-item">SERVICES</li>
//               <li className="list-inline-item">ABOUT US</li>
//               <li className="list-inline-item">GALLERY</li>
//               <li className="list-inline-item">TESTIMONIALS</li>
//               <li className="list-inline-item">CONTACT</li>
//             </ul>
//           </div>
//           <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12  mt-5'>
//             <ul className="list-inline mb-0 mt-3 justify-content-end">
//               <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-facebook"><a href="https://www.facebook.com/vinayaksteelfurniture/"> <Facebook></Facebook> </a></li>
//               <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-instagram" href="#"><Instagram ></Instagram></li>
//               <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-whatsapp"><a href="https://api.whatsapp.com/send?phone=919694985000" class="float " target="_blank"><Whatsapp ></Whatsapp></a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer




import React from 'react'
import { Map, Phone, Envelope } from 'react-bootstrap-icons';
import { Facebook, Instagram, Whatsapp, Twitter } from 'react-bootstrap-icons'
const Footer = () => {
  return (
    <section>
      <div className='container'>
        <div className='row pt-5'>
          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
            <h4 className="mb-4 ">Borewell Company</h4>
            <p className="footer-para d-flex justify-content-start text-justify e">We have successfully Drilled and Solved problem for many areas in Udaipur
            </p>
            <ul className="list-inline mb-0 mt-3 mb-5">
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Instagram /></a> </li>
              <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
            </ul>
            <br />
          </div>
          <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
            {/* <p className="inline d-flex justify-content-start contact-us-paragraph ">
              <Map className="fa fa-map-marker contactIcon "></Map>
              648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024
            </p>
            
            <p className="inline d-flex justify-content-start contact-us-paragraph  ">
              <Phone className="fa fa-phone contactIcon"></Phone>
              <a href="tel:+91xxxxxxxxxx" className="">+91-1234567890</a>
            </p>
            <p className='inline d-flex justify-content-start contact-us-paragraph  mb-5'>
              <Envelope className='contactIcon '> </Envelope>
              <a href="mailto:abc.com" className=""> xyz@gmail.com </a>
            </p> */}
            <div className='row'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Map className="fa fa-map-marker"></Map>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p>648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Phone className="fa fa-phone contactIcon"></Phone>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p><a href="tel:+91xxxxxxxxxx" className="">+91-1234567890</a></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Envelope> </Envelope>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p><a href="mailto:abc.com" className=""> xyz@gmail.com </a></p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14510.127844554047!2d73.8154725!3d24.6053439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e7045afd7ce9%3A0xd7bdb60d6cbac5d8!2sAlvrio%20Labs!5e0!3m2!1sen!2sin!4v1667555392366!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer