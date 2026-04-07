import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../ProductListing/ProductsArray';
import { Check, Dot, Globe, Heart, MessageSquareText, Shield, ShieldCheck } from 'lucide-react';

const Product_Information_HeroSection = () => {

  const API = import.meta.env.VITE_API;

  const params = useParams();

  const [Products, setProducts] = useState([]);
  const [visitedProduct, setVisitedProduct] = useState(null);

  const [liked, setLiked] = useState('white');

  const [addingIntoLikedProducts, setAddingIntoLikedProducts] = useState(()=>{
    const data = localStorage.getItem('likedProducts');
    return (data) ? JSON.parse(data) : []
  })

   useEffect(()=>{
    const settingUpTheUpdatedData = localStorage.setItem('likedProducts', JSON.stringify(addingIntoLikedProducts))
  }, [addingIntoLikedProducts])


  const changingLikedProduct = () =>{
    const checkIfAlreadyThere = addingIntoLikedProducts.includes(params.id);
    if (checkIfAlreadyThere) {setAddingIntoLikedProducts(prev => prev.filter(id => id != params.id));} else{
    setAddingIntoLikedProducts(prev => [...prev, params.id])
    };
  }


  useEffect(() => {
    const FetchingProducts = async () => {
      try {
        const allProducts = await fetch(`${API}/allproducts`);
        const response = await allProducts.json();
        setProducts(response);

        const clickedProduct = response.find(prev => prev._id == params.id);
        setVisitedProduct(clickedProduct);
        setImage(clickedProduct.image);

      } catch (err) {
        console.error("Products Failed to Fetch!", err);
      }

    }
    FetchingProducts();
  }, [params.id])

  useEffect(()=>{
    const find = addingIntoLikedProducts.includes(params.id);
    (find) ? setLiked('red') : setLiked('white');
  }, [])

  const [setimage, setImage] = useState(null);
  // const [setimage, setImage] = useState(visitedProduct.image);

  return (
    <div className="flex heroSection h-[500px] w-full">
      <div className='w-[35%] h-full'>
        <div className="h-[80%] w-full bg-no-repeat bg-cover border-1 border-gray-300" style={{ backgroundImage: `url(${setimage})` }}></div>
        <div className="flex gap-2 h-[20%] other-images p-2">
          <div className='h-full w-[20%] bg-center bg-cover bg-no-repeat border-1 border-gray-300' style={{ backgroundImage: "url('../src/assets/safaricoat.jpg')" }} onClick={() => {
            setImage('../src/assets/safaricoat.jpg')
          }}></div>
          <div className='h-full w-[20%] bg-center bg-cover border-1 border-gray-300' style={{ backgroundImage: "url('../src/assets/pot.png')" }} onClick={() => {
            setImage('../src/assets/pot.png');
          }}></div>
          <div className='h-full w-[20%] bg-center bg-cover border-1 border-gray-300' style={{ backgroundImage: "url('../src/assets/headphones_.png')" }} onClick={() => {
            setImage('../src/assets/headphones_.png');
          }}></div>
          <div className='h-full w-[20%] bg-center bg-cover border-1 border-gray-300' style={{ backgroundImage: "url('../src/assets/shirt.png')" }} onClick={() => {
            setImage('../src/assets/shirt.png');
          }}></div>
          <div className='h-full w-[20%] bg-center bg-cover border-1 border-gray-300' style={{ backgroundImage: "url('../src/assets/bag.png')" }} onClick={() => {
            setImage('../src/assets/bag.png');
          }}></div>
        </div>
      </div>
      <div className='w-[40%] h-full pl-5 pr-5 pt-5 pb-5'>
        {visitedProduct ? (visitedProduct.stock > 0 ? <h3 className='flex text-[#00B517] font-bold'><Check color='#00B517' /> In Stock</h3> : <h3>Out of stock</h3>) : (<h3>Loading...</h3>)}
        {visitedProduct ? (<h3 className='font-bold text-[17px] mt-2 mb-2'>{visitedProduct.name}</h3>) : (<h3>Loading...</h3>)}
        <div className="flex text-sm gap-3 mb-2">
          <div className="flex rating">
            <img src="../src/assets/star_.png" className='h-[15px]' alt="" />
            <img src="../src/assets/star_.png" className='h-[15px]' alt="" />
            <img src="../src/assets/star_.png" className='h-[15px]' alt="" />
            <img src="../src/assets/star_.png" className='h-[15px]' alt="" />
            <img src="../src/assets/star_dull.png" className='h-[15px]' alt="" />
            <p className='text-[#FF9017] ml-2 mt-[-2px]'>9.3</p>
          </div>
          <Dot />
          <div className="flex gap-1 reviews">
            <MessageSquareText />
            <h3>32 reviews</h3>
          </div>
          <Dot />
          <div className="flex productSold gap-1">
            <Shield />
            <h3>153 sold</h3>
          </div>
        </div>

        <div className="h-[10%] flex justify-center items-center gap-3 prices bg-[#FFF0DF]">
          <div className="one flex flex-col">
            <div className='text-[#FA3434] font-bold'>${visitedProduct?.price.toFixed(2)}</div>
            <div className='text-[12px] text-gray-500'>50-100 pcs</div>
          </div>
          <p className='flex-strech'>|</p>
          <div className="two flex flex-col">
            <div className='font-bold'>${visitedProduct?.price - (visitedProduct?.price * (15 / 100)).toFixed(2)}</div>
            <div className='text-[12px] text-gray-500'>100-200 pcs</div>
          </div>
          <p className=''>|</p>
          <div className="three flex flex-col">
            <div className='font-bold'>${visitedProduct?.price - (visitedProduct?.price * (25 / 100)).toFixed(2)}</div>
            <div className='text-[12px] text-gray-500'>300-500 pcs</div>

          </div>

        </div>

        <div className="h-full w-full flex justify-center table p-4">
          <table className='flex flex-col gap-3 w-[80%]'>
            <tr className='flex justify-between'>
              <td>Price: </td>
              <td>Negotiable</td>
            </tr>
            <hr className='border border-gray-300' />
            <tr className='flex justify-between'>
              <td>Type:</td>
              <td>{visitedProduct?.type}</td>
            </tr>
            <tr className='flex justify-between'>
              <td>Material:</td>
              <td>{visitedProduct?.material}</td>
            </tr>
            <tr className='flex justify-between'>
              <td>Design:</td>
              <td>{visitedProduct?.design}</td>
            </tr>

            <hr className='border border-gray-300' />

            <tr className='flex justify-between w-full'>
              <td>Custom:</td>
              <td className='ml-10'>{visitedProduct?.customization}</td>
            </tr>
            <tr className='flex justify-between'>
              <td>Protection:</td>
              <td>{visitedProduct?.protection}</td>
            </tr>
            <tr className='flex justify-between'>
              <td>Warranty:</td>
              <td>{visitedProduct?.warranty}</td>
            </tr>

            <hr className='border border-gray-300' />

          </table>
        </div>

      </div>

      <div className='h-[75%] flex flex-col'>

        <div className='h-[80%] pl-4 p-1 pt-3 pb-3'>
          <div className="w-full flex gap-3 m-3">
            <div className='flex justify-center items-center text-xl h-[40px] w-[40px] bg-[#C6F3F1] text-[#4CA7A799]'>R</div>
            <div>
              <h3>Supplier</h3>
              <h3>Guanjoi Trading LLC</h3>
            </div>
            <div></div>
          </div>

          <hr className='w-[80%] border border-gray-300 mt-2' />

          <div className="flags-list mt-4">
            <ul className='flex flex-col gap-3'>
              <li className='flex gap-5'> <img src="../src/assets/flags/uae.png" className='h-[20px]' alt="" /> UAE, Dubai </li>
              <li className='flex gap-5'><ShieldCheck /> Verified Seller</li>
              <li className='flex gap-5'> <Globe /> World Wide Shipping </li>
            </ul>
          </div>

          <div className="flex items-center flex-col gap-3 mt-4">
            <button className='bg-[linear-gradient(to_bottom,#127FFF,#0067FF)] w-[80%] pl-4 pr-4 p-1 text-white rounded-sm'>Send inquiry</button>
            <button className='text-[#0D6EFD] w-[80%] rounded-lg border-1 border-gray-300'>Seller's profile</button>

          </div>
          

        </div>

        <div className="flex justify-center items-center gap-2 h-[10%] second text-[#0d6efd]">
          <Heart color="#0d6efd" fill={liked} onClick={()=>{
            (addingIntoLikedProducts.includes(params.id)) ? setLiked("red") : setLiked("white");
            changingLikedProduct();
          }}/> Save for later
        </div>

      </div>

    </div>
  )
}

export default Product_Information_HeroSection
