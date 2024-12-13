import React from 'react'

const Education = () => {
  return (
    <div className='w-full flex h-[80vh] px-14 items-center'>
      <div className='w-[50%] '>
        <img src="media\images\education.svg" alt="" />
      </div>
      <div className='w-[50%] '>
        <h1 className='text-3xl font-semibold'>Free and open market education</h1>
        <p className='mt-7 text-zinc-600 leading-7 text-[17px] mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a className='text-blue-600 hover:text-black font-semibold' href="">Varsity  <i class="fa-solid fa-arrow-right-long"></i></a>
        <p className='mt-7 text-zinc-600 leading-7 text-[17px] mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a className='text-blue-600 hover:text-black font-semibold' href="">TradingQ&A  <i class="fa-solid fa-arrow-right-long"></i></a>
      </div>
    </div>
  )
}

export default Education