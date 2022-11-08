import React from 'react'
import { Clock, Envelope, Geo, Phone } from 'react-bootstrap-icons'
import Image from 'next/image'
import Image1 from '../images/placeholder (1).png'
import Image2 from '../images/phone-call (1).png'
import Image3 from '../images/email.png'
import Image4 from '../images/clock.png'

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h3 className='mb-3 text-heading'>Contact Us</h3>
            <p >We Will love to here from you</p>

            <div className='row mt-3'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
              <Image src={Image1} />
              </div>
              <div className='col-md-10 col-xl-10 col-lg-10 col-sm-11'>
                <p>648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
              <Image src={Image2} />
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p><a href="tel:+919928845025" className="">+91-9928845025</a></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
              <Image src={Image2} />
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p><a href="tel:+919928845025" className="">+91-9928845025</a></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
              <Image src={Image3} />
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p><a href="mailto:abc.com" className=""> xyz@gmail.com </a></p>
              </div>
            </div>
            <div className='row mb-5'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
              <Image src={Image4} />
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p>Mon-Sat: 10AM - 6PM</p>
              </div>
            </div>
          </div>
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14510.127844554047!2d73.8154725!3d24.6053439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e7045afd7ce9%3A0xd7bdb60d6cbac5d8!2sAlvrio%20Labs!5e0!3m2!1sen!2sin!4v1667657045373!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs