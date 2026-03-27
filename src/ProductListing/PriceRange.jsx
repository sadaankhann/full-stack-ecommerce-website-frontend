import React from 'react'

const PriceRange = () => {
    return (
        <div>
            <div className='h-[170px] w-[100%]'>
                <h3 className='text-sm font-bold'>Price range</h3>
                <input type="range" name="" min={10} max={200} id="" />
                <div className="flex">
                    <div>
                        <h3>Min</h3>
                        <input className='border-1 w-[50%]' type="number" name="" id="" />
                    </div>
                    <div>
                        <h3>Min</h3>
                        <input className='border-1 w-[50%]' type="number" name="" id="" />
                    </div>
                </div>
                <div>
                    <button>Apply</button>
                </div>
                <hr className='border-gray-300'></hr>
            </div>
        </div>
    )
}

export default PriceRange
