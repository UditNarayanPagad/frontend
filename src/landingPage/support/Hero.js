import React from 'react'

const Hero = () => {
  return (
    <div className='mt-16 pb-16 px-18 bg-blue-500 text-white w-full'>
      <div className='p-16 flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Support Portal</h1>
        <a href="" className='text-lg border-b-[1px] hover:text-zinc-200 border-b-white'>Track tickets</a>
      </div>
      <div className='w-[50%] ml-16'>
        <h2 className='text-2xl mb-4 font-semibold'>Search for an answer or browse help topics to create a ticket</h2>
        <div className='w-full h-14 flex items-center '>
        <input className='h-full w-[93%] p-4 none outline-none text-black' type="text" placeholder='Eg: How do i activate F&O, why is my order getting rejected ... ' />
        <i class="fa-solid fa-magnifying-glass h-full w-[7%] flex justify-center items-center bg-white text-zinc-600 "></i>
        </div>
        <div className='flex w-full flex-wrap gap-3 mt-2'>
        <a href="" className='text-lg border-b-[1px] border-b-white'>Track account opening</a>
        <a href="" className='text-lg border-b-[1px] border-b-white'> Track segment activation</a> 
        <a href="" className='text-lg border-b-[1px] border-b-white'> Intraday margins</a> 
        <a href="" className='text-lg border-b-[1px] border-b-white'>Kite user manual</a>
        </div>
      </div>
    </div>
  )
}

export default Hero