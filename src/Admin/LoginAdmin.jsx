import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react'
import { Info } from "lucide-react";

const LoginAdmin = () => {

    const API = import.meta.env.VITE_API;

    const [formData, setFormData] = useState({email:'',password:'',contactNo:''});
    const [captchaValue, setCaptchaValue] = useState(null);

    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorText, setErrorText] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prv => ({ ...prv, [name]: value }));
    }

    const formSubmitted = async (e) => {
        e.preventDefault()
        if (!captchaValue) {
            setShowErrorMessage(false);
            setErrorText('Captcha must be filled!')
            setTimeout(()=> {
                setShowErrorMessage(true);
            }, 3000);
        }

        const sendingData = await fetch(`${API}/admin/login`, {
            method: 'POST',
            credentials : 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        const response = await sendingData.json();
        if(response.success) {window.location.href = '/'}
        setErrorText(response.message);
        setShowErrorMessage(true);
        setTimeout(() => setShowErrorMessage(false), 3000)
    }

    return (
        <div className='h-screen bg-gray-100 flex justify-center items-center'>
            <div className='min-h-[300px] h-auto w-[30%] bg-white rounded-sm p-2 pl-3 pr-3 border border-gray-500'>
                <h2 className='font-bold text-lg mb-4'>Login</h2>
                <form onSubmit={formSubmitted} method='POST' className='flex flex-col'>
                    <label id='email'>Email</label>
                    <input type="email" required value={formData.email} className='border' onChange={handleChange} name="email" id="email" />

                    <label id='email'>Password</label>
                    <input type="password" value={formData.password} required className='border' onChange={handleChange} name="password" />

                    <label id='email'>Contact No</label>
                    <input type="text" value={formData.contactNo} required className='border' onChange={handleChange} name="contactNo" />

                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
                        onChange={(value) => setCaptchaValue(value)}
                    />

                    <button type="submit" className='border bg-blue-500 text-white mt-3'>Done</button>
                </form>
            </div>
            {showErrorMessage && <div className={`fixed top-0 right-0 right-10 top-10 reportingmessage w-[200px] h-[30px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm flex flex-col justify-center items-center overflow-hidden`}>
                <p className='flex items-center justify-center gap-1'><Info size={14} />{errorText}</p>
                <p className='line absolute left-[-100%] bottom-0 w-[300px] h-[3px] bg-blue-300'></p>
            </div>}
        </div>

    )
}

export default LoginAdmin