import React, { useEffect } from 'react'
import PCComingsoon from './PCComingsoon'

const PCBlog = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <div>
      <PCComingsoon />
    </div>
  )
}

export default PCBlog
