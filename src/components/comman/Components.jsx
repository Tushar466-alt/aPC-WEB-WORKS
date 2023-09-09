import React from 'react';

const Component = ({className, children}) => {
  return (
    <>
      <div className={`${className} xl:px-16 lg:px-16 sm:px-4 md:px-4 py-10 lg:py-16 xl:py-16`}>{children}</div>
    </>
  )
}

export default Component;
