import React from 'react'
import Image from 'next/image'
import Image1 from '../images/service3.webp'
import Image2 from '../images/services2.webp'
import { Check } from 'react-bootstrap-icons'
const About = () => {
    return (
        <div class="container-xxl py-5 bg-color">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="h-100">
                            <h1 class=" text-heading text-uppercase mb-5 text-center">About Us</h1>
                            <p className='paragraph'>
                                We, Mahalaxmi Borewell, situated at Udaipur, Rajasthan are recognized as one of the most reliable multi-disciplinary drilling contractors.This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Udaipur-rajasthan.</p> <p className='paragraph'>The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day</p>
                            <p className='paragraph'> We are known for our trustworthy services of soil testing, borewell, drilling and industrial drillings, etc. Our company is backed by trained and devoted experts that keep updating themselves with all the latest industrial technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About