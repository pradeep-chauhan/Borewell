import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import Image1 from '../images/people1.jpeg'
import Image2 from '../images/people2.webp'
import Image3 from '../images/people3.webp'
import Image4 from '../images/people4.jpg'
import Image5 from '../images/people5.jpeg'
export default class Testimonials extends Component {
  render() {
    return (
      <>
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
          <h1 className='heading text-center service mt-5'>Testimonail</h1>
          <p className='paragraph text-center mb-5'>You Can See our clients feedback </p>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >

          <div>
            <Image src={Image2} className="tm-people " />
            <div className="myCarousel">
              <h3>Mr. Praveen</h3>
              
              <p>
                Cost involved in the project was clearly explained. It was reasonable enough. Installation was followed with accurate scientific method.
              </p>
            </div>
          </div>

          <div>
            <Image src={Image3} className="tm-people " />
            <div className="myCarousel">
              <h3>Mr. Karthik</h3>
              
              <p>
                It's my pleasure gaining best information about process followed at installation. MahaLaxmi has expert Ground Water Surveyors to predict with accuracy.
              </p>
            </div>
          </div>

          <div>
            <Image src={Image1} className="tm-people " />
            <div className="myCarousel">
              <h3>Mr. Ravi</h3>
              
              <p>
                There was no hindrance at work. Team worked sincerely with less supervision. They proved their skills.
              </p>
            </div>
          </div>
        </Carousel>
      </>
    );
  }
}