import { ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const CartSavedForLater = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const gettingProducts = async () => {
            const data = await fetch('http://localhost:5000/allProducts', { method: 'GET', credentials: 'include' })
            const response = await data.json();
            setProducts(response.slice(0, 4));
        }
        gettingProducts();
    }, [])

    return (
        <div>
            <div className='flex flex-col justify-evenly h-[360px] w-full p-3 border border-gray-300 rounded-sm'>
                <h2 className='h-[10%] w-full font-bold'>Saved for later</h2>
                <div className='flex gap-3 h-[90%] w-full'>
                    {products.map((elem, idx) => {
                        return <div key={idx} className='flex flex-col gap-3 rounded-sm h-full w-[300px] p-3'>
                            <div
                                className='border border-gray-300 h-40 w-40 bg-center bg-cover bg-no-repeat rounded-sm'
                                style={{ backgroundImage: `url(${elem.image})` }}
                            ></div>
                            <div>${elem.price}</div>
                            <div>{elem.name.slice(0, 30)}...</div>
                            <div><button className='flex gap-2 justify-center items-center rounded-sm border border-gray-200 text-[#0d6efd] pl-3 pr-3 p-1'><ShoppingCart size={16} color='#0d6efd' strokeWidth={1.25} />Move to cart</button></div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default CartSavedForLater
