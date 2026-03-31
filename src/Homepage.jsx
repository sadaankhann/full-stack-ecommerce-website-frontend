import React from 'react'
import Nav_1 from './Nav/Nav_1'
import Nav_2 from './Nav/Nav_2'
import HeroSection from './Homepage/HeroSection'
import DealsAndOffers from './Homepage/DealsAndOffers'
import HomeAndOutdoor from './Homepage/HomeAndOutdoor'
import ConsumerElectronic from './Homepage/ConsumerElectronic'
import Section5 from './Homepage/Section5'
import RecommendedItems from './Homepage/RecommendedItems'
import ExtraServices from './Homepage/ExtraServices'
import SuppliersByRegion from './Homepage/SuppliersByRegion'
import Newsletter from './Homepage/Newsletter'
import FooterMenu from './Homepage/FooterMenu'
import Footer from './Homepage/Footer'

const Homepage = () => {
  return (
    <div className='w-full h-full bg-gray-100'>
      <div className='flex flex-col justify-center items-center'>
        <Nav_1 />
        <Nav_2 />
        <div className='flex flex-col items-center w-[92%] h-full mx-auto bg-gray-50'>
          <HeroSection />
          <DealsAndOffers />
          <HomeAndOutdoor />
          <ConsumerElectronic />
          <Section5 />
          <RecommendedItems />
          <ExtraServices />
          <SuppliersByRegion />
        </div>
      </div>
      <Newsletter />
      <FooterMenu />
      <Footer />
    </div>
  )
}

export default Homepage
