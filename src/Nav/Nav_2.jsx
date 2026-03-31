import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Nav_2 = () => {

    const [flags, setFlags] = useState(false);
    const [currentFlag, setCurrentFlag] = useState(`../src/assets/flag.png`);

    return (
        <div className='h-[50px] w-[92%] flex justify-center items-center  bg-red-100 mt-5 flex pl-3 pr-3 bg-white border border-gray-300 rounded-sm mb-4'>
            <div className="flex gap-5 section-1 ">
                <img src="../src/assets/Menu.png" className='mt-1.5 h-[13px]' alt="" />
                <Link to="/">All Categories</Link>
                <Link to="/">Hot Offers</Link>
                <Link to="/">Gift Boxes</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Menu item</Link>
                <Link to="/"><select id="cars" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="bmw">BMW</option>
                    <option value="audi">Audi</option>
                </select></Link>
            </div>
            <div className="section-2 ml-auto flex gap-4 justify-end section-2">
                <div className="section-1">
                    English, <select id="cars" name="cars">
                        <option value="volvo">USD</option>
                        <option value="bmw">PKR</option>
                        <option value="audi">INR</option>
                    </select>
                </div>
                <div className="relative flex gap-3 section-2">
                    <p>Ship to </p> <img className='h-[30px]' src={currentFlag} alt="" /> <ChevronDown onClick={() =>{ setFlags(true)}} />

                    <div className={`absolute left-1/2 top-10 ${(flags) ? 'block' : 'hidden'} allFlags min-h-60px h-auto w-[50px] border-1 border-black`}>
                        <ul className='flex flex-col p-2 gap-1 items-center  list-none'>
                            <li className='pakistan' onClick={() => {
                                setCurrentFlag(`../src/assets/pakistanFlag.png`)
                                setFlags(false)
                            }}><img src="../src/assets/pakistanFlag.png" alt="" /></li>
                            <li className='india' onClick={() => {
                                setCurrentFlag(`../src/assets/indiaFlag.png`)
                                setFlags(false)
                            }}><img src="../src/assets/indiaFlag.png" alt="" /></li>
                            <li className='Bangladesh' onClick={() => {
                                setCurrentFlag(`../src/assets/bangladeshFlag.png`)
                                setFlags(false)
                            }}><img src="../src/assets/bangladeshFlag.png" alt="" /></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav_2
