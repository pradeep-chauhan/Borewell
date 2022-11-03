import React from 'react'
import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-5'>
            <ul className="list-inline mb-0 mt-3 mb-5">
              <li className="list-inline-item">HOME</li>
              <li className="list-inline-item">SERVICES</li>
              <li className="list-inline-item">ABOUT US</li>
              <li className="list-inline-item">GALLERY</li>
              <li className="list-inline-item">TESTIMONIALS</li>
              <li className="list-inline-item">CONTACT</li>
            </ul>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12  mt-5'>
            <ul className="list-inline mb-0 mt-3 justify-content-end">
              <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-facebook"><a href="https://www.facebook.com/vinayaksteelfurniture/"> <Facebook></Facebook> </a></li>
              <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-instagram" href="#"><Instagram ></Instagram></li>
              <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-whatsapp"><a href="https://api.whatsapp.com/send?phone=919694985000" class="float " target="_blank"><Whatsapp ></Whatsapp></a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


