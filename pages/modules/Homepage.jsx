import React from 'react'
const Navbar = () => {
  return (
    <section className='home'>
      <div className='container'>
        <nav class="navbar navbar-expand-lg " id="navbar-2">
          <div class="container-fluid">
            <a class="navbar-brand" id="logo" href="#">Borewell</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SERVICES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">GALLERY</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">VIDEOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">TESTIMONIALS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CONTACT</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-8 mt-5">
              <h1 className='display-5'>Trusted and reliable</h1>
              <h2 className='display-4'>Borewell Contractors</h2>
            </div>
            <div className='container  mt-3 '>
              <div class="btn  button rounded-pill ">Enquire Now</div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default Navbar


/*slider

//     import React from 'react'
// import { Nav } from 'react-bootstrap'

// const Navbar = () => {
//   return (
//     <section className=''>
//       <div className='container'>
//         <nav class="navbar navbar-expand-lg " id="navbar-2">
//           <div class="container-fluid">
//             <a class="navbar-brand" id="logo" href="#">Borewell</a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation" >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//               <ul class="navbar-nav ">
//                 <li class="nav-item">
//                   <a class="nav-link active" aria-current="page" href="#">HOME</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">SERVICES</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">ABOUT US</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">GALLERY</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">VIDEOS</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">TESTIMONIALS</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">CONTACT</a>
//                 </li>
//               </ul>

//             </div>
//           </div>
//         </nav>
//         * <div className="container">
//           <div className="row mt-5 pt-5">
//             <div className="col-8 mt-5">
//               <h1 className='display-5'>Trusted and reliable</h1>
//               <h2 className='display-4'>Borewell Contractors</h2>
//             </div>
//             <div className='container  mt-3 '>
//               <div class="btn btn-info button rounded-pill ">Enquire Now</div>
//             </div>
//           </div>
//         </div> *
//       </div >

//       <div id="carouselExampleControls" class="carousel slide" data-bs-interval="5000" data-bs-ride="carousel">
//           <div class="carousel-inner">

//             <div class="carousel-item active">
//               <div class="home-1"
//               >
//                 <div class="card-homepage" >
//                   <div class="card-body">
//                     <h5 class="card-title">Beautiful Website For<br />

//                       Your School</h5>
//                     <p class="card-text">Contrary to popular belief, consectetur adipiscing elit. Sed id

//                       egestas eros. uris blandit felis mauris, vitae faucibus libero

//                       iaculis id. Nullam sollicitudin sem</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div class="home"
//               >
//                 <div class="card-homepage" >
//                   <div class="card-body">
//                     <h5 class="card-title">Beautiful Website For<br />

//                       Your School</h5>
//                     <p class="card-text">Contrary to popular belief, consectetur adipiscing elit. Sed id

//                       egestas eros. uris blandit felis mauris, vitae faucibus libero

//                       iaculis id. Nullam sollicitudin sem</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>

//     </section >
    
//   )
// }

// export default Navbar
*/