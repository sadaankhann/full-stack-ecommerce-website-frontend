import React from 'react'

const Nav_1 = () => {
    return (
        <div className='flex items-center bg-blue-100 h-[70px] w-[92%] pl-3 pr-3 bg-white border border-gray-300 rounded-sm mt-3'>
            <div className='flex'>
                <div className="flex justiy-center items-center gap-2 logo">
                    <img src="../src/assets/logo-symbol.png" className='h-[40px]' alt="" />
                    <h1 className='text-xl text-[#8CB7F5] font-bold'>Brand</h1>
                </div>
                <div className="flex justiy-center items-center gap-2 ml-20 searchBar">
                    <form action='/search'>
                        <input
                            type="search"
                            placeholder='Search'
                            className='w-[300px] max-xl:w-[220px] p-2 h-[30px] border-2 border-blue-500 rounded-l-sm outline-none'
                        />
                        <select id="cars" className='p-1 pl-3 pr-3 border border-gray-300' name="cars">
                            <option value="volvo">Volvo</option>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button type='submit' className='rounded-r-sm bg-blue-600 text-white p-1 pl-3 pr-3'>Search</button>
                    </form>

                </div>
            </div>
            <div className='flex gap-5 items-center ml-auto justify-end p-4 text-[14px]'>
                <div className="flex justify-center items-center gap-4">
                    <div className='profile'>
                        <img src='../src/assets/Profile.png' className='h-[19px] block' alt="" />
                        Profile
                    </div>
                    <div className='message'>
                        <img src='../src/assets/Message.png' className='h-[19px] block' alt="" />
                        Messages
                    </div>
                    <div className='orders'>
                        <img src='../src/assets/Orders.png' className='h-[19px] block' alt="" />
                        Orders
                    </div>
                    <div className='myCart'>
                        <img src='../src/assets/MyCart.png' className='h-[19px] block' alt="" />
                        My Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav_1
