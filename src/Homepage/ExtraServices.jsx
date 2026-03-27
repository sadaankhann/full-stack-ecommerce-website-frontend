import React from 'react'

const ExtraServices = () => {
    return (
        <div className='flex flex-col justify-center p-5 h-[500px] w-full ' style={{padding : 'min(4em, 6%)'}}>
            <h2 className='text-2xl font-bold font-arial mb-6'>Our extra services</h2>
            <div className='grid grid-cols-4 gap-6 h-[250px] w-full'>
                <div className='border-1 relative'>
                    <div className='h-[50%] w-full bg-center bg-no-repeat bg-cover brightness-[0.5]' style={{ backgroundImage: "url(../src/assets/service1.png)" }}></div>
                    <div className='h-[50%] w-full p-3 font-sans'>Source from<br />Industry Hubs</div>
                    <div className='absolute top-25  right-2 flex justify-center items-center h-[40px] w-[40px] bg-[#D1E7FF] rounded-full'><img src="../src/assets/Vector_1.png" className='relative z-[10] h-[20px]' alt="" /></div>
                </div>

                <div className='border-1 relative'>
                    <div className='h-[50%] w-full bg-center bg-no-repeat bg-cover brightness-[0.5]' style={{ backgroundImage: "url(../src/assets/service2.png)" }}></div>
                    <div className='h-[50%] w-full p-3 font-sans'>Source from<br />Industry Hubs</div>

                    <div className='absolute top-25  right-2 flex justify-center items-center h-[40px] w-[40px] bg-[#D1E7FF] rounded-full'><img src="../src/assets/Vector_2.png" className='relative z-[10] h-[20px]' alt="" /></div>
                </div>

                <div className='border-1 relative'>
                    <div className='h-[50%] w-full bg-center bg-no-repeat bg-cover brightness-[0.5]' style={{ backgroundImage: "url(../src/assets/service3.png)" }}></div>
                    <div className='h-[50%] w-full p-3 font-sans'>Source from<br />Industry Hubs</div>
                    <div className='absolute top-25  right-2 flex justify-center items-center h-[40px] w-[40px] bg-[#D1E7FF] rounded-full'><img src="../src/assets/Vector_3.png" className='relative z-[10] h-[20px]' alt="" /></div>
                </div>

                <div className='border-1 relative'>
                    <div className='h-[50%] w-full bg-center bg-no-repeat bg-cover brightness-[0.5]' style={{ backgroundImage: "url(../src/assets/service4.png)"}}></div>
                    <div className='h-[50%] w-full p-3 font-sans'>Source from<br />Industry Hubs</div>
                    <div className='absolute top-25  right-2 flex justify-center items-center h-[40px] w-[40px] bg-[#D1E7FF] rounded-full'><img src="../src/assets/Vector_4.png" className='relative z-[10] h-[20px]' alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default ExtraServices
