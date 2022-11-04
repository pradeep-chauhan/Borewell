import React from 'react'
import Image from 'next/image'
import Image4 from '../images/aboutus.webp'
import Image5 from '../images/services1.jpg'
import Image6 from '../images/services2.webp'
import Image7 from '../images/services3.webp'
import Image8 from '../images/services4.webp'
import Image9 from '../images/gallery4.jpg'
const images = [
  { picture: Image9 },
  { picture: Image4 },
  { picture: Image5 },
  { picture: Image6 },
  { picture: Image7 },
  { picture: Image8 }
]
export default function Gallery() {
  return (
    <>
      <div className='container'>
        <div className="row pt-5">
          <div class="col-12">
            <h3 class="text-uppercase mb-4 text-center heading">Gallery</h3>
          </div>
          <div className='row'>
          {
                images.map(({ picture }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-4 col-xl-4 col-md-6 mt-3">
                    <Image key={picture} src={picture} className="gallery-images card-img-top img-fluid" />
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </>
  )
}