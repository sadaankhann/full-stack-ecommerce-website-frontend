import React from 'react'

const Nav = () => {
    return (
        <div className='flex items-center bg-blue-200 h-[80px] pl-16 pr-16'>
            <div className='flex'>
                <div className="flex logo">
                    <img src="../src/assets/logo-symbol.png" className='h-[50px]' alt="" />
                    <h1>Brand</h1>
                </div>
                <div className="ml-20 searchBar">
                    <form action='/search'>
                        <input type="search" name="" id="" placeholder='Search' className='p-2 w-[340px] h-[30px] border-2 border-blue-500 rounded-sm' />
                        <select id="cars" name="cars">
                            <option value="volvo">Volvo</option>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button type='submit' className='bg-blue-600 text-white p-1 pl-3 pr-3'>Search</button>
                    </form>

                </div>
            </div>
            <div className='flex gap-5 items-center ml-auto justify-end p-4'>
                <div className='profile'>
                    <img src='../src/assets/Profile.png' className='h-[21px] block' alt="" />
                    Profile
                </div>
                <div className='message'>
                    <img src='../src/assets/Message.png' className='h-[21px] block' alt="" />
                    Messages
                </div>
                <div className='orders'>
                    <img src='../src/assets/Orders.png' className='h-[21px] block' alt="" />
                    Orders
                </div>
                <div className='myCart'>
                    <img src='../src/assets/MyCart.png' className='h-[21px] block' alt="" />
                    My Cart
                </div>
            </div>
        </div>
    )
}

export default Nav
