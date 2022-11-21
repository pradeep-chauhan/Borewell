import React from 'react'
import Image from 'next/image'
import Image1 from '../images/placeholder.png'
import Image2 from '../images/phone.png'
import Image3 from '../images/email.png'
import Image4 from '../images/time.png'

const ContactUs = () => {
  return (
    <div>
      <div className="container" id='contact'>
        <div className="row mt-5">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
            <h3 className='mb-3 text-heading' itemProp='name'>Contact Us</h3>
            <p className='mb-4 fs-4' itemProp='description'>We Will love to here from you</p>
            <div className='row mt-3 mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image1} alt="MahaLaxmi location" itemProp='image'/>
              </div>
              <div className='col-md-10 col-xl-10 col-lg-10 col-sm-11'>
                <p className='contactUs contact-us-font' itemProp='address'>Bedwas, bus stand, Airport Rd, Bus Stand Bedwas, Transport Nagar, Udaipur, Rajasthan 313024</p>
              </div>
            </div>
            <div className='row mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image2} alt="MahaLaxmi Phone" itemProp='image'/>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p className='contactUs' itemProp='phone'><a href="tel:+919928845025" className="contact-us-font">+91-9928845025</a> , <a href="tel:+919782525025" className="contact-us-font">+91-9782525025</a></p>
              </div>
            </div>
            <div className='row mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image3} alt="MahaLaxmi Email" itemProp='image'/>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p className='contactUs' itemProp='email'><a href="mailto:mloharmalviya50@gmail.com" className="contact-us-font"> mloharmalviya50@gmail.com </a></p>
              </div>
            </div>
            <div className='row  mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image4} alt="MahaLaxmi Time" itemProp='image'/>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
                <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.9763296255405!2d73.76020772921373!3d24.59246359901133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e6103eec9e49%3A0x5d0d69ba2f18829d!2sMahalaxmi%20borewell%20and%20electricals!5e0!3m2!1sen!2sin!4v1668764150122!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs