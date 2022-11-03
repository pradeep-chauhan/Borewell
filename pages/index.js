import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutUs from './modules/AboutUs'
import Gallery from './modules/Gallery'
import Navbar from './modules/Homepage/Homepage'
import Services from './modules/Services'
import Videos from './modules/Videos'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Services />
      <AboutUs />
      <Gallery />
      <Videos />
      
    </div>
  )
}
