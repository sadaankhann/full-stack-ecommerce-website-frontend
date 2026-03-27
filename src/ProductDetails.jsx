import React from 'react'
import Nav_1 from './Homepage/Nav_1'
import Nav_2 from './Homepage/Nav_2'
import Product_Information_HeroSection from './ProductDetails/Product_Information_HeroSection'
import ProductsDetails_Section_2 from './ProductDetails/ProductsDetails_Section_2'
import ProductDetails_Section_3 from './ProductDetails/ProductDetails_Section_3'
import FooterMenu from './Homepage/FooterMenu'
import Footer from './Homepage/Footer'

const ProductDetails = () => {
  return (
    <div className='h-full w-full'>
      <Nav_1 />
      <Nav_2 />
      <div className='flex flex-col justify-center items-center h-full w-full bg-gray-50'>
        <div className='h-full w-[90%]'>
          <Product_Information_HeroSection/>
          <ProductsDetails_Section_2/>
          <ProductDetails_Section_3/>
        </div>
      </div>
      <FooterMenu/>
      <Footer/>
    </div>
  )
}

export default ProductDetails
