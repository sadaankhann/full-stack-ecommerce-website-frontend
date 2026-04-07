import React, { useState, useEffect } from 'react';

const RecommendedItems = () => {

  const API = import.meta.env.VITE_API;

  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch(`${API}/featuredProducts`);
        const data = await response.json();
        console.log(data);
        setFeatured(data);
      } catch (err) {
        console.error("Error fetching featured products:", err.message);
      }
    };
    fetchFeaturedProducts();
  }, []);


  return (
    <div className=' p-2 h-[800px] w-full pl-4 pr-4' style={{padding : 'min(4em, 6%'}}>
      <h2 className='text-2xl font-bold font-arial mb-5'>Recommended Items</h2>
      <div className="gap-4 overflow-hidden h-full w-full grid grid-cols-5 grid-rows-2">
        {featured.map((elem, index)=>{
          return <div key={index} className='flex flex-col gap-4 p-4 border-1 border-gray-300'>
            <img src={elem.image} alt="" className='h-[50%]' />
            <h3 className='text-lg font-bold'>${elem.price}</h3>
            <p className=''>{(elem.description).length > 20 ? (elem.description).slice(0,50) +"..." : elem.description}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default RecommendedItems;