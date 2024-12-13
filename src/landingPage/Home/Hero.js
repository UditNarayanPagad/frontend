import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full text-center px-2'>
      <img src="media/images/homeHero.png" alt="" className='md:w-[60%] w-[90%] mx-auto mt-28' />
      <h1 className='text-5xl font-semibold text-center mt-9'>Invest in everything</h1>
      <p className='text-xl text-center mt-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <Link to={"/signup"} className='bg-blue-500 py-2 hover:bg-black hover:text-white text-xl text-white rounded w-60 px-5 mt-9 inline-block'>Sign up for free</Link>
    </div>
  )
}

export default Hero