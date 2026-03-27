import React from 'react'

const Categories = () => {
  return (
    <div className='h-[180px] w-[100%]'>
      <h3 className='text-sm font-bold'>Category</h3>
      <ul className='mt-3 flex flex-col gap-2 text-gray-600 text-sm'>
        <li>Mobile accessory</li>
        <li>Electronics</li>
        <li>Smartphones</li>
        <li>Mobile tech</li>
        <p className='text-[#0D6EFD] mb-2'>See all</p>
      </ul>
      <hr className='border-gray-300'></hr>
    </div>
  )
}

export default Categories
