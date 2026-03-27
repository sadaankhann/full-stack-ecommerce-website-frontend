import React, { useState } from 'react'
import Nav from './Nav/Nav_1';
import Cart_HeroSection_1 from './Cart/Cart_HeroSection_1';
import FooterMenu from './Homepage/FooterMenu'
import Footer from './Homepage/Footer'

const Cart = () => {

    const [Cart, setCart] = useState(() => {
        const data = localStorage.getItem('cartProducts');
        return (data) ? JSON.parse(data) : []
    })

    return (
        <div className='h-full w-full bg-gray-100'>
            <Nav />
            <div className=' w-[80%] mx-auto m-4'>
                <Cart_HeroSection_1/>
            </div>
            <FooterMenu/>
            <Footer/>
        </div>
    )
}

export default Cart
