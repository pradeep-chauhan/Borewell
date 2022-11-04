import React from 'react'
import Image from 'next/image'
import Image1 from '../images/services1.jpg'
import Image2 from '../images/services2.webp'
import Image3 from '../images/services3.webp'
import Image4 from '../images/services4.webp'

const Services = () => {
  return (
    <section>
      <div class="container">
        <div class="row pt-5">
          <div class="col-12">
            <h3 class="text-uppercase mb-4 text-center heading">Services</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-3 d-flex align-items-stretch">
            <div class="card">
              <Image src={Image1} class="card-img-top img-fluid img-curve" alt="Card Image" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title sub-heading">Tube Well Drilling</h5>
                <p class="card-text mb-4 paragraph">We take pride to introduce ourselves as the best service provider in the field of tube well drilling.</p>
                <a href="#" class="btn btn-primary text-white mt-auto align-self-start button rounded-pill">Enquire Now</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-3 d-flex align-items-stretch">
            <div class="card">
              <Image src={Image2} class="card-img-top img-fluid img-curve" alt="Card Image" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title sub-heading">Ground Water Investigation</h5>
                <p class="card-text mb-4 paragraph">The services for groundwater survey are conducted through integrated investigation potential zones.</p>
                <a href="#" class="btn btn-primary text-white mt-auto align-self-start button rounded-pill">Enquire Now</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-3 d-flex align-items-stretch">
            <div class="card">
              <Image src={Image3} class="card-img-top img-fluid img-curve" alt="Card Image" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title sub-heading">Rain Water Harvesting Solution</h5>
                <p class="card-text mb-4 paragraph">Our expertise offers rainwater harvesting systems that comprise collection & storage of the rainwater.</p>
                <a href="#" class="btn btn-primary text-white mt-auto align-self-start button rounded-pill">Enquire Now</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-3 d-flex align-items-stretch">
            <div class="card">
              <Image src={Image4} class="card-img-top img-fluid img-curve" alt="Card Image" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title sub-heading">Water Refining Treatment</h5>
                <p class="card-text mb-4 paragraph">Water refining treatment is the process used to make water more acceptable for the desired end-user.</p>
                <a href="#" class="btn btn-primary text-white mt-auto align-self-start button rounded-pill">Enquire Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services