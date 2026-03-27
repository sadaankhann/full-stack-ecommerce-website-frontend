import React from 'react'

const HomeAndOutdoor = () => {
  return (
    <div className='mt-10 flex h-[250px] w-full font-sans'>
      <div className='flex flex-col h-full w-[23%] p-5 border-1 border-gray-300 gap-5' style={{backgroundImage : "url('../src/assets/homeandoutdoor.png')"}}>
        <h2 className='font-bold text-lg'>Home and <br/> outdoor</h2>
        <button className='w-[130px] p-2 text-black bg-white rounded-lg font-bold pl-2 pr-2'>Source Now</button>
      </div>
      <div className='h-full grid w-[77%] grid-rows-2 grid-cols-4 text-sm'>
        {/* one */}
        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/softchairs.png" className='h-[60px]' alt="" />
            </div>
        </div>

        {/* two */}

        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/sofaandchair.png" className='h-[60px]' alt="" />
            </div>
        </div>

        {/* three */}

        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/kitchendishes.png" className='h-[60px]' alt="" />
            </div>
        </div>

        {/* four */}

        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/smartwatches.png" className='h-[60px]' alt="" />
            </div>
        </div>

        {/* five */}

        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/kitchenmixer.png" className='h-[60px]' alt="" />
            </div>
        </div>

        {/* six */}

        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/blenders.png" className='h-[60px]' alt="" />
            </div>
        </div>

        {/* seven */}

        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/homeappliance.jpg" className='h-[60px]' alt="" />
            </div>
        </div>

        {/* eight */}

        <div className='relative h-full flex justify-between p-3 border-1 border-gray-300'>
            <div>
                <h2>Soft Chairs</h2>
                <p className='text-gray-500'>From <br/>USD 100</p>
            </div>
            <div className='absolute bottom-4 right-4'>
                <img src="../src/assets/cofeemaker.png" className='h-[60px]' alt="" />
            </div>
        </div>

      </div>
    </div>
  )
}

export default HomeAndOutdoor
