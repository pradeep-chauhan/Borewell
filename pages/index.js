import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './modules/About'
import ContactUs from './modules/ContactUs'
import FooterWebsite from './modules/Footer'
import Gallery from './modules/Gallery'
import Homepage from './modules/Homepage'
import Navbar from './modules/Navbar'
import Services from './modules/Services'
import Testimonial from './modules/Testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <title> Malalaxmi Borewell | Bore water | Groundwater | Drilledwell | Tubewell</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Borewell | Bore water | Groundwater | Drilledwell | Tubewell" key="title" />
        <meta property="og:description" content="Mahalaxmi Borewells - Leading Borewell Drilling Service Provider in Udaipur. We Offer an Unmatched Borewell Drilling Services since 1990. We use World Class Technology Machinery to provide Borewell Services which is available at minimum price.  The diameter of our borewell ranges from 4.5 to 6 inches. Mahalaxmi Borewells typically draw water from “confined deep aquifers”, i.e., rock layers deep underground, where water is trapped under pressure between the cracks of rocks. These aquifers are formed over many years, sometimes even centuries, due to water percolating down the rock layers." key="desc" />
        <meta property="og:image" content="https://mahalaxmiborewell.in/borewell.svg" />
        <meta property="og:url" content="https://mahalaxmiborewell.in/"/>
        <meta property='og:keywords' content="Mahalaxmi Borewell, Mahalaxmi Tubewell, Best Borewell in Udaipur, Udaipur best borewell, Udaipur best borewell machine, Udaipur best borewell company, borewell drilling contractors in udaipur, Borewell Contractor Udaipur, borewell drilling cost in Udaipur, borewell agencies in udaipur" key="keywords" />

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
      <FooterWebsite />
    </div>
  )
}
