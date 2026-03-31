import React from 'react'
import Categories from './ProductListing/Categories'
import Nav_1 from './Nav/Nav_1'
import Nav_2 from './Nav/Nav_2'
import Brands from './ProductListing/Brands'
import Features from './ProductListing/Features'
import PriceRange from './ProductListing/PriceRange'
import Condition from './ProductListing/Condition'
import Ratings from './ProductListing/Ratings'
import FooterMenu from './Homepage/FooterMenu'
import Footer from './Homepage/Footer'
import Newsletter from './Homepage/Newsletter'
import AllProducts from './ProductListing/AllProducts'
import DivBeforeProducts from './ProductListing/DivBeforeProducts'
import ProductsArray from './ProductListing/ProductsArray'

const ProductListing = () => {
    return (
        <div className='min-h-screen h-auto w-full'>
            <Nav_1 />
            <Nav_2 />
            <div className='flex justify-center w-full h-full'>
                <div className='flex flex-col w-[25%] h-full sticky top-0'>
                    <Categories />
                    <Brands />
                    <Features />
                    <PriceRange />
                    <Condition />
                    <Ratings />
                </div>
                <div className='h-full w-[50%]'>
                    <ProductsArray>
                        <AllProducts>
                            <DivBeforeProducts />
                        </AllProducts>
                    </ProductsArray>
                </div>
            </div>
            <Newsletter/>
            <FooterMenu/>
            <Footer/>
        </div>
    )
}

export default ProductListing
