import React from 'react'
import { useState } from 'react'

const Brands = () => {

    const [brands, setBrands] = useState([{
        value : 'samsung',
        text : "Samsung"
    }, {
        value : 'iphone',
        text : "iPhone"
    }, {
        value : 'nikon',
        text : "Nikon"
    }, {
        value : 'oneplus',
        text : "One Plus"
    }, {
        value : 'googlepixel',
        text : "Google"
    }, {
        value : 'sony',
        text : "Sony"
    }, {
        value : 'localvendor',
        text : "Local Vendor"
    }])

    const [flag, setFlag] = useState('hidden');

    return (
        <div className='h-[185px] w-[100%] h-auto'>
            <h3 className='text-sm font-bold'>Brands</h3>
            <ul className='mt-3 flex flex-col gap-2 text-gray-600 text-sm text-black'>
                {brands.map((elem, idx)=>{
                    return <li key={idx} className={`${idx + 1 > 4 ? flag : 'inline'}`}><input type="checkbox" name="phones" id="" value={elem.value} /> {elem.text}</li>
                })}
                <p className='text-[#0D6EFD] mb-2' onClick={()=>{
                    flag == 'hidden' ? setFlag('inline') : setFlag('hidden');
                }}>See all</p>
            </ul>
            <hr className='border-gray-300'></hr>
        </div>
    )
}

export default Brands
