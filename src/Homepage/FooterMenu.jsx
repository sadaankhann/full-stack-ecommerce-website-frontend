import React from 'react'

const FooterMenu = () => {
  return (
    <div className='flex items-center w-full h-[240px] justify-evenly '>
      <div className='flex flex-col justify-center gap-5 h-full w-[20%] '>
        <div className='flex gap-3 items-center'>
          <img src="../src/assets/logo-symbol.png" alt="" className='h-[40px]' />
          <h2 className='text-xl text-[#8CB7F5] font-bold'>Brand</h2>
        </div>
        <p className='text-gray-500 text-sm'>Best information about the company gies here but now lorem ipsum is</p>
        <div className="flex gap-3">
          <img src="../src/assets/twitter_icon.png" className='h-[30px]' alt="" />
          <img src="../src/assets/linkedin_icon.png" className='h-[30px]' alt="" />
          <img src="../src/assets/facebook_icon.png" className='h-[30px]' alt="" />
          <img src="../src/assets/instagram_icon.png" className='h-[30px]' alt="" />
        </div>
      </div>
      <div className='grid grid-cols-5 w-[50%]'>
        <div>
          <h3 className='font-bold font-sans text-lg mb-4'>About Us</h3>
          <ul className='flex flex-col gap-2 text-sm text-gray-500'>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold font-sans text-lg mb-4'>About Us</h3>
          <ul className='flex flex-col gap-2 text-sm text-gray-500'>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold font-sans text-lg mb-4'>About Us</h3>
          <ul className='flex flex-col gap-2 text-sm text-gray-500'>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold font-sans text-lg mb-4'>About Us</h3>
          <ul className='flex flex-col gap-2 text-sm text-gray-500'>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold font-sans text-lg mb-4'>Get app</h3>
          <ul className='flex flex-col gap-4 text-sm text-gray-500'>
            <li><img src="../src/assets/app_store.png" alt="" className='bg-black p-1'/></li>
            <li><img src="../src/assets/google_play.png" alt="" className='bg-black p-1'/></li>
          </ul>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
    </div>
  )
}

export default FooterMenu
