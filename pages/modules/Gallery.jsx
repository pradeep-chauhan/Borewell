import React from 'react'
import Image from 'next/image'
import Image1 from '../images/Temp-400x500 (1).jpg'
import Image2 from '../images/Temp-400x300 (1).jpg'
import Image3 from '../images/Temp-400x300 (4).jpg'
import Image4 from '../images/Temp-400x500 (2).jpg'
import Image5 from '../images/Temp-400x300 (3).jpg'
import Image6 from '../images/Temp-400x500 (3).jpg'
import Image9 from '../images/Temp-400x300.jpg'
import Image10 from '../images/Temp-400x500.jpg'
const Gallery = () => {
  return (
    <div class="container-xxl py-5">
    <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
            <p class=" text-uppercase mb-2 gallary">Our Works</p>
            <h1 class="display-6 mb-0">Discover Our Unique And Creative Photoshoot</h1>
        </div>
        <div class="row g-3">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                          <Image className='img-fluid' src={Image9}/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item w-100 h-100">
                        <Image className='img-fluid w-100 h-100' src={Image10}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' src={Image1}/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' src={Image2}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' src={Image3}/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' src={Image4}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' src={Image6}/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="project-item">
                        <Image className='img-fluid' src={Image5}/>
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
