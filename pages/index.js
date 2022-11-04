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
        <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Borewell | Bore water | Groundwater | Drilledwell | Tubewell" key="title" />
        <meta property="og:description" content="Borewells - The borewell is now perhaps the most common source of water in urban India. These are wells dug deep into the ground to tap into water-bearing soil or rock layers termed aquifers. Borewells typically draw water from “confined deep aquifers”, i.e., rock layers deep underground, where water is trapped under pressure between the cracks of rocks. These aquifers are formed over many years, sometimes even centuries, due to water percolating down the rock layers." key="desc" />
        <meta property='og:keywords' content="Borewll,Tubewell,Best Borewell in Udaipur , Best Borewell in Rajasthan,Udaipur best borewell , Udaipur best borewell site , Udaipur best borewell machine , Udaipur best borewell company " key="keywords" />
      </Head>
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
