import React from 'react'

const ProductDetails_Section_3 = () => {
    return (
        <div className='flex justify-center items-center h-[300px] w-full'>
            <div className='firstDiv relative flex items-center pl-10 pr-10 justify-between overflow-hidden h-[140px] rounded-sm w-full' style={{backgroundColor : 'rgba(35, 124, 255, 1)'}}>
                <div className='text-white'>
                    <h3 className='font-bold text-xl'>Super discount on more than 100 USD</h3>
                    <p className='text-lg'>Have you ever finally write some dummy info</p>
                </div>
                <div className='relative z-[999]'>
                    <button className='pl-4 pr-4 p-1 text-white rounded-sm font-bold' style={{backgroundColor : 'rgba(255, 144, 23, 1)'}}>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails_Section_3
