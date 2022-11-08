import React from 'react'
import Image from 'next/image'
import Image1 from '../images/placeholder (2).png'
import Image2 from '../images/phone (1).png'
import Image3 from '../images/email (2).png'
import Image4 from '../images/alarm-clock (2).png'

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h3 className='mb-3 text-heading'>Contact Us</h3>
            <p className='mb-4'>We Will love to here from you</p>

            <div className='row mt-3 mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image1} />
              </div>
              <div className='col-md-10 col-xl-10 col-lg-10 col-sm-11'>
                <p className='contactUs'>Near RAC Battalion, Lohar Colony, Debari, Airport Road, Udaipur-313024 (Raj.)</p>
              </div>
            </div>
            <div className='row mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image2} />
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p className='contactUs'><a href="tel:+919928845025" className="">+91-9928845025</a> , <a href="tel:+919782525025" className="">+91-9782525025</a></p>
              </div>
            </div>
            <div className='row mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image3} />
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p className='contactUs'><a href="mailto:mloharmalviya@gmail.com" className=""> mloharmalviya@gmail.com </a></p>
              </div>
            </div>
            <div className='row  mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image4} />
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p className='contactUs'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
              </div>
            </div>
          </div>
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.8986029159131!2d73.79289801152288!3d24.603189885614853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e634fc3cdb71%3A0xb69a2a89cc68c833!2sUdaipur%2C%20Rajasthan%20313024!5e0!3m2!1sen!2sin!4v1667905870862!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs