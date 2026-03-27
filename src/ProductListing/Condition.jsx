import React from 'react'

const Condition = () => {
    return (
        <div className='h-[170px] w-[100%]'>
            <h3 className='text-sm font-bold'>Brands</h3>
            <ul className='mt-3 flex flex-col gap-2 text-gray-600 text-sm text-black'>
                <li><input type="radio" id="" name="condition" value="any" /> Any</li>
                <li><input type="radio" id="" name="condition" value="refurbished" /> Refurbished</li>
                <li><input type="radio" id="" name="condition" value="brandnew" /> Brand new</li>
                <li><input type="radio" id="" name="condition" value="olditems" /> Old items</li>
                <p className='text-[#0D6EFD] mb-2'>See all</p>
            </ul>
            <hr className='border-gray-300'></hr>
        </div>
    )
}

export default Condition
