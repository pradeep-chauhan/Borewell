// import React from 'react'
// import Image from 'next/image'
// import Image1 from '../images/people3.webp'
// import Image2 from '../images/services2.webp'
// import Image3 from '../images/services3.webp'
// import Image4 from '../images/services4.webp'
// import { Arrow90degLeft, ArrowBarLeft, ArrowDownRightCircleFill, ArrowRightCircleFill, Person } from 'react-bootstrap-icons'

// const Services = () => {
//   return (
// <section class="pb-5 pt-5" id="services">
//         <div class="container">
//             <div class="row">
//                 <div class="col-lg-12">
//                     <div class="center-heading">
//                         <h2 class="section-title">Our Services</h2>
//                     </div>
//                 </div>
//                 <div class="offset-lg-3 col-lg-6">
//                     <div class="center-text">
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting. </p>
//                     </div>
//                 </div>
//             </div>

//             <div class="row">
//                 <div class="col-lg-3 col-sm-6">
//                     <a href="#" class="services-small-item active">
//                        <div class="icon">
//                   <Image className='card-img-top img-fluid img-curve' src={Image2}></Image>
//                         </div>
//                         <h5 class="services-title">Lorem Ipsum</h5>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
//                         <div class="button">
//                         <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
//                         </div>
//                     </a>
                    
//                 </div>
//                 <div class="col-lg-3 col-sm-6">
//                     <a href="#" class="services-small-item">
//                         <div class="icon">
//                         <Image className='card-img-top img-fluid img-curve' src={Image1}></Image>
//                         </div>
//                         <h5 class="services-title">Lorem Ipsum</h5>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
//                         <div class="button">
//                         <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
//                         </div>
//                     </a>
                    
//                 </div>
//                 <div class="col-lg-3 col-sm-6">
//                     <a href="#" class="services-small-item">
//                         <div class="icon">
//                         <Image className='card-img-top img-fluid img-curve' src={Image1}></Image>
//                         </div>
//                         <h5 class="services-title">Lorem Ipsum</h5>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
//                         <div class="button">
//                         <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
//                         </div>
//                     </a>
                    
//                 </div>
//                 <div class="col-lg-3 col-sm-6">
//                     <a href="#" class="services-small-item">
//                         <div class="icon">
//                         <Image className='card-img-top img-fluid img-curve' src={Image1}></Image>
//                         </div>
//                         <h5 class="services-title">Lorem Ipsum</h5>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
//                         <div class="button">
//                             <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
//                         </div>
//                     </a>
                    
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Services

import React from 'react'
import Image from 'next/image'
import Image1 from '../images/service3.webp'
import Image2 from '../images/services2.webp'
import Image3 from '../images/services3.webp'
import Image4 from '../images/services4.webp'
import Image5 from '../images/service2.jpeg'
import Image6 from '../images/services4.webp'
<<<<<<< HEAD
import { ArrowBarLeft, ArrowDown, ArrowLeftRight, ArrowRight, Circle, CloudUploadFill, ConeStriped, CupFill, Lamp, LampFill, Person } from 'react-bootstrap-icons'
=======
import { ArrowBarLeft, ArrowDown, ArrowLeftRight, ArrowRight, Circle, CloudUploadFill, ConeStriped, CupFill, Ladder, Lamp, LampFill, Person } from 'react-bootstrap-icons'

>>>>>>> c35c033 (gallary and service section updated)
const Services = () => {
  return (
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="service">Our Services</h6>
                <h1 class="mb-4">We Are Pioneers For Getting Water</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                 <Image className='img-fluid service-img' src={Image1}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <CloudUploadFill class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="mb-3 fw-bold">Tube Well Drilling</h4>
                            <p>We take pride to introduce ourselves as the best service provider in the field of tube well drilling.</p>
                            <a class="small fw-medium" href="">Contact Us <ArrowRight></ArrowRight></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                    <Image className='img-fluid service-img' src={Image5}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <ConeStriped class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="mb-3 fw-bold">Ground Water Investigation</h4>
                            <p>The services for groundwater survey are conducted through integrated investigation potential zones.</p>
                            <a class="small fw-medium" href="">Contact Us <ArrowRight></ArrowRight></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                    <Image className='img-fluid service-img' src={Image3}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <LampFill class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="mb-3 fw-bold">Rain Water Harvesting</h4>
                            <p>Our expertise offers rainwater harvesting systems that comprise collection &amp; storage of the rainwater.</p>
                            <a class="small fw-medium" href="">Contact Us <ArrowRight></ArrowRight></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                    <Image className='img-fluid service-img' src={Image4}/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                            <Ladder class="bi bi-play-circle-fill iconss"/>
                            </div>
                            <h4 class="mb-3 fw-bold">Rain Water Harvesting</h4>
                            <p>Our expertise offers rainwater harvesting systems that comprise collection &amp; storage of the rainwater.</p>
                            <a class="small fw-medium" href="">Contact Us <ArrowRight></ArrowRight></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
export default Services