// import { useEffect, useState } from "react";

// export default function Navigation() {

//   const [clientWindowHeight, setClientWindowHeight] = useState();

//   const [backgroundTransparacy, setBackgroundTransparacy] = useState();
//   const [padding, setPadding] = useState(0);
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
//   const [isScrolled, setIsScrolled] = useState(false); 

//   return (
//     <section className={isScrolled ? "start-nav scrolled" : "start-nav"}>
//       <nav
//         class="navbar navbar-expand-lg navbar-light fixed-top "

//       >
//         <div class="container">
//           <a class="navbar-brand" id="logo" href="#">Mahalaxmi Borewell</a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation" >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//             <ul class="navbar-nav ">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">HOME</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">SERVICES</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">ABOUT US</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">GALLERY</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">VIDEOS</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">TESTIMONIALS</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">CONTACT</a>
//               </li>
//             </ul>

//           </div>
//         </div>
//       </nav>
//     </section>

//   );
// }


// import React from 'react'
// import { useState } from 'react';
// function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const useDeviceSize = () => {

//     const [width, setWidth] = useState(0)
//     const [height, setHeight] = useState(0)
  
//     const handleWindowResize = () => {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//     }
  
//     useEffect(() => {
//       // component is mounted and window is available
//       handleWindowResize();
//       window.addEventListener('resize', handleWindowResize);
//       // unsubscribe from the event on component unmount
//       return () => window.removeEventListener('resize', handleWindowResize);
//     }, []);
  
//     return [width, height]
  
//   }
//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };
//   return (
//     <div className={isScrolled ? "navbar scrolled" : "navbar"}>
//       <div className="container">
//         <nav class="navbar navbar-expand-lg navbar-light fixed-top "      >
//           <div class="container">
//             <a class="navbar-brand" id="logo" href="#">Mahalaxmi Borewell</a>
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
//           </div>
//           <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//            <ul class="navbar-nav ">
//                <li class="nav-item">
//                  <a class="nav-link active" aria-current="page" href="#">HOME</a>
//               </li>
//            <li class="nav-item">
//                 <a class="nav-link" href="#">SERVICES</a>
//              </li>
//                <li class="nav-item">
//                 <a class="nav-link" href="#">ABOUT US</a>
//                </li>
//                <li class="nav-item">
//                  <a class="nav-link" href="#">GALLERY</a>
//                </li>
//                <li class="nav-item">
//                 <a class="nav-link" href="#">VIDEOS</a>
//               </li>
//               <li class="nav-item">
//                  <a class="nav-link" href="#">TESTIMONIALS</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">CONTACT</a>
//                </li>
//              </ul>

//            </div>
//         </nav>
//       </div>
//     </div>
//   )
// }
// export default Navigation



// window.onscroll = () => {scrollNavbar()};

// scrollNavbar = () => {
//     // Target elements
//     const navBar = document.getElementById("navBar");
//     const links = document.querySelectorAll("#navBar a");

//   if (document.documentElement.scrollTop > 100) {
//     navBar.classList.add("pa-fixed-header");

//     // Change the color of links on scroll
//     for (let i = 0; i < links.length; i++) {
//         const element = links[i];
//         element.classList.add('text-black');
//     }

//   } else {
//     navBar.classList.remove("pa-fixed-header");
    
//     // Change the color of links back to default
//     for (let i = 0; i < links.length; i++) {
//         const element = links[i];
//         element.classList.remove('text-black');
//     }
//   }
// }



import React, { useState, Fragment } from 'react'
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './Window';
if (typeof window !== "undefined") {
  // browser code
  window.$ = window.jQuery = require("jquery");
}
const Navigation = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
      <section className='home'>
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
           <NavContainer>
              <NavLogo href="#">GeeksForGeeks</NavLogo>
              <MobileIcon>
               
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks href="#">About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Events</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Contact</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Sign In</NavLinks>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav>
        <div className="container">
            <div className="row mt-5 pt-5">
              <div className="col-8 mt-5">
                <h1 className='display-4'>BOREWELLS DRILLING EQUIPMENTS &</h1>
                <h1 className='display-4'> CONTRACTOR</h1>
              </div>
              <div className='container  mt-3 '>
                <div class="btn  button rounded-pill ">Enquire Now</div>
              </div>
            </div>
          </div>
      </section>
    )
}
  
export default Navigation;


