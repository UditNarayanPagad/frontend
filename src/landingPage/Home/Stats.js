import React from 'react'

const Stats = () => {
  return (
    <div className='w-full flex px-16'>
      <div className='w-[40%] '>
        <h1 className='text-4xl font-semibold'>Trust with confidence</h1>
        <div className='w-full mt-4'>
          <h2 className='text-xl font-semibold'>Customer-first always</h2>
          <p className='mt-2 text-zinc-600 leading-7 text-[17px]'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
        </div>
        <div className='w-full mt-4'>
          <h2 className='text-xl font-semibold'>No spam or gimmicks</h2>
          <p className='mt-2 text-zinc-600 leading-7 text-[17px]'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
        </div>
        <div className='w-full mt-4'>
          <h2 className='text-xl font-semibold'>The Zerodha universe</h2>
          <p className='mt-2 text-zinc-600 leading-7 text-[17px]'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        </div>
        <div className='w-full mt-4'>
          <h2 className='text-xl font-semibold'>Do better with money</h2>
          <p className='mt-2 text-zinc-600 leading-7 text-[17px]'>With initiatives like <a href="" className='text-blue-600'>Nudge</a> and <a href="" className='text-blue-600'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
      </div>
      <div className='w-[60%] text-center'>
        <img src="media\images\ecosystem.png" alt=""  className='h-[90%]'/>
        <div className='flex items-center justify-center gap-5'>
          <a className='text-blue-600 hover:text-black' href="">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
          <a className='text-blue-600 hover:text-black' href="">Try Kite demo  <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Stats