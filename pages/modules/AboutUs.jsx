import React from 'react'
import Image from 'next/image'
// import Image1 from '../images/Construction-pana.svg'
import Image1 from '../images/aboutus1.jpg'

const AboutUs = () => {
  return (
    <div>
      <div className='container pt-5'>
        <div className='row'>

          <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 aboutus-image'>
            <div className="aboutus-img">
              <Image src={Image1} className='img-fluid img-curve' />
            </div>
          </div>
          <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 '>
            <h3 class="text-uppercase mb-4 text-center mt-2 heading">About Us</h3>
            <p className='paragraph'>We, Mahalaxmi Borewell, situated at Udaipur, Rajasthan are recognized as one of the most reliable multi-disciplinary drilling contractors. We are known for our trustworthy services of soil testing, borewell, drilling and industrial drillings, etc. Our company is backed by trained and devoted experts that keep updating themselves with all the latest industrial technologies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs