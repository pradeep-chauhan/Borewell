import React from 'react'
import { Whatsapp } from 'react-bootstrap-icons'
import Image from 'next/image'
import Image1 from '../images/whatsapp (1).png'
import Typewriter from 'typewriter-effect';
const Homepage = () => {
  return (
    <section id='home'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-interval="10000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="image-1 homepage-image-2">
            </div>
          </div>
          <div class="carousel-item">
            <div class="image-1 homepage-image-1">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class=" move-text  card-move" >
  <h1> <Typewriter 
  options={{
    delay: 300,
  }}
        onInit={(typewriter) => {
          typewriter.typeString('BOREWELLS DRILLING')
            .callFunction(() => {
            })
            .start();
        }}
      /></h1>
        <h3 class="card-title homepage fs-2 mt-3">EQUIPMENTS AND CONTRACTORS</h3>
        <p class="fs-5 mt-3 ">We have been serving from past 32 years in udaipur</p>
        <div class="btn mt-3 homepage-btn button rounded-pill text-white px-4" ><a href="https://api.whatsapp.com/send?phone=919928845025">Enquire Now</a></div>
      </div>
      <div class="icon-bar">
        <a href="https://api.whatsapp.com/send?phone=919928845025" class="floating whatsapp whatsapp-img" target="_blank">
          <Image src={Image1} className="whatsapp-img"/>
        </a>
      </div>
    </section>
  )
}

export default Homepage