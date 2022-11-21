import React from 'react'
import Image from 'next/image'
import Image1 from '../images/service3.webp'
import Image3 from '../images/borewelldrilling.jpg'
import Image4 from '../images/Temp-400x300 (1).png'
import Image5 from '../images/service2.jpeg'
import Image6 from '../images/tubewell (1).png'
import Image7 from '../images/rainwater (2).png'
import Image8 from '../images/oil-well (1).png'
import Image9 from '../images/well.png'
import Heading from '../component/Heading'
const Services = () => {
    return (
        <div class="container-xxl py-5" id='services'>
            <div class="container" itemscope itemtype="https://schema.org/Service">
                <Heading itemProp='heading' heading="Our Services" subHeading="We Are Pioneers For Getting Water" />
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s" itemprop="provider" itemscope itemtype="https://schema.org/LocalBusiness">
                        <div class="service-item rounded overflow-hidden">
                            <Image className='img-fluid service-img' alt="MahaLaxmi Tube Well Drilling image" src={Image5} itemProp='image' />
                            <div class="position-relative p-4 pt-0">
                                <div class="service-icon">
                                    <Image src={Image6} itemProp='image' alt="MahaLaxmi Tube Well Drilling" class="bi bi-play-circle-fill iconss" />
                                </div>
                                <h4 class="card-heading mb-3 fw-bold" itemProp='heading'>Tube Well Drilling</h4>
                                <p className='card-paragraph' itemProp='description'>We take pride to introduce ourselves as the best service provider in the field of tube well drilling.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s" itemprop="provider" itemscope itemtype="https://schema.org/LocalBusiness">
                        <div class="service-item rounded overflow-hidden">
                            <Image className='img-fluid service-img' alt="MahaLaxmi Ground Water Drilling image" src={Image1} itemProp='image' />
                            <div class="position-relative p-4 pt-0">
                                <div class="service-icon">
                                    <Image src={Image9} itemProp='image' alt="MahaLaxmi Ground Water Drilling image" class="bi bi-play-circle-fill iconss" />
                                </div>
                                <h4 class="card-heading mb-3 fw-bold" itemProp='heading'>Ground Water</h4>
                                <p className='card-paragraph' itemProp='description'>The services for groundwater survey are conducted through integrated investigation potential zones.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s" itemprop="provider" itemscope itemtype="https://schema.org/LocalBusiness">
                        <div class="service-item rounded overflow-hidden">
                            <Image className='img-fluid service-img' alt="MahaLaxmi Borewell Drilling image" itemProp='image' src={Image3} />
                            <div class="position-relative p-4 pt-0">
                                <div class="service-icon">
                                    <Image src={Image8} itemProp='image' alt="MahaLaxmi Borewell Drilling image" class="bi bi-play-circle-fill iconss" />
                                </div>
                                <h4 class="card-heading mb-3 fw-bold" itemProp='heading'>Borewell Drilling</h4>
                                <p className='card-paragraph' itemProp='description'>Our team of professionals by using sharp edge technology and advance machines and equipments are used.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s" itemprop="provider" itemscope itemtype="https://schema.org/LocalBusiness">
                        <div class="service-item rounded overflow-hidden">
                            <Image className='img-fluid service-img' src={Image4} alt="MahaLaxmin Earth Drilling" itemProp='image' />
                            <div class="position-relative p-4 pt-0">
                                <div class="service-icon">
                                    <Image src={Image7} itemProp='image' alt="MahaLaxmi Earth Drilling image" class="bi bi-play-circle-fill iconss" />
                                </div>
                                <h4 class="card-heading mb-3 fw-bold" itemProp='heading'>Earth Drilling</h4>
                                <p className='card-paragraph' itemProp='description'>Earth Drilling has provided environmental, geotechnical, oil sands, mining, civil construction and water well </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services