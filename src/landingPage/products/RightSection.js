import React from 'react'

const RightSection = ({image,name,details,link1}) => {
  return (
    <div className='px-20 py-5 flex justify-between items-center'>
      <div className='w-[40%] p-14 gap-4 flex flex-col'>
        <h2 className='text-4xl font-semibold'>{name}</h2>
        <p className='text-[17px] leading-7'>{details}</p>
        <div className='flex items-center justify-start gap-5'>
          {link1 && <a className='text-blue-600 hover:text-black' href="">{link1} <i class="fa-solid fa-arrow-right-long"></i></a>}
        </div>
      </div>
      <img src={image} alt="" className='' />
    </div>
  )
}

export default RightSection