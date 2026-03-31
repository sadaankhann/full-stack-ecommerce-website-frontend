import React, { useState } from 'react'

const HeroSection = () => {

    const [selectedList, setSelectedList] = useState(null);

    const [items, setItems] = useState(["Automobiles", "Clothes and wear", "Home interiors", "Comouter and tech", "Tools, equipments", "Sports and outdoor", "Animals and pets", "Machinery tools", "More category"]);

    return (
        <div className='flex h-[480px] w-full border border-gray-300 rounded-sm'>
            <div className='h-full w-[23%]'>
                <ul className='flex flex-col list-none p-4 gap-2'>
                    {items.map((item, index) => (
                        <li key={index} className={`${(selectedList == item) ? 'bg-blue-300' : 'none'} p-2 `} onClick={() => setSelectedList(item)}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className={`h-full w-[52%] bg-blue-400 bg-no-repeat bg-cover bg-right`} style={{ backgroundImage: "url(../src/assets/banner.png)" }}>
                <div className='flex flex-col gap-7 relative top-17 left-14'>
                    <h2 className='text-3xl'>Latest trending</h2>
                    <h3 className='text-3xl font-bold'>Electronic <input type="button" value="" />tems</h3>
                    <button className='w-[140px] bg-white text-black font-bold p-1 pl-3 pr-3 rounded-sm'>Learn More</button>
                </div>
            </div>
            <div className='flex flex-col gap-4 h-full w-[25%] p-3'>
                <div className='flex flex-col gap-3 rounded-sm w-full h-[48%] p-4'>
                    <div className='flex p-5 gap-4 justify-center items-center text-xl'>
                        <img className='rounded-full h-[60px] ' src="../src/assets/noprofilepicture.jpg" alt="" />
                        <div>
                            <h3>Hi, User</h3>
                            <h3>Let's get started</h3>
                        </div>
                    </div>
                    <div> 
                        <button className='flex justify-center w-full p-1 flex flex-1 bg-blue-500 text-white rounded-sm'>Join now</button>
                    </div>
                    <div>
                        <button className='flex justify-center w-full p-1 flex bg-gray-500 text-blue-600 bg-white rounded-sm'>Log in</button>
                    </div>
                </div>
                <div className='rounded-sm text-white p-4 text-xl flex justify-center items-center w-full h-[26%] bg-[#F38332]'>
                    <p>Get US $10 off with a new supplier</p>
                </div>
                <div className='rounded-sm text-white p-4 text-xl flex justify-center items-center w-full h-[26%] bg-[#55BDC3]'>
                    <p>Send quotes with supplier preferences</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
