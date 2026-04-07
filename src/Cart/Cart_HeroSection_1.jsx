import React, { useEffect, useState } from 'react'
import Cart_Second_Section from './Cart_Second_Section';
import CartSavedForLater from './CartSavedForLater';
import ProductDetails_Section_3 from '../ProductDetails/ProductDetails_Section_3';

const Cart_HeroSection_1 = () => {

    const API = import.meta.env.VITE_API;

    const [Cart, setCart] = useState([]);

    const [allProducts, setAllProducts] = useState([]);

    const [priceOfCartProducts, setPriceOfCartProducts] = useState()

    const [RequiredProducts, setRequiredProducts] = useState([]);

    useEffect(() => {
        const fetchingAllTheProducts = async () => {
            try {
                const data = await fetch(`${VITE_API}/allProducts`, {
                    method: 'GET',
                    credentials: 'include'
                })
                const response = await data.json();
                setAllProducts(response);
            } catch (err) {
                console.error(err);
            }
        }

        fetchingAllTheProducts();

        const fetchingAllTheCartProducts = async () => {
            try {
                const data = await fetch(`${API}/cart`, {
                    method: 'GET',
                    credentials: 'include'
                })
                const response = await data.json();
                if (!response.isLoggedIn) {
                    window.location.href = '/login'
                } else {
                    setCart(response.data);
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchingAllTheCartProducts();
    }, [])

    useEffect(() => {
        setRequiredProducts(allProducts
            .filter((elem) => Cart.some((item) => item.id == elem._id))
            .map((elem, idx) => {
                const cartItem = Cart.find((item) => item.id == elem._id)
                return { ...elem, price: Number(cartItem.quantity) * elem.price, quantity: Number(cartItem.quantity) }
            })
        )
    }, [allProducts, Cart])

    useEffect(() => setPriceOfCartProducts(RequiredProducts.reduce((acc, curVal) => acc + curVal.price, 0)), [RequiredProducts])

    const handleQualityChange = async (value, id) => {
        const sendingData = await fetch(`${API}/changingquantity`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value, id }) })
        const response = await sendingData.json();
        setCart(response.data);
    };

    return (
        <div>
            <div className='text-xl font-bold mb-2'>
                <h2>My cart({Cart.length})</h2>
            </div>
            <div className='flex justify-evenly'>
                <div className='h-full w-full'>
                    <div className='h-full w-[95%] flex flex-col bg-white border border-gray-300'>
                        {RequiredProducts.map((elem, idx) => {
                            return <div key={idx} className='flex flex-col min-h-[160px] h-auto  w-full'>
                                <div className='flex justify-between'>
                                    <div className='flex p-3 gap-3'>
                                        <div className='bg-no-repeat bg-cover bg-center h-[80px] w-[80px] border border-gray-300 rounded-sm' style={{ backgroundImage: `url(${elem.image})` }}>
                                        </div>
                                        <div className="flex flex-col">
                                            <div>{elem.name}</div>
                                            <div><p className='text-gray-300'>Size: Medium, Color: Black, Material: Plastic</p></div>
                                            <div><p className='text-gray-300'>Seller: Artel Market</p></div>
                                            <div className="flex gap-4 mt-4 buttons">
                                                <button className='p-1 pl-3 pr-3 border border-gray-300 rounded-sm text-red-600' onClick={() => {
                                                    setCart(prevCart => prevCart.filter(item => item.id !== elem._id));
                                                }}>Remove</button>
                                                <button className='p-1 pl-3 pr-3 border border-gray-300 rounded-sm text-blue-600'>Save for later</button>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Price and quantity */}

                                    <div className='flex justify-center items-center gap-5 flex-col'>
                                        <div>{elem.price}</div>
                                        <div className='flex items-center justify-center h-[30px] w-[100px] relative border mr-3'>
                                            <div>
                                                <span className='absolute left-0 left-4 top-0'>Qty: </span>
                                                <select value={elem.quantity} defaultValue={1} onChange={(e) => {
                                                    handleQualityChange(e.target.value, elem._id);

                                                }} className='outline-none ml-10' name="quantity">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex justify-center'>
                                    <hr className='w-[90%] border-gray-300' />
                                </div>
                            </div>
                        })}
                    </div>

                    <div className='w-[90%]'><Cart_Second_Section /></div>

                </div>

                {/* coupon code and total amount */}

                <div className="h-full w-[30%]">

                    <div className='h-full w-full flex flex-col'>

                        <div className='h-[20%] flex flex-col gap-3 w-full rounded-sm border border-gray-300 p-2 pl-6 mb-5 bg-white'>
                            <p>Have a coupon</p>
                            <div className="form">
                                <form method='POST' action='\coupon'>
                                    <input type="text" placeholder='Add a coupon' name="couponcode" className='border border-gray-300 p-1 w-[60%]' id="" />
                                    <button type="submit" className='text-blue-600 bg-gray-100 border border-gray-300 p-1 pl-2 pr-2'>Apply</button>
                                </form>
                            </div>
                        </div>
                        {/* Total price and checkout */}
                        <div className='w-full p-3 text-[17px] rounded-sm border border-gray-300 bg-white'>
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <div>
                                        <div>Subtotal:</div>
                                        <div>Discount:</div>
                                        <div>Tax:</div>
                                    </div>

                                    <div>
                                        <div>{priceOfCartProducts || 0}</div>
                                        <div>{((priceOfCartProducts / 100) * 15).toFixed(2) || 0}</div>
                                        <div>{((priceOfCartProducts / 100) * 4).toFixed(2) || 0}</div>
                                    </div>
                                </div>

                                <hr className='w-full mt-3 mb-3 border-gray-300' />

                                <div className="flex justify-between total">
                                    <div>Total</div>
                                    <div>{(priceOfCartProducts - (((priceOfCartProducts / 100) * 15) - ((priceOfCartProducts / 100) * 4))).toFixed(2) || 0}</div>
                                </div>

                                <div className="flex justify-center checkout mt-3 mb-3">
                                    <button className='text-white bg-[#00b517] w-full p-2 pl-3 pr-3 rounded-sm'>Checkout</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <CartSavedForLater />
            <ProductDetails_Section_3 />
        </div>
    )
}

export default Cart_HeroSection_1
