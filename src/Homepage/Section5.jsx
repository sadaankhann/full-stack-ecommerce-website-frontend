import React from 'react';

const Section5 = () => {
    return (
        <div
            className="flex justify-between h-[400px] w-full bg-cover bg-center p-8"
            style={{
                backgroundImage: `linear-gradient(to right, #2C7CF1, #00D1FF80), url(../src/assets/Section5.png)`
            }}
        >
            <div className='flex flex-col gap-7 text-white w-[40%]'>
                <h2 className='font-bold text-3xl font-arial'>An easy way to send requests to all suppliers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p></div>
            <div className='flex flex-col gap-5 p-3 pl-5 h-[100%] w-[400px] bg-white'>
                <form action="/mailform">
                    <div>
                        <h2 className='p-2 font-bold'>Send quotes to suppliers</h2>
                        <h3 className='mt-4 p-2 border-1 border-gray-200'>What item you need?</h3>
                        <input className='mt-5 w-full h-[90px] p-2 border-1 border-gray-200 outline-none' type="text" name="" placeholder='Type for more details' id="" />
                    </div>
                    <div className='flex mt-3 mb-2'>
                        <h3 className='p-2 w-[150px] border-1 border-gray-200'>Quantity</h3>
                        <select name="" id="">
                            <option value="">1 Piece</option>
                            <option value="">2 Piece</option>
                            <option value="">3 Piece</option>
                            <option value="">4 Piece</option>
                        </select>
                    </div>
                    <button className='p-2 font-bold pl-5 pr-5 text-white bg-blue-600 rounded-sm' type='submit'>Send inquery</button>
                </form>
            </div>
        </div>
    );
};

export default Section5;