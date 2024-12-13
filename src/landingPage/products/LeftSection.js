import React from 'react'

const LeftSection = ({image,name,details,link1,link2}) => {
  return (
    <div className='px-20 py-7 flex justify-between'>
      <img src={image} alt="" className='' />
      <div className='w-[40%] p-14 gap-4 flex flex-col'>
        <h2 className='text-4xl font-semibold'>{name}</h2>
        <p className='text-[17px] leading-7'>{details}</p>
        <div className='flex items-center justify-start gap-5'>
          {link1 && <a className='text-blue-600 hover:text-black' href="">{link1} <i class="fa-solid fa-arrow-right-long"></i></a>}
          {link2 && <a className='text-blue-600 hover:text-black' href="">{link2} <i class="fa-solid fa-arrow-right-long"></i></a>}
        </div>
        <div className='flex gap-3'>
          <img src="\media\images\googlePlayBadge.svg" alt="" />
          <img src="\media\images\appstoreBadge.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LeftSection