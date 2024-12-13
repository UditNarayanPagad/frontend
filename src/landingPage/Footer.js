import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-16 py-10 border-[1px] border-zinc-200 bg-zinc-100 flex'>
      <div className='w-[25%] h-[50vh] '>
      <img src="media\images\logo.svg" alt="" className='w-36'/>
      <p className='mt-3 text-sm text-zinc-700'>© 2010 - 2024, Zerodha Broking Ltd. <br />
        All rights reserved.</p>
        <div>
          <div className='border-b-[1px] w-[90%] mt-3 h-10 border-zinc-200 gap-6 flex items-center'>
            <i class="fa-brands fa-x-twitter text-xl text-zinc-500"></i>
            <i class="fa-brands fa-facebook text-xl text-zinc-500"></i>
            <i class="fa-brands fa-instagram text-xl text-zinc-500"></i>
            <i class="fa-brands fa-linkedin text-xl text-zinc-500"></i>
          </div>
          <div className='flex items-center h-10 gap-6 mt-3'>
          <i class="fa-brands fa-youtube text-xl text-zinc-500"></i>
          <i class="fa-brands fa-whatsapp text-xl text-zinc-500"></i>
          <i class="fa-brands fa-telegram text-xl text-zinc-500"></i>
          </div>
        </div>
      </div>
      <div className='w-[25%] '>
        <h2 className='text-xl font-semibold'>Company</h2>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer mt-4'>About</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Products</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Pricing</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Referral programme</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Careers</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Zerodha.tech</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Press & media</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Zerodha Cares (CSR)</p>
      </div>
      <div className='w-[25%] '>
      <h2 className='text-xl font-semibold'>Support</h2>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer mt-4'>Contact us</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Support portal</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Z-Connect blog</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>List of charges</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Videos</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Downloads & resources</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Press & Market overview</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>How to file a complaint?</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Status of your complaints</p>
      </div>
      <div className='w-[25%] '>
      <h2 className='text-xl font-semibold'>Account</h2>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer mt-4'>Open an account</p>
        <p className='text-zinc-600 font-semibold my-1 hover:text-blue-600 cursor-pointer'>Fund transfer</p>
      </div>
    </div>
  )
}

export default Footer