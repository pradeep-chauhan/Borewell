import React from 'react'
import Image from 'next/image'
import Image1 from '../images/Construction-pana.svg'
const AboutUs = () => {
  return (
    <div>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col pt-5 '>
            <h3 class="text-uppercase mb-4 text-center mt-2 heading">About Us</h3>
            <p className='paragraph'>We, Vision Borewell Services, situated at Udaipur, Rajasthan are recognized as one of the most reliable multi-disciplinary drilling contractors. We are known for our trustworthy services of soil testing, borewell, drilling & industrial drillings, etc. Our company is backed by trained and devoted experts that keep updating themselves with all the latest industrial technologies.</p>
          </div>
          <div className='col'>
            <Image src={Image1} className='img-fluid img-curve' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs