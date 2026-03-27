import React, { useEffect, useState } from 'react'

const DealsAndOffers = () => {

    const [targetDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 4);
        date.setHours(date.getHours() + 13);
        date.setMinutes(date.getMinutes() + 34);
        date.setSeconds(date.getSeconds() + 56);
        return date;
    })

    const [timeLeft, setTimeLeft] = useState({})

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);

    }, [targetDate])

    return (
        <div className='mt-10 flex h-[250px] w-full'>
            <div className='h-full w-[23%] p-5 border-1 border-gray-300'>
                <h2 className='text-black text-xl font-bold'>Deals and offers</h2>
                <h3 className='text-gray-400'>Hygiene equipments</h3>
                <div className='grid grid-cols-4 text-sm text-center mt-5'>
                    <div className='h-[43px] w-[43px] rounded-sm bg-[#333] text-white'>
                        <h4>{timeLeft.days}</h4>
                        <h5>Days</h5>
                    </div>
                    <div className='h-[43px] w-[43px] rounded-sm bg-[#333] text-white'>
                        <h4>{timeLeft.hours}</h4>
                        <h5>Hours</h5>
                    </div>
                    <div className='h-[43px] w-[43px] rounded-sm bg-[#333] text-white'>
                        <h4>{timeLeft.minutes}</h4>
                        <h5>Min</h5>
                    </div>
                    <div className='h-[43px] w-[43px] rounded-sm bg-[#333] text-white'>
                        <h4>{timeLeft.seconds}</h4>
                        <h5>Sec</h5>
                    </div>
                </div>

            </div>
            <div className='h-full grid w-[77%] grid-cols-5'>
                <div className="flex gap-4 flex-col justify-center items-center one border-1 border-gray-300">
                    <img src="../src/assets/watches.png" className='h-[100px]' alt="" />
                    <h2>Smart Watches</h2>
                    <p className='text-center w-[60px] p-1 rounded-2xl text-red-500 bg-red-200 font-bold'>-25%</p>
                </div>

                {/* two */}

                <div className="flex gap-4 flex-col justify-center items-center two border-1 border-gray-300">
                    <img src="../src/assets/laptops.png" className='h-[100px]' alt="" />
                    <h2>Laptops</h2>
                    <p className='text-center w-[60px] p-1 rounded-2xl text-red-500 bg-red-200 font-bold'>-25%</p>
                </div>

                {/* three */}

                <div className="flex gap-4 flex-col justify-center items-center three border-1 border-gray-300">
                    <img src="../src/assets/cameras.png" className='h-[100px]' alt="" />
                    <h2>Cameras</h2>
                    <p className='font-bold text-center w-[60px] p-1 rounded-2xl text-red-500 bg-red-200'>-25%</p>
                </div>

                {/* four */}

                <div className="flex gap-4 flex-col justify-center items-center three border-1 border-gray-300">
                    <img src="../src/assets/watches.png" className='h-[100px]' alt="" />
                    <h2>Headphones</h2>
                    <p className='text-center w-[60px] p-1 rounded-2xl text-red-500 bg-red-200 font-bold'>-25%</p>
                </div>

                {/* five */}

                <div className="flex gap-4 flex-col justify-center items-center five border-1 border-gray-300">
                    <img src="../src/assets/mobilephones.png" className='h-[100px]' alt="" />
                    <h2>Mobile Phones</h2>
                    <p className='text-center w-[60px] p-1 rounded-2xl text-red-500 bg-red-200 font-bold'>-25%</p>
                </div>

            </div>
        </div>
    )
}

export default DealsAndOffers
