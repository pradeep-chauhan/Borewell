import React from 'react'
import Image from 'next/image'
import Image1 from '../images/gallery1.jpeg'
import Image2 from '../images/gallery2.webp'
import Image3 from '../images/gallery3.jpeg'
const Gallery = () => {
  return (
    <section>
      <div className='container'>
      <div class="row pt-5">
          <div class="col-12">
            <h3 class="text-uppercase mb-4 text-center heading">Gallery</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
            <Image src={Image1} className='img-fluid img-curve' />
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
            <Image src={Image2} className='img-fluid img-curve' />
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
            <Image src={Image3} className='img-fluid img-curve' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery