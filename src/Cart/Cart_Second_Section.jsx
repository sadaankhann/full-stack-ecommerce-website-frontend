import { LockKeyhole, Truck, MessageSquareText } from 'lucide-react'
import React from 'react'

const Cart_Second_Section = () => {
    return (
        <div className='flex justify-between h-[130px] w-full'>
            <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center h-[40px] w-[40px] bg-gray-400 rounded-full'><LockKeyhole size={18} strokeWidth={1.25} /></div>
                <div className='text-[12px]'><h3>Secure Payment</h3><p>Have you ever finally just </p></div>
            </div>

            <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center h-[40px] w-[40px] bg-gray-400 rounded-full'><MessageSquareText size={16} strokeWidth={1.25} /></div>
                <div className='text-[12px]'><h3>Customer support</h3><p>Have you ever finally just </p></div>
            </div>

            <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center h-[40px] w-[40px] bg-gray-400 rounded-full'><Truck size={16} strokeWidth={1.25} /></div>
                <div className='text-[12px]'><h3>Free delievery</h3><p>Have you ever finally just </p></div>
            </div>

        </div>
    )
}

export default Cart_Second_Section
