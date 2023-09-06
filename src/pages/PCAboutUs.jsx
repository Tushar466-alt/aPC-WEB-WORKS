import React from 'react'
import AboutUsWelCome from '../components/aboutUs-common/AboutUsWelCome'
import Quickview from '../components/aboutUs-common/Quickview'
import AboutWhatWeDo from '../components/aboutUs-common/AboutWhatWeDo'
import PCFooter from '../components/footer/PCFooter'

const PCAboutUs = () => {
  return (
    <div>
      <AboutUsWelCome />
      <Quickview />
      <AboutWhatWeDo />
      <PCFooter />
    </div>
  )
}

export default PCAboutUs
