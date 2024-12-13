import React from 'react'
import { Link } from 'react-router-dom'

const OpenAccount = () => {
  return (
    <div className='text-center h-[50vh] '>
      <h1 className='text-3xl font-semibold'>Open a Zerodha account</h1>
      <p className='mt-7 text-zinc-600 text-[17px] mb-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <Link to={"/signup"} className='bg-blue-500 py-2 hover:bg-black hover:text-white text-xl text-white rounded w-60 px-5 mt-9 inline-block'>Sign up for free</Link>
    </div>
  )
}

export default OpenAccount