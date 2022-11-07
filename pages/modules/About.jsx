import React from 'react'
import Image from 'next/image'
import Image1 from '../images/service3.webp'
import Image2 from '../images/services2.webp'
import { Check } from 'react-bootstrap-icons'
const About = () => {
  return (
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row g-3 img-twice position-relative h-100">
                        <div class="col-6">
                        <Image className='img-fluid border p-3' src={Image1}/>
                        </div>
                        <div class="col-6 align-self-end">
                        <Image className='img-fluid border p-3' src={Image2}/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="h-100">
                        <p class="abouts text-uppercase mb-2">About Us</p>
                        <h1 class="display-6 fw-bold mb-4">We Are Creative And Professional Photographer</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div class="row g-2 mb-4">
                            <div class="col-sm-6">
                            <span className='iconcolor'><Check></Check></span> Quality Products
                            </div>
                            <div class="col-sm-6">
                            <span className='iconcolor'><Check></Check></span> Custom Products
                            </div>
                            <div class="col-sm-6">
                               <span className='iconcolor'><Check></Check></span> Online Order
                            </div>
                            <div class="col-sm-6">
                            <span className='iconcolor'><Check></Check></span> Home Delivery
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About