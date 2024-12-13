import React from 'react'

const Hero = () => {
  return (
    <div className='mt-16 mx-10'>
      <div className='py-20 text-center '>
        <h1 className='text-5xl font-semibold my-4'>Charges</h1>
        <p className='text-xl font-semibold text-zinc-400'>List of all charges and taxes</p>
      </div>
      <div className='h-[100vh] flex gap-3 justify-center'>
        <div className='py-11 px-2 text-center w-[30%] flex flex-col items-center gap-4'>
          <img src="media\images\pricing0.svg" alt="" className='w-[75%]'/>
          <h2 className='text-3xl font-semibold'>Free equity delivery</h2>
          <p className='text-lg text-zinc-500'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='py-11 px-2 text-center w-[30%] flex flex-col items-center gap-4'>
          <img src="media\images\intradayTrades.svg" alt="" className='w-[75%]'/>
          <h2 className='text-3xl font-semibold'>Intraday and F&O trades</h2>
          <p className='text-lg text-zinc-500'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='py-11 px-2 text-center w-[30%] flex flex-col items-center gap-4'>
          <img src="media\images\pricingMF.svg" alt="" className='w-[75%]'/>
          <h2 className='text-3xl font-semibold'>Free direct MF</h2>
          <p className='text-lg text-zinc-500'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero