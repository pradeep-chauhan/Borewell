import React from 'react'
import Image from 'next/image'
import Image1 from '../images/people3.webp'
import Image2 from '../images/services2.webp'
import Image3 from '../images/services3.webp'
import Image4 from '../images/services4.webp'
import { Arrow90degLeft, ArrowBarLeft, ArrowDownRightCircleFill, ArrowRightCircleFill, Person } from 'react-bootstrap-icons'

const Services = () => {
  return (
<section class="pb-5 pt-5" id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Our Services</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting. </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item active">
                       <div class="icon">
                  <Image className='card-img-top img-fluid img-curve' src={Image1}></Image>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                        <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item">
                        <div class="icon">
                        <Image className='card-img-top img-fluid img-curve' src={Image1}></Image>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                        <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item">
                        <div class="icon">
                        <Image className='card-img-top img-fluid img-curve' src={Image1}></Image>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                        <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item">
                        <div class="icon">
                        <Image className='card-img-top img-fluid img-curve' src={Image1}></Image>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                            <ArrowRightCircleFill class="bi bi-arrow-right-circle-fill"/>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services