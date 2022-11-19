import React from 'react'
import Image from 'next/image'
import Image5 from '../images/gallery4.png'
import Image6 from '../images/gallery7.png'
import Image9 from '../images/gallery6.png'
import Image11 from '../images/gallery9.png'
import Image12 from '../images/gallery10.png'
import Image13 from '../images/gallery11.png'
import Image14 from '../images/gallery12.png'
import Image15 from '../images/gallery13.png'


import Heading from '../component/Heading'
const Gallery = () => {
  return (
    <div class="container-xxl py-5" id='gallery'>
    <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
             <Heading heading="Our Works" subHeading="We’ve Done Lot’s Of Work." />
        </div>
        <div class="row g-3">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                          <Image className='img-fluid' alt="MahaLaxmi Borewell Tube Well Drilling" src={Image9} itemProp='image'/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item w-100 h-100">
                        <Image className='img-fluid w-100 h-100'  alt="MahaLaxmi Borewell Ground Water" src={Image13} itemProp='image'/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid'  alt="MahaLaxmi Borewell Borewell Drilling" src={Image12} itemProp='image'/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' alt="MahaLaxmi Borewell Earth Drilling" src={Image14} itemProp='image'/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid'  alt="Borewell Drilling image" src={Image11} itemProp='image'/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' alt="Earth Drilling image" src={Image15} itemProp='image'/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' alt="Ground Water  image" src={Image6} itemProp='image'/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' alt="Tube Well Drilling" src={Image5} itemProp='image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Gallery
