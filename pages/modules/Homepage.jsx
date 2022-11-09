import React from 'react'
import { Whatsapp } from 'react-bootstrap-icons'
import Image from 'next/image'
import Image1 from '../images/whatsapp.png'
const Homepage = () => {
  return (
    <section >
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
        <h5 class="card-title fs-2">BOREWELLS DRILLING EQUIPMENTS</h5>
        <h5 class="card-title fs-2 mt-3">CONTRACTOR</h5>
        <div class="btn mt-3 button rounded-pill text-white px-4">Enquire Now</div>
      </div>
      <div class="icon-bar">
        <a href="https://api.whatsapp.com/send?phone=919928845025" class="floating whatsapp" target="_blank">
          <Image src={Image1} />
        </a>
      </div>
    </section>
  )
}

export default Homepage