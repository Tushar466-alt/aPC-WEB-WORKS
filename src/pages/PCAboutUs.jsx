import React, { useEffect } from 'react'
import AboutUsWelCome from '../components/aboutUs-common/AboutUsWelCome'
import Quickview from '../components/aboutUs-common/Quickview'
import AboutWhatWeDo from '../components/aboutUs-common/AboutWhatWeDo'

const PCAboutUs = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <div>
      <AboutUsWelCome />
      {/* <Quickview /> */}
      <AboutWhatWeDo />
    </div>
  )
}

export default PCAboutUs
