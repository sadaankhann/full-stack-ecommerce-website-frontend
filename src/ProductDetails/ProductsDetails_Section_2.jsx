import { Check } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductsDetails_Section_2 = () => {

    const API = import.meta.env.VITE_API;

    const [Options, setOptions] = useState(['Description', 'Reviews', 'Shipping', 'About Seller']);
    const [RequiredData, setRequiredData] = useState({})
    const [activeIndex, setActiveIndex] = useState(0);

    const [allProducts, setAllProducts] = useState([]);

    const [youMayLike, setYouMayLike] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);


    const params = useParams();

    useEffect(() => {

        const fetchingProducts = async () => {
            const allProducts = await fetch(`${API}/api/allProducts`);
            const response = await allProducts.json();
            setAllProducts(response);
            setYouMayLike(response.slice(1, 6));
            setRelatedProducts(response.slice(7, 13));
            setRequiredData(response.find(prev => prev._id == params.id));
            console.log(response.find(prev => prev._id == params.id));
        }
        fetchingProducts();

    }, [])

    return (

        <div className='flex flex-col justify-between h-auto text-gray-600 bg-gray-50'>
            <div className='flex justify-between h-full w-full'>
                <div className='h-full w-[65%] p-5'>
                    <div className='h-[13%] w-full'>
                        <ol className='flex gap-6'>
                            {Options.map((elem, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`cursor-pointer pb-1 ${activeIndex === idx
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-600'
                                            }`}
                                    >
                                        {elem}
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className='h-[60%] w-full mt-8'>
                        <div>
                            {RequiredData.description?.length > 30 ? RequiredData.description : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod perspiciatis, repellendus, officiis beatae cupiditate quia, excepturi error rerum ut aliquid atque. Molestias natus repudiandae quos earum aliquid porro iusto quas.
                                Non esse ullam accusantium laboriosam quidem. Rem quaerat accusamus, dolores laudantium, cumque qui assumenda odio commodi eum, suscipit natus culpa corrupti ad consectetur sed dolore fugiat molestiae maiores soluta quis?
                                Iusto debitis dolorum tempora nisi quia vitae laboriosam. Ab obcaecati dolor expedita minima, placeat maiores omnis iure, sit fugit magnam est veniam ex. Libero quia alias perspiciatis amet voluptatibus. Quas?
                                Officiis aut, cupiditate nostrum, fugiat sapiente perferendis laboriosam dolor officia consequuntur deleniti minima dignissimos blanditiis reiciendis consectetur voluptatibus possimus harum nemo eveniet maxime quae repudiandae ab voluptatem libero! Quas, beatae blanditiis perferendis ad dolores deserunt, dignissimos voluptates vero obcaecati inventore provident. Sint error odio modi, possimus neque consequuntur, quia vitae, quas et temporibus sed!
                                Quidem, atque ex autem soluta dolore fugit ullam aspernatur laudantium suscipit! Maxime eaque sint sed dolorum iste, quasi sunt aperiam porro magnam alias natus molestiae laudantium ad facilis maiores nesciunt?
                                Doloribus, et minima ipsam iste, facere delectus in explicabo saepe voluptate veritatis eum itaque voluptatum esse dolorem dolor, veniam officia odit. Est voluptates libero at eos in amet deserunt dolores?
                                Omnis eaque sunt, ipsa ipsumsse neque amet numquam. Dicta amet, modi sunt debitis culpa magni et eaque totam nulla earum, ullam, in molestiae error!</p>}
                        </div>

                        <div className="table w-full mt-6">
                            <table className='w-[70%] border-collapse border-gray-400'>
                                <tbody>
                                    <tr>
                                        <td className='pl-4 p-2 border border-gray-400 bg-gray-200'>Model</td>
                                        <td className='pl-4 p-2 border border-gray-400'>{RequiredData.table_data ? RequiredData.table_data.model : "TR-993"}</td>
                                    </tr>

                                    <tr>
                                        <td className='pl-4 p-2 border border-gray-400 bg-gray-200'>Style</td>
                                        <td className='pl-4 p-2 border border-gray-400'>{RequiredData.table_data ? RequiredData.table_data.style : "TR-993"}</td>
                                    </tr>

                                    <tr>
                                        <td className='pl-4 p-2 border border-gray-400 bg-gray-200'>Certificate</td>
                                        <td className='pl-4 p-2 border border-gray-400'>{RequiredData.table_data ? RequiredData.table_data.certificate : "TR-993"}</td>
                                    </tr>

                                    <tr>
                                        <td className='pl-4 p-2 border border-gray-400 bg-gray-200'>Size</td>
                                        <td className='pl-4 p-2 border border-gray-400'>{RequiredData.table_data ? RequiredData.table_data.size : "TR-993"}</td>
                                    </tr>

                                    <tr>
                                        <td className='pl-4 p-2 border border-gray-400 bg-gray-200'>Memory</td>
                                        <td className='pl-4 p-2 border border-gray-400'>{RequiredData.table_data ? RequiredData.table_data.memory : "TR-993"}</td>
                                    </tr>

                                </tbody>
                            </table>

                            <div className='flex flex-col gap-2 mt-6'>

                                <p className='flex gap-3'><Check color="gray" /> Some great feature name here</p>
                                <p className='flex gap-3'><Check color="gray" /> Lorem ipsum dolor sit am dof uiff ridid.</p>
                                <p className='flex gap-3'><Check color="gray" /> Some great feature name here</p>
                                <p className='flex gap-3'><Check color="gray" /> Some great feature name herep</p>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='h-full w-[24%] text-black p-3'>
                    <h2 className='text-[17px] font-bold'>You may like</h2>
                    {youMayLike.map((elem, idx) => {
                        return <div key={idx} className='h-full w-full text-sm flex gap-3 h-[13%] w-full p-2'>
                            <div className='rounded-sm h-[60px] w-[70px] border border-gray-300 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${elem.image})` }}></div>
                            <div className='w-[200px]'>
                                <div className='text-black'>{elem.name.slice(0, 50)}...</div>
                                <div>${elem.price.toFixed(2)} - ${(elem.price + 50).toFixed(2)}</div>
                            </div>
                        </div>
                    })}
                </div>

            </div>

            {/* Related products */}

            <div className='h-[250px] w-full border border-gray-300 pl-2 pr-2 rounded-sm'>
                <h2 className='mt-3 text-black text-lg font-bold'>Related products</h2>

                <div className="flex flex-wrap gap-5 items-center h-[80%] w-full">
                    {relatedProducts.map((elem, idx) => {
                        return <div key={idx} className='h-[170px] w-[170px] flex justify-center items-center bg-gray-200 rounded-sm'>
                            <img src={elem.image} className='h-[140px]' />
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProductsDetails_Section_2