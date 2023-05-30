import React from 'react'
import Stats from './Stats'
 
function Hero() {
  return (
    <div className='h-[850px] w-full bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] custom-img relative mb-12 lg:bg-center lg:mb-28'>
      {/* overlay */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
      <div className='container mx-auto text-center'>
        <h1 className='text-3xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight 
        lg:max-w-[888px]'>Simple Home</h1>
        <h2 className='text-[#A05200] mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>Level up your home with morden designs</h2>
        <button className='bg-white-transparent-40 hover:bg-white-transparent-50 px-[35px]
        py-[9px] mb-[160px] text-xl rounded-md backdrop:blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>SHOP NOW</button>

    <div> 
        <Stats />
    </div>
    </div>
    </div>
  )
}

export default Hero
