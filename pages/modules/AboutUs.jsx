import React from 'react'
import Image from 'next/image'
// import Image1 from '../images/Construction-pana.svg'
// import Image1 from '../images/aboutus1.jpg'
import Image1 from '../images/about.jpg'
import { Check2All } from 'react-bootstrap-icons'
const AboutUs = () => {
  return (
    <section id="about" class="about">
    <div class="container">

      <div class="section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>Magnam dolores commodi suscipit eius consequatur</p>
      </div>

      <div class="row">
        <div class="col-lg-6 " data-aos="fade-right">
          <div class="image">
           <Image className='img-fluid ' src={Image1}/>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="content pt-4 pt-lg-0 pl-0 pl-lg-3 mt-5 ">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><span className='mt-1 me-1 icon'><Check2All></Check2All></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><span className='mt-1 me-1 icon'><Check2All></Check2All></span> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><span className='mt-1 me-1 icon'><Check2All></Check2All></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default AboutUs