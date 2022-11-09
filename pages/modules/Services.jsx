import React from 'react'
import Image from 'next/image'
import Image1 from '../images/service3.webp'
import Image3 from '../images/services3.webp'
import Image4 from '../images/services4.webp'
import Image5 from '../images/service2.jpeg'
import Image6 from '../images/tubewell (1).png'
import Image7 from '../images/rainwater (2).png'
import Image8 from '../images/oil-well (1).png'
import Image9 from '../images/well.png'
const Services = () => {
  return (
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-heading">Our Services</h6>
                <h1 class="mb-4 heading">We Are Pioneers For Getting Water</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                 <Image className='img-fluid service-img' src={Image1}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <Image src={Image6} class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="card-heading mb-3 fw-bold">Tube Well Drilling</h4>
                            <p className='card-paragraph'>We take pride to introduce ourselves as the best service provider in the field of tube well drilling.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                    <Image className='img-fluid service-img' src={Image5}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <Image src={Image9} class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="card-heading mb-3 fw-bold">Ground Water</h4>
                            <p className='card-paragraph'>The services for groundwater survey are conducted through integrated investigation potential zones.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                    <Image className='img-fluid service-img' src={Image3}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <Image src={Image8} class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="card-heading mb-3 fw-bold">Rain Water</h4>
                            <p className='card-paragraph'>Our expertise offers rainwater harvesting systems that comprise collection  storage of the rainwater zones.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                    <Image className='img-fluid service-img' src={Image4}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <Image src={Image7} class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="card-heading mb-3 fw-bold">Earth Drilling</h4>
                            <p className='card-paragraph'>Our expertise offers earth drilling systems and collection of soil rock core samples</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Services