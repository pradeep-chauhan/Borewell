// import React from 'react'
// import Image from 'next/image'
// import Image1 from '../images/location.png'
// import Image2 from '../images/contactus2.png'
// import Image3 from '../images/contactus3.png'
// import Image4 from '../images/contactus4.png'

// const ContactUs = () => {
//   return (
//     <section>
//       <div class="container">
//         <div class="row pt-5">
//           <div class="col-12">
//             <h3 class="text-uppercase mb-4 text-center heading">Contact us</h3>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col'>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14529.2940673613!2d73.925506!3d24.4395586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967c0c89381f373%3A0x3d61c5ac06b2bf9a!2sThe%20Gurukul%20college%20%26%20School!5e0!3m2!1sen!2sin!4v1666853344782!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//           </div>
//           <div className='col'>
//             <div className='row'>
//               <div className=' col-md-12 col-xs-12'>
//                 <div className='row'>
//                   <div className='col-md-2 col-xl-2 col-lg-2 col-sm-2'>
//                     <Image src={Image1} className='img-fluid img-curve' />
//                   </div>
//                   <div className='col-md-10 col-xl-10 col-lg-10 col-sm-10'>
//                     <h6>Our Office Address</h6>
//                     <p>648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024</p>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <div className='col-md-2 col-xl-2 col-lg-2 col-sm-2'>
//                     <Image src={Image2} className='img-fluid img-curve' />
//                   </div>
//                   <div className='col-md-10 col-xl-10 col-lg-10 col-sm-10'>
//                     <h6>Our Office Address</h6>
//                     <p>648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024</p>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <div className='col-md-2 col-xl-2 col-lg-2 col-sm-2'>
//                     <Image src={Image3} className='img-fluid img-curve' />
//                   </div>
//                   <div className='col-md-10 col-xl-10 col-lg-10 col-sm-10'>
//                     <h6>Our Office Address</h6>
//                     <p>648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024</p>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <div className='col-md-2 col-xl-2 col-lg-2 col-sm-2'>
//                     <Image src={Image4} className='img-fluid img-curve' />
//                   </div>
//                   <div className='col-md-10 col-xl-10 col-lg-10 col-sm-10'>
//                     <h6>Our Office Address</h6>
//                     <p>648, Zinc Smelter, Debari, near manisha medical, Udaipur, Rajasthan 313024</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='row mt-5'>
//           <form>
//             <div className='row'>
//               <div className='col'>
//                 <div className='row'>
//                   <div className='row'>
//                     <div class="mb-3">
//                       <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' />
//                     </div>
//                   </div>
//                   <div className='row'>
//                     <div class="mb-3">
//                       <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Phone Number' />
//                     </div>
//                   </div>
//                   <div className='row'>
//                     <div class="mb-3">
//                       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className='row'>
//                   <div class="mb-3">
//                     <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows={5} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='text-center'>
//                 <a href="#" class="btn btn-primary text-white mt-auto align-self-start button rounded-pill text-center">Enquire Now</a>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs




// import React from 'react'
// import Image from 'next/image'
// import Image1 from '../images/Call center.gif'
// // import Image1 from '../images/Call-center-cuate.svg'
// function handleSubmit(e){
// e.preventDefault()
//   alert("we will contact you shortly")
// }
// const ContactUs = () => {
//   return (
//     <section>
//       <div className='container'>
//         <div className='row pt-5'>
//           <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12'>
//             <Image src={Image1} className='img-fluid img-curve' />
//           </div>
//           <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12'>
//             <h2 className='heading text-center'>Get In Touch</h2>
//             <p className='paragraph text-center'>We are here for you. How we can help?</p>
//             <form className="form-info">
//               <div className="mb-3">
//                 <label for="exampleInputName" className="form-label" name="name">Name</label>
//                 <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleInputEmail1" className="form-label" name="email" >Email address</label>
//                 <input type="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Phone Number' />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleInputEmail1" className="form-label" name="email" >Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
//               </div>
//               <div className="mb-3">
//                 <label for="message" className="form-label" name="message" >Message</label>
//                 <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Message'  />
//               </div>
//               <button type="submit" onClick={(e) => { handleSubmit(e) }} className="btn btn-primary text-white mt-auto align-self-start button text-center  form-control">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs





import React from 'react'
import Image from 'next/image'
import Image1 from '../images/Call center.gif'
// import Image1 from '../images/Call-center-cuate.svg'
function handleSubmit(e){
e.preventDefault()
  alert("we will contact you shortly")
}
const ContactUs = () => {
  return (
    <section>
      <div className='container'>
        <div className='row pt-5'>
          <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12'>
            <Image src={Image1} className='img-fluid img-curve' />
          </div>
          <div className='col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-12'>
            <h2 className='heading text-center'>Get In Touch</h2>
            <p className='paragraph text-center'>We are here for you. How we can help?</p>
            <form className="form-info">
              <div className="mb-3">
                <label for="exampleInputName" className="form-label" name="name">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label" name="email" >Email address</label>
                <input type="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Phone Number' />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label" name="email" >Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label" name="message" >Message</label>
                <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Message'  />
              </div>
              <button type="submit" onClick={(e) => { handleSubmit(e) }} className="btn btn-primary text-white mt-auto align-self-start button text-center  form-control">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs