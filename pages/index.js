import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './modules/About'
import ContactUs from './modules/ContactUs'
import Footer from './modules/Footer'
import FooterWebsite from './modules/Footer-website'
import Gallery from './modules/Gallery'
import Homepage from './modules/Homepage'
import Navbar from './modules/Navbar'
import Products from './modules/Products'
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
        <meta property='og:keywords' content="Borewell,Tubewell,Best Borewell in Udaipur , Best Borewell in Rajasthan,Udaipur best borewell , Udaipur best borewell site , Udaipur best borewell machine , Udaipur best borewell company " key="keywords" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Navbar />
      <Homepage />
      <Services />
      <About></About>
      <Gallery />
      <Testimonial />
      <ContactUs />
      <Footer />
      <FooterWebsite />
      {/* <Products /> */}
    </div>
  )
}
