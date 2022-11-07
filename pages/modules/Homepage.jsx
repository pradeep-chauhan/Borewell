// import React from 'react'
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [clientWindowHeight, setClientWindowHeight] = useState();

//   const [backgroundTransparacy, setBackgroundTransparacy] = useState();
//   const [padding, setPadding] = useState();
//   const [boxShadow, setBoxShadow] = useState(0);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   });

//   const handleScroll = () => {
//     setClientWindowHeight(window.scrollY);
//   };

//   useEffect(() => {
//     let backgroundTransparacyVar = clientWindowHeight / 600;

//     if (backgroundTransparacyVar < 1) {
//       let paddingVar = 10 - backgroundTransparacyVar * 20;
//       let boxShadowVar = backgroundTransparacyVar * 0.1;
//       setBackgroundTransparacy(backgroundTransparacyVar);
//       setPadding(paddingVar);
//       setBoxShadow(boxShadowVar);
//     }
//   }, [clientWindowHeight]);
//   return (

//     <section className='home' >
//       <div>
//         <div className='container'>
//           {/* <nav class="navbar navbar-expand-lg " id="navbar-2">

//             <div class="container-fluid positio">
//               <a class="navbar-brand" id="logo" href="#">Mahalaxmi Borewell</a>
//               <button
//                 class="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation" >
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               <div class="collapse navbar-collapse justify-content-center ms-5" id="navbarSupportedContent">
//                 <ul class="navbar-nav ">
//                   <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">HOME</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">SERVICES</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">ABOUT US</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">GALLERY</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">VIDEOS</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">TESTIMONIALS</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">CONTACT</a>
//                   </li>
//                 </ul>

//               </div>
//             </div>
//           </nav> */}
//           {/* <nav
//             class="navbar navbar-expand-lg navbar-light fixed-top "
//             style={{
//               background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
//               padding: `${padding}px 0px`,
//               boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
//             }}
//           >
//             <div class="container">
//               <a class="navbar-brand" id="logo" href="#">Mahalaxmi Borewell</a>
//               <button
//                 class="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation" >
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//                 <ul class="navbar-nav ">
//                   <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">HOME</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">SERVICES</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">ABOUT US</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">GALLERY</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">VIDEOS</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">TESTIMONIALS</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">CONTACT</a>
//                   </li>
//                 </ul>

//               </div>
//             </div>
//           </nav> */}
//           {/* <div class="container-fluid">
//       <nav class="navbar navbar-expand-lg fixed-top bg-transparent mx-5">
//         <a class="navbar-brand text-black" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a class="nav-link text-black active" aria-current="page" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link text-black" href="#">Features</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link text-black" href="#">Pricing</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link text-black" href="#">Features</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link text-black" href="#">Features</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div> */}
//           <div className="container">
//             <div className="row mt-5 pt-5">
//               <div className="col-8 mt-5">
//                 <h1 className='display-4'>BOREWELLS DRILLING EQUIPMENTS &</h1>
//                 <h1 className='display-4'> CONTRACTOR</h1>
//               </div>
//               <div className='container  mt-3 '>
//                 <div class="btn  button rounded-pill ">Enquire Now</div>
//               </div>
//             </div>
//           </div>
//         </div ></div>
//     </section >
//   )
// }

// export default Navbar


import React from 'react'

const Homepage = () => {
  return (
    <section class="home">
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
              <div class="card move-text opacity-75 card-move" >
                <div class="card-body">
                  <h5 class="card-title fs-2">BOREWELLS DRILLING EQUIPMENTS &<br />
                    CONTRACTOR</h5>
                    <div class="btn  button rounded-pill text-white px-4">Enquire Now</div>

                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="image-1 homepage-image-1">
              <div class="card move-text opacity-75 card-move">
                <div class="card-body">
                  <h5 class="card-title fs-2">BOREWELLS DRILLING EQUIPMENTS &<br />
                    CONTRACTOR</h5>
                  <div class="btn  button rounded-pill text-white px-4">Enquire Now</div>
                </div>
              </div>
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
    </section>
  )
}

export default Homepage