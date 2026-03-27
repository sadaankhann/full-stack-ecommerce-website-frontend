import React, { useState } from 'react'

const Features = () => {
    const [features, setFeatures] = useState([{
        value: 'metallic',
        text: "Metallic"
    }, {
        value: 'plasticcover',
        text: "Plastic cover"
    }, {
        value: '8gbram',
        text: "8GB Ram"
    }, {
        value: 'superpower',
        text: "Super power"
    }, {
        value: 'largememory',
        text: "Large Memory"
    }, {
        value: '64gbram',
        text: "64GB RAM"
    }, {
        value: '128gbram',
        text: "128GB RAM"
    }])


    const [flag, setFlag] = useState('hidden');

    return (
        <div className='h-[185px] w-[100%] h-auto'>
            <h3 className='text-sm font-bold'>Brands</h3>
            <ul className='mt-3 flex flex-col gap-2 text-gray-600 text-sm text-black'>
                {features.map((elem, idx) => {
                    return <li key={idx} className={`${idx + 1 > 4 ? flag : 'inline'}`}><input type="checkbox" name="phones" id="" value={elem.value} /> {elem.text}</li>
                })}
                <p className='text-[#0D6EFD] mb-2' onClick={() => {
                    flag == 'hidden' ? setFlag('inline') : setFlag('hidden');
                }}>See all</p>
            </ul>
            <hr className='border-gray-300'></hr>
        </div>
    )
}

export default Features
