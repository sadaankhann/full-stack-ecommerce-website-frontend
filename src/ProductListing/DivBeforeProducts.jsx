import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ProductsArray'
import { useState } from 'react'
import { ViewDetails } from './AllProducts'



const DivBeforeProducts = () => {
  const {view, setView} = useContext(ViewDetails);
  return (
    <div className='flex pl-3 pr-3 justify-between items-center h-[40px] w-full text-sm'>
      <div>12,911 items in <b>Mobile accessory</b></div>
      <div className='flex gap-1'>
        <input type="checkbox" name="verfied" id="true" />Verfied only
        <select name="" id="">
            <option value="">Featured</option>
            <option value="">Recommended</option>
            <option value="">Best Selling</option>
        </select>
        <div className='flex justify-center items-center gap-2 p-1 border-1 border-gray-300'>
            <img src="../src/assets/grid_view.png" className='h-[14px]' alt="" onClick={()=>{
              setView('grid')
            }} />
            <img src="../src/assets/list_view.png" className='h-[14px]' alt="" onClick={()=>{
              setView('flex')
            }}/>
        </div>
      </div>
    </div>
  )
}

export default DivBeforeProducts
