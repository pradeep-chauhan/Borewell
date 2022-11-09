import React from 'react'
import Image from 'next/image'
import Image1 from '../images/service3.webp'
import Image2 from '../images/services2.webp'
import { Check } from 'react-bootstrap-icons'
import Heading from '../component/Heading'
const About = () => {
    return (
        <div class="row-xxl py-5 bg-color" id='about'>
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="h-100">
                            <Heading heading="About Us" />
                            <p>
                            Mahalaxmi Borewells Udaipur is recognized as a leading and reliable multi-disciplinary drilling contractor based in Udaipur. With more than 32 year's of experience in this business, the company has been offering the best solutions for all kinds of water-related problems. Our highly experienced drilling operators and dedicated technical personnel are an integral part of the company who has perfection in borewell drilling.</p>
                            <p>We specialize in borewell cleaning and installation of pumps, keeping the customer's preference our priority. All the cutting-edge technologies and machines are preferred to provide excellent services to our valued customers across Udaipur. If you are searching for expert borewell drilling contractors in Udaipur, our company has a great reputation in this field and borewell drilling for various dimensions with the depth ranging from 150 to 1500 feet. Furthermore, we offer after-sales service complying with customer convenience and preference.</p>
                            <p>We are supported by trained and dedicated borewell drilling experts who keep them updated with all relevant industry latest technologies. Our company also assists good water surveyors/geologists with, the installation & erection of suitable motor/pump/piping with fittings. Understanding the value of customers’ precious time, they endeavor to deliver all services within the stipulated time frame.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About