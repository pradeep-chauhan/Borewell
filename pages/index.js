import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './modules/Homepage/Homepage'
import Services from './modules/Services'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Services />
      
    </div>
  )
}
