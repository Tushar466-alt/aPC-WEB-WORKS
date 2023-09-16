import React, { useEffect } from 'react';
import GetInTouch from "../components/contactus-comman/GetInTouch"

const PCContactUs = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <>
      <GetInTouch />
    </>
  )
}

export default PCContactUs
