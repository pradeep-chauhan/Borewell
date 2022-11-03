import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutUs from './modules/AboutUs'
import ContactUs from './modules/ContactUs'
import Footer from './modules/Footer'
import FooterWebsite from './modules/Footer-website'
import Gallery from './modules/Gallery'
import Navbar from './modules/Homepage/Homepage'
import Services from './modules/Services'
import Testimonial from './modules/Testimonial'
import Videos from './modules/Videos'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Services />
      <AboutUs />
      <Gallery />
      {/* <Videos /> */}
      <Testimonial />
      <ContactUs />
      <Footer />
      <FooterWebsite />
    </div>
  )
}
