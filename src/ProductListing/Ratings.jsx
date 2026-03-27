import React from 'react'

const Ratings = () => {
    return (
        <div className='h-[150px] w-[100%]'>
            <h3 className='text-sm font-bold'>Ratings</h3>
            <ul className='mt-3 flex flex-col gap-1 text-gray-600 text-sm text-black'>
                <li className='flex gap-2'>
                    <input type="checkbox" name="rating_5" id="" value="rating_5" />
                    <div className="flex">
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                    </div>
                </li>
                <li className='flex gap-2'>
                    <input type="checkbox" name="rating_5" id="" value="rating_5" />
                    <div className="flex">
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_dull.png" className='h-[16px]' alt="" />
                    </div>
                </li>
                <li className='flex gap-2'>
                    <input type="checkbox" name="rating_5" id="" value="rating_5" />
                    <div className="flex">
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_dull.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_dull.png" className='h-[16px]' alt="" />
                    </div>
                </li>
                <li className='flex gap-2'>
                    <input type="checkbox" name="rating_5" id="" value="rating_5" />
                    <div className="flex">
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_dull.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_dull.png" className='h-[16px]' alt="" />
                        <img src="../src/assets/star_dull.png" className='h-[16px]' alt="" />
                    </div>
                </li>
                <p className='text-[#0D6EFD]'>See all</p>
            </ul>
            <hr></hr>
        </div>
    )
}

export default Ratings
