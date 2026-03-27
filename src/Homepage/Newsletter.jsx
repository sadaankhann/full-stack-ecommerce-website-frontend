import React from 'react'

const Newsletter = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-[300px] bg-[#EFF2F4]'>
            <h2 className='font-bold text-2xl font-sans'>Subscribe to our newsletter</h2>
            <p className='text-gray-500'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <form action="/newletter">
                <div className="flex gap-2 relative">
                    
                    <input type="email" name="email" id="email" className='pl-7 w-[300px] focus:pl-7 focus:placeholder-[#EFF2F4] outline-none border-1 border-[#333] rounded-sm' placeholder='Email' />

                    <button type="submit" className='bg-gradient-to-r from-[#127FFF] to-[#0067FF] p-2 text-white bg-blue-600 pl-5 pr-5 rounded-sm' >Subscribe</button>
                    <img src="../src/assets/Vector_5.png" className='h-[14px] absolute left-2 top-1/3 ' alt="" />
                </div>
            </form>
    </div >
  )
}

export default Newsletter
