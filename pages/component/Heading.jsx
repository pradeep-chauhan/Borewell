import React from 'react'

const Heading = (props) => {
  const {heading = "", subHeading = ""} = props
  console.log(props, 'props')
  return (
    <div className={`text-center mx-auto ${subHeading ? 'mb-5' : 'mb-3'} wow fadeInUp`} data-wow-delay="0.1s">
      <h6 className="text-heading">{heading}</h6>
      <p className="paragraph text-center">{subHeading}</p>
    </div>
  )
}

export default Heading