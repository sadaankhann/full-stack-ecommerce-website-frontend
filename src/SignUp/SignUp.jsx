import React, { useState } from 'react'
import Nav_3 from '../Nav/Nav_3'
import Footer from '../Homepage/Footer'
import FooterMenu from '../Homepage/FooterMenu'
import { Link } from 'react-router-dom'
import { Info } from 'lucide-react'

const SignUp = () => {

    const API = import.meta.env.VITE_API; 

    const [errorText, setErrorText] = useState('');

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        contactNo: '',
        savePassword: ''
    })

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormFields(prev => ({
            ...prev,
            [name]: type == 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendingData = await fetch(`${API}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials : 'include',
            body: JSON.stringify({
                formData : formFields
            })
        })

        const response = await sendingData.json();

        if(response.success){
            window.location.href = '/';
        } 
        setShowErrorMessage(true);
        setErrorText(response.message);
        setTimeout(()=>setShowErrorMessage(false), 1500)
    }

    return (
        <div className='min-h-screen h-auto'>
            <Nav_3 />
            <div className='pl-20 pr-20 min-h-[700px] h-auto flex items-center justify-around'>
                <div className='flex justify-center items-center text-3xl rounded-lg bg-[rgba(13,110,243,0.7)] text-white font-bold h-[320px] w-[30%]'>TechOn</div>
                <div className='flex flex-col justify-bewteen  w-[40%]'>
                    <div className="contentBeforeForm mb-8">
                        <h1 className='text-2xl font-bold'>Login to your account!</h1>
                    </div>
                    <form className='space-y-5' onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div>
                            <label className='block text-gray-700 font-semibold mb-2'>Email Address</label>
                            <input
                                type='email'
                                name='email'
                                value={formFields.email}
                                onChange={handleChange}
                                placeholder='you@example.com'
                                className='w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 text-gray-800'
                                required
                            />
                        </div>

                        {/* Contact Number Field */}
                        <div>
                            <label className='block text-gray-700 font-semibold mb-2'>Contact Number</label>
                            <input
                                type='tel'
                                name='contactNo'
                                value={formFields.contactNo}
                                onChange={handleChange}
                                placeholder='+1 (555) 000-0000'
                                className='w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 text-gray-800'
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className='block text-gray-700 font-semibold mb-2'>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={formFields.password}
                                onChange={handleChange}
                                placeholder='Create a strong password'
                                className='w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 text-gray-800'
                                required
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className='block text-gray-700 font-semibold mb-2'>Confirm Password</label>
                            <input
                                type='password'
                                name='confirmPassword'
                                value={formFields.confirmPassword}
                                onChange={handleChange}
                                placeholder='Re-enter your password'
                                className='w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 text-gray-800'
                                required
                            />
                        </div>

                        {/* Checkbox */}
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                name='savePassword'
                                id='savePassword'
                                onChange={handleChange}
                                checked={formFields.savePassword}
                                className='w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer'
                            />
                            <label htmlFor='savePassword' className='ml-3 text-gray-700 cursor-pointer'>
                                Save password for future use
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='w-1/2 mt-6 py-2  bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105'
                        >
                            Create Account
                        </button>
                    </form>
                    <Link to={'/login'} > <p className='text-blue-600 mt-8'>Already have an account? Sign in now!</p></Link>
                </div>
                {showErrorMessage && <div className={`fixed top-0 right-0 right-10 top-10 reportingmessage w-[200px] h-[30px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm flex flex-col justify-center items-center overflow-hidden`}>
                    <p className='flex items-center justify-center gap-1'><Info size={14} />{errorText}</p>
                    <p className='line absolute left-[-100%] bottom-0 w-[300px] h-[3px] bg-blue-300'></p>
                </div>}

            </div>
            <FooterMenu />
            <Footer />
        </div>
    )
}

export default SignUp
