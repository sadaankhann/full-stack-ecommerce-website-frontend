import React from 'react'
import { Link } from 'react-router-dom'

const Nav_3 = () => {
    return (
        <>
        <div className='flex justify-between pl-30 pr-30 items-center h-[80px] pl-16 pr-16'>
            <div className="flex justify-center items-center gap-2 logo">
                <img src="../src/assets/logo-symbol.png" className='h-[50px]' alt="" />
                <h1 className='text-[#8CB7F5] font-bold text-xl'>TechOn</h1>
            </div>
            <div className="flex gap-4 buttons">
                <Link to='/signup'><button className='px-5 py-2 text-[#0D6EFD] bg-[#EDEDED]'>SignUp</button></Link>
                <Link to='/login'><button className='px-6 py-2 text-white bg-[#0D6EFD]'>Login</button></Link>
            </div>
        </div>
        <hr className='bg-[#0D6EFD] h-[2px] border-none'/>
        </>
    )
}

export default Nav_3
