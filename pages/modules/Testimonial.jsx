import React from 'react'
import Image from 'next/image'
import Image1 from '../images/people1.jpeg'
import Image2 from '../images/people2.webp'
import Image3 from '../images/people3.webp'
function Testimonial() {
    return (
        <>
            <div>
                <div className="container">
                    <div class="row pt-5">
                        <div class="col-12">
                            <h3 class="text-uppercase mb-4 text-center heading">Testimonial</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12 d-flex justify-content-center">
                            <div className="card card-testimonial d-flex justify-content-center">
                                <div className="face front-face">
                                    <Image src={Image1} className="profile" />
                                    <div className="pt-3 text-uppercase name">
                                        Robert Garrison
                                    </div>
                                    <div className="designation">Android Developer</div>
                                </div>
                                <div className="face back-face">
                                    <span className="fas fa-quote-left"></span>
                                    <div className="testimonial">
                                        I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                                        pleasant.
                                        The service was execellent. I will refer everyone I know.
                                    </div>
                                    <span className="fas fa-quote-right"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12 d-flex justify-content-center">
                            <div className="card card-testimonial">
                                <div className="face front-face">
                                    <Image src={Image2} className="profile" />
                                    <div className="pt-3 text-uppercase name">
                                        Jeffery Kennan
                                    </div>
                                    <div className="designation">Full Stack Developer</div>
                                </div>
                                <div className="face back-face">
                                    <span className="fas fa-quote-left"></span>
                                    <div className="testimonial">
                                        Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                                        man, this thing is getting better and better as I learn more about it.
                                    </div>
                                    <span className="fas fa-quote-right"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12 d-flex justify-content-center">
                            <div className="card card-testimonial">
                                <div className="face front-face">
                                    <Image src={Image3} className="profile" />
                                    <div className="pt-3 text-uppercase name">
                                        Issac Maxwell
                                    </div>
                                    <div className="designation">Finance Director</div>
                                </div>
                                <div className="face back-face">
                                    <span className="fas fa-quote-left"></span>
                                    <div className="testimonial">
                                        Account keeper is the most valuable business research we have EVER purchased. Without
                                        electrician, we would ahave gone bankrupt by now.
                                    </div>
                                    <span className="fas fa-quote-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial