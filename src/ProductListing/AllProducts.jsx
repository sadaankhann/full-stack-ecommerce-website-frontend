import React, { Children, createContext, useEffect } from 'react'
import { useState } from 'react'
import { ThemeContext } from './ProductsArray'
import { useContext } from 'react'
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails';

export const ViewDetails = createContext();

const AllProducts = ({ children }) => {

    const API = import.meta.env.VITE_API;

    const [Cart, setCart] = useState([]);
    const [likedProducts, setLikedProducts] = useState([])

    useEffect(() => {
        const gettingCartData = async () => {
            const data = await fetch(`${API}/api/cart`, {method: 'GET', credentials : 'include'})
            const response = await data.json();
            setCart(response.data || []);
        }
        gettingCartData();

        const gettingLikedData = async () => {
            const data = await fetch(`${API}/api/likedProducts`, {method: 'GET', credentials : 'include'})
            const response = await data.json();
            setLikedProducts(response.data || []);
        }
        gettingLikedData();

    }, [])

    const { allProducts, setAllProducts } = useContext(ThemeContext);

    const [Fill, setFill] = useState('gray');

    const [view, setView] = useState('flex');

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const Products = [...allProducts];
    const totalPages = Math.ceil(Products.length / postPerPage);

    let requiredTotalPosts = [];

    for (let i = 0; i < totalPages; i++) {
        requiredTotalPosts.push(i);
    }

    console.log(requiredTotalPosts);

    const Posts = Products.slice(firstPostIndex, lastPostIndex);

    const CartData = async (id) => {
        const data = await fetch(`${API}/api/cart`, { method: 'GET', credentials: 'include' });
        const response = await data.json();
        const check = response.data.some(item => item.id == id);
        if (check) {
            const sendingData = await fetch(`${API}/api/removeFromCart`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ id }) });
            const sendingDataJSON = await sendingData.json();
            if (sendingDataJSON.success) { console.log("Deleted Successful!") }
            setCart(sendingDataJSON.data || []);
            console.log(sendingDataJSON.data);
        } else {
            const sendingData = await fetch(`${API}/api/addingIntoCart`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ id }) });
            const sendingDataJSON = await sendingData.json();
            if (sendingDataJSON.success) { console.log("Added Successful!") }
            setCart(sendingDataJSON.data || []);
        }
    }

    const LikedData = async (id) => {
        const data = await fetch(`${API}/api/likedProducts`, { method: 'GET', credentials: 'include' });
        const response = await data.json();
        const check = response.data.includes(id);
        if (check) {
            const sendingData = await fetch(`${API}/api/removeFromLiked`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ id }) });
            const sendingDataJSON = await sendingData.json();
            if (sendingDataJSON.success) { console.log("Deleted Successful!") }
            setLikedProducts(sendingDataJSON.data || []);
        } else {
            const sendingData = await fetch(`${API}/api/addingIntoLiked`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ id }) });
            const sendingDataJSON = await sendingData.json();
            if (sendingDataJSON.success) { console.log("Added Successful!") }
            setLikedProducts(sendingDataJSON.data || []);
        }
    }

    return (

        <ViewDetails.Provider value={{ view, setView }}>
            {children}

            <div className={`${view} flex-col grid-cols-3 gap-4`}>
                {Posts.map((elem, idx) => {
                    return <div key={idx} className='flex w-[100%] gap-4 h-[200px] border-1 border-gray-300 ml-2'>
                        <div className='w-[30%]'>
                            <img src={elem.image} className='h-[200px]' alt="" />
                        </div>
                        <div className='flex justify-between gap-3 p-3 main w-[70%]'>

                            <div className='flex flex-col w-[70%] overflow-hidden'>
                                <Link to={`/productsdetails/${elem._id}`}><h3>{elem.name}</h3></Link>
                                <div className="flex flex-col gap-3">
                                    <div className="flex mt-2 gap-3">
                                        <h3 className='font-bold'>${elem.price}</h3>
                                        <h3 className='text-gray-600 line-through'>${elem.price + 200}</h3>
                                    </div>
                                    <div className="flex gap-3 text-sm">
                                        <div className="flex mt-1">
                                            <img src="../src/assets/star_.png" className='h-[14px]' alt="" />
                                            <img src="../src/assets/star_.png" className='h-[14px]' alt="" />
                                            <img src="../src/assets/star_.png" className='h-[14px]' alt="" />
                                            <img src="../src/assets/star_.png" className='h-[14px]' alt="" />
                                            <img src="../src/assets/star_dull.png" className='h-[14px]' alt="" />
                                        </div>
                                        <div>
                                            <h3 className='text-sm'>154 Orders</h3>
                                        </div>
                                        <div className='text-[#00B517] text-sm'>
                                            Free Shipping
                                        </div>
                                    </div>
                                    <div className="description text-[10px]">
                                        <p>{elem.description.length > 10 ? `${elem.description.slice(0, 120)}...` : elem.description}</p>
                                    </div>
                                    <div className="view-details text-sm">
                                        <p className='text-[#OD6EFD]'>View details</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-center gap-2 second">

                                <ShoppingCart fill={Cart.some(item => item.id == elem._id)  ? '#0d6efd' : 'white'} className='h-[35px] p-2 rounded-sm border-1 border-gray-300' size={38} onClick={() => CartData(elem._id)}
                                />

                                <Heart fill={likedProducts.some(item => item == elem._id)  ? '#FF0000' : 'white'} className='h-[35px] p-2 rounded-sm border-1 border-gray-300' size={38} onClick={() => LikedData(elem._id)}
                                />

                            </div>

                        </div>
                    </div>
                })}
                <div className="h-[100px] w-full flex gap-3 justify-center items-center">
                    {
                        requiredTotalPosts.map((elem, idx) => {
                            return <div key={idx}>
                                <button className='border-1 border-gray-300 p-2' onClick={() => {
                                    setCurrentPage(idx + 1);
                                }}>{elem + 1}</button>
                            </div>
                        })
                    }
                </div>



            </div>
        </ViewDetails.Provider>

    )
}

export default AllProducts
