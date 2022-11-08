import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

import '../design/navbar.css'
import '../design/homepage.css'
import '../design/service.css'
import '../design/common.css'
import '../design/home.css'
import '../design/testimonail.css'
import '../design/contactus.css'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
