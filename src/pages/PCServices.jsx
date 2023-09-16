import React, { useEffect } from 'react';
import ServicesSub from "../components/services-common/ServicesSub"

const PCServices = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <div>
      <ServicesSub />
    </div>
  )
}

export default PCServices
