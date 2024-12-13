import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full flex px-16 h-[60vh] items-center '>
      <div className='w-[40%] '>
        <h1 className='text-3xl font-semibold'>Unbeatable pricing</h1>
        <p className='mt-7 text-zinc-600 leading-7 text-[17px] mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a className='text-blue-600 hover:text-black font-semibold' href="">See pricing  <i class="fa-solid fa-arrow-right-long"></i></a>
      </div>
      <div className='w-[60%] flex items-center'>
        <div className='w-[30%] flex items-end justify-center'><img src="media\images\pricing0.svg" alt="" className='w-[60%] '/><p className='text-xs -ml-7'>Free account opening</p></div>
        <div className='w-[35%] flex items-end justify-center'><img src="media\images\pricing0.svg" alt="" className='w-[50%] '/><p className='text-xs -ml-7'>Free equity delivery and direct mutual funds</p></div>
        <div className='w-[35%] p-4 gap-2 flex items-end'><img src="media\images\intradayTrades.svg" alt="" className='w-[60%] '/><p className='text-xs'>Intraday and <br /> F&O</p></div>
      </div>
    </div>
  )
}

export default Pricing