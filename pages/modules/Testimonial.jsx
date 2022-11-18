import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import Image1 from '../images/client2.jpg'
import Image2 from '../images/client4.webp'
import Image3 from '../images/client3.webp'
import Image4 from '../images/client-1.jpeg'
import Image5 from '../images/client5.jpeg'
import Image6 from '../images/client6.jpeg'

import { Messenger } from "react-bootstrap-icons";
import Heading from '../component/Heading'
export default class Testimonials extends Component {
  render() {
    return (
      <section className="row-xxl bg-color" >
        <div className="container" id="testimonial">
          <div className="container-fluid py-5">
            <Heading heading="Testimonial" subHeading="You Can See Our Clients Feedback" itemProp='heading'/>
            <div className="row justify-content-center">
              <div className="col-lg-3 d-none d-lg-block">
                <div className="testimonial-left h-100">
                  <Image className="img-fluid wow border fadeIn" data-wow-delay="0.1s" src={Image4} alt="MahaLaxmi Borewell Testimonial image" itemProp='image' />
                  <Image className="img-fluid wow border fadeIn" data-wow-delay="0.3s" src={Image3} alt="MahaLaxmi Borewell Testimonial image" itemProp='image' />
                  <Image className="img-fluid wow border fadeIn" data-wow-delay="0.5s" src={Image1} alt="MahaLaxmi Borewell Testimonial image" itemProp='image' />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <Carousel
                  autoplay={true}
                  smartSpeed={1000}
                  items={1}
                  dots={true}
                  loop={true}
                  showArrows={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  interval={6100}
                >

                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <Image className="w-25 h-25 rounded-circle border border-secondary p-2 mx-auto" src={Image6} itemProp='image' alt="MahaLaxmi Borewell Testimonial image" />
                      <div className="testimonial-icon">
                        <Messenger></Messenger>
                      </div>
                    </div>
                    <p className="fs-5 fst-italic" itemProp='description'> Cost involved in the project was clearly explained. It was reasonable enough. Installation was followed with accurate scientific method.</p>
                    <hr className="w-25 mx-auto" />
                    <h5 itemProp='heading'>Mr. Praveen</h5>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <Image className="w-25 h-25 rounded-circle border border-secondary p-2 mx-auto" src={Image5} itemProp='image' alt="MahaLaxmi Borewell Testimonial image" />
                      <div className="testimonial-icon">
                        <Messenger></Messenger>
                      </div>
                    </div>
                    <p className="fs-5 fst-italic" itemProp='description'> It's my pleasure gaining best information about process followed at installation. MahaLaxmi has expert Ground Water Surveyors to predict with accuracy.</p>
                    <hr className="w-25 mx-auto" />
                    <h5 itemProp='heading'>Mr. Ravi</h5>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <Image className="w-25 h-25 rounded-circle border border-secondary p-2 mx-auto" src={Image4} itemProp='image' alt="MahaLaxmi Borewell Testimonial image" />
                      <div className="testimonial-icon">
                        <Messenger />
                      </div>
                    </div>
                    <p className="fs-5 fst-italic" itemProp='description'>  There was no hindrance at work. Team worked sincerely with less supervision. They proved their skills.</p>
                    <hr className="w-25 mx-auto" />
                    <h5 itemProp='heading'>Mr. Karthik</h5>
                  </div>
                </Carousel>
              </div>
              <div className="col-lg-3 d-none d-lg-block">
                <div className="testimonial-right h-100">
                  <Image className="img-fluid wow border fadeIn" data-wow-delay="0.1s" src={Image2} alt="MahaLaxmi Borewell Testimonial image" itemProp='image' />
                  <Image className="img-fluid wow border fadeIn" data-wow-delay="0.3s" src={Image5} alt="MahaLaxmi Borewell Testimonial image" itemProp='image' />
                  <Image className="img-fluid wow border fadeIn" data-wow-delay="0.5s" src={Image6} alt="MahaLaxmi Borewell Testimonial image" itemProp='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}