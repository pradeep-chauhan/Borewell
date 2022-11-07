import React from 'react'
import Image from 'next/image'
<<<<<<< HEAD
import Image4 from '../images/aboutus.webp'
import Image5 from '../images/services1.jpg'
import Image6 from '../images/services2.webp'
import Image7 from '../images/services3.webp'
import Image8 from '../images/services4.webp'
import Image9 from '../images/gallery4.jpg'
const images = [
  { picture: Image9 },
  { picture: Image4 },
  { picture: Image5 },
  { picture: Image6 },
  { picture: Image7 },
  { picture: Image8 }
]
export default function Gallery() {
  return (
    <>
      <div className='container'>
        <div className="row pt-5">
          <div class="col-12">
            <h3 class="text-uppercase mb-4 text-center heading">Gallery</h3>
          </div>
          <div className='row'>
          {
                images.map(({ picture }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-4 col-xl-4 col-md-6 mt-3">
                    <Image key={picture} src={picture} className="gallery-images card-img-top img-fluid" />
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </>
  )
}
=======
import Image1 from '../images/Temp-400x500 (1).jpg'
import Image2 from '../images/Temp-400x300 (1).jpg'
import Image3 from '../images/Temp-400x300 (4).jpg'
import Image4 from '../images/Temp-400x500 (2).jpg'
import Image5 from '../images/Temp-400x300 (3).jpg'
import Image6 from '../images/Temp-400x500 (3).jpg'
import Image7 from '../images/project-4.jpg'
import Image8 from '../images/project-8.jpg'
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
>>>>>>> c35c033 (gallary and service section updated)
