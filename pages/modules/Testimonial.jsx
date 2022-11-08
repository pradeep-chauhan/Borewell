import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import Image1 from '../images/people1.jpeg'
import Image2 from '../images/testimonial-3.jpg'
import Image3 from '../images/testimonial-1.jpg'
import Image4 from '../images/people4.jpg'
import Image5 from '../images/testimonial-2.jpg'
import { Messenger } from "react-bootstrap-icons";
export default class Testimonials extends Component {
  render() {
    return (
        <section class="container-xxl bg-color" >
          <div class="container-fluid bg-light " id="testimonial">
            <div class="container-fluid py-5">
              <h1 className='text-center service text-heading'>Testimonial</h1>
              <p className='paragraph text-center mb-5'>You Can See our clients feedback </p>
              <div class="row justify-content-center">
                <div class="col-lg-3 d-none d-lg-block">
                  <div class="testimonial-left h-100">
                    <Image class="img-fluid wow border fadeIn" data-wow-delay="0.1s" src={Image2} alt="" />
                    <Image class="img-fluid wow border fadeIn" data-wow-delay="0.3s" src={Image3} alt="" />
                    <Image class="img-fluid wow border fadeIn" data-wow-delay="0.5s" src={Image5} alt="" />
                  </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
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
                    <div class="owl-carousel testimonial-carousel">
                      <div class="testimonial-item text-center">
                        <div class="position-relative mb-5">
                          <Image class="w-25 h-25 rounded-circle border border-secondary p-2 mx-auto" src={Image2} />
                          <div class="testimonial-icon">
                            <Messenger></Messenger>
                          </div>
                        </div>
                        <p class="fs-5 fst-italic"> Cost involved in the project was clearly explained. It was reasonable enough. Installation was followed with accurate scientific method.</p>
                        <hr class="w-25 mx-auto" />
                        <h5>Mr. Praveen</h5>
                      </div>
                    </div>
                    <div class="owl-carousel testimonial-carousel">
                      <div class="testimonial-item text-center">
                        <div class="position-relative mb-5">
                          <Image class="w-25 h-25 rounded-circle border border-secondary p-2 mx-auto" src={Image3} />
                          <div class="testimonial-icon">
                            <Messenger></Messenger>
                          </div>
                        </div>
                        <p class="fs-5 fst-italic"> It's my pleasure gaining best information about process followed at installation. MahaLaxmi has expert Ground Water Surveyors to predict with accuracy.</p>
                        <hr class="w-25 mx-auto" />
                        <h5>Mr. Ravi</h5>
                      </div>
                    </div>
                    <div class="owl-carousel testimonial-carousel">
                      <div class="testimonial-item text-center">
                        <div class="position-relative mb-5">
                          <Image class="w-25 h-25 rounded-circle border border-secondary p-2 mx-auto" src={Image5} />
                          <div class="testimonial-icon">
                            <Messenger/>
                          </div>
                        </div>
                        <p class="fs-5 fst-italic">  There was no hindrance at work. Team worked sincerely with less supervision. They proved their skills.</p>
                        <hr class="w-25 mx-auto" />
                        <h5>Mr. Karthik</h5>
                      </div>
                    </div>
                  </Carousel>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                  <div class="testimonial-right h-100">
                    <Image class="img-fluid wow border fadeIn" data-wow-delay="0.1s" src={Image3} alt="" />
                    <Image class="img-fluid wow border fadeIn" data-wow-delay="0.3s" src={Image2} alt="" />
                    <Image class="img-fluid wow border fadeIn" data-wow-delay="0.5s" src={Image5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    );
  }
}












