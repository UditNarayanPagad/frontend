import React from 'react'

const Hero = () => {
  return (
    <div className='mt-16 '>
      <div className='p-20 text-center flex flex-col gap-6 border-b-[1px] border-zinc-200'>
        <h1 className='text-5xl font-semibold'>Zerodha Products</h1>
        <h2 className='text-xl'>Sleek, modern, and intuitive trading platforms</h2>
        <p>Check out our <a href="" className='text-blue-500 hover:text-black text-base text-semibold'>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
      </div>
    </div>
  )
}

export default Hero