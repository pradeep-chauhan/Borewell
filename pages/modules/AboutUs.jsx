import React from 'react'
import Image from 'next/image'
<<<<<<< HEAD
<<<<<<< HEAD
// import Image1 from '../images/Construction-pana.svg'
import Image1 from '../images/aboutus1.jpg'

const AboutUs = () => {
  return (
    <div>
      <div className='container pt-5'>
        <div className='row'>

          <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 aboutus-image'>
            <div className="aboutus-img">
              <Image src={Image1} className='img-fluid img-curve' />
            </div>
          </div>
          <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 '>
            <h3 class="text-uppercase mb-4 text-center mt-2 heading service">About Us</h3>
            <p className='paragraph'>We, Mahalaxmi Borewell, situated at Udaipur, Rajasthan are recognized as one of the most reliable multi-disciplinary drilling contractors. We are known for our trustworthy services of soil testing, borewell, drilling and industrial drillings, etc. Our company is backed by trained and devoted experts that keep updating themselves with all the latest industrial technologies. For past 5 years, we have been solving borewell crisis in Udaipur. </p>
=======
import Image1 from '../images/about.jpg'
import { Check2, Check2All } from 'react-bootstrap-icons'
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
=======
import Image1 from '../images/about.jpg'
import { Check2, Check2All } from 'react-bootstrap-icons'
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
>>>>>>> c35c033 (gallary and service section updated)
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
<<<<<<< HEAD
>>>>>>> c35c033 (gallary and service section updated)
=======
>>>>>>> c35c033 (gallary and service section updated)
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default AboutUs