import React, { useState } from 'react'
import { assets } from '@/assets/img'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonOutline } from "react-icons/io5";
import IconButton from '@mui/material/IconButton';
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import '@/assets/css/Login.css'


interface LoginProps {
    onSubmit: (email: string) => void;
}

const Login = ({ onSubmit } : LoginProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleCheckboxChange = () => {
        setRememberMe((prev) => !prev);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    
        // Simple validation
        // if (!email || !password) {
        //   setError('Email and Password are required.');
        //   return;
        // }
    
        // setError('');
        // console.log('Login submitted:', { email, password });
    
        // // You can add your API request or logic here
        // const isValidUser = true; // Replace with actual API validation logic
        //     if (isValidUser) {
        //     // Navigate to the desired page after successful login
        //     navigate('/home'); // Change '/dashboard' to your target route
        //     } else {
        //     setError('Invalid credentials. Please try again.');
        //     }

        onSubmit(email)
  
      };

    return (
        <div className='w-screen h-screen grid grid-cols-12 bg-slate-50 px-6 py-4 overflow-x-hidden'>
            <div className='col-span-7 p-3 flex flex-col'>
                <div className='flex flex-col w-fit tracking-wide'>
                    <p className='text-2xl font-bold text-center'>HỆ THỐNG GIÁM SÁT MÔI TRƯỜNG</p>
                    <p className='text-2xl font-medium'>A9-IOT Environment Monitoring System</p>
                </div>

                <img src={assets.Login_Img} style={{width: '800px', height: '500px'}} className='mt-6'/>

                <div className='flex flex-col mt-10 text-xs gap-y-1'>
                    <p className='font-bold text-green-500'>CÔNG TY TNHH MTV GIẢI PHÁP CÔNG NGHỆ A9 IOT</p>
                    <p className='font-bold text-slate-950'>Phòng Kỹ thuật Điện - Nước</p>
                    <p>Số 198, đường 19/8, Xã Vị Tân, Thành phố Vị Thanh, Tỉnh Hậu Giang, Việt Nam</p>
                    <p>
                        <span className='text-green-500 font-bold'>T</span>: 0772595952 | 
                        <span className='text-green-500 font-bold'> E</span>: khaipham2204@gmail.com |
                        <span className='text-green-500 font-bold'> W</span>: http://canammo.com</p>
                </div>
            </div>

            <div className='col-span-5 flex flex-col justify-center items-center gap-y-3'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={assets.MainLogo} style={{width: '190px', height:'160px'}}/>
                    <span style={{fontWeight: 640}} className={`flex-row gap-x-1 text-2xl text-slate-950 dark:text-white`}>A9<span> I<span className='text-green-500'>O</span>T</span></span>
                </div>
                
                <div className='bg-white rounded-2xl shadow-xl px-8 py-24'>
                    <form onSubmit={handleLogin} className="space-y-6">

                        <div className='TextField'>
                            <TextField
                                type="email" 
                                label="Tên đăng nhập"
                                slotProps={{
                                    input: {
                                      endAdornment: <InputAdornment className='text-2xl' position="end"><IoPersonOutline /></InputAdornment>,
                                    },
                                }}
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                variant="filled"
                            />
                        </div>

                        <div className='TextField'>
                            <TextField
                                type={showPassword ? 'text' : 'password'}
                                label="Mặt khẩu"
                                slotProps={{
                                    input: {
                                      endAdornment: 
                                        <InputAdornment className='text-2xl' position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                                             </IconButton>
                                        </InputAdornment>,
                                    },
                                }}
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                variant="filled"
                            />  

                        </div>

                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row justify-center items-center gap-x-1'>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={handleCheckboxChange}
                                    className='rounded-md text-green-400'
                                />
                                <p style={{fontSize: '13px', fontWeight: 'bold'}}>Ghi nhớ</p>  
                            </div>

                            <button className='text-green-500' style={{fontSize: '13px', fontWeight: 'bold'}}>Quên mật khẩu?</button>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-[#28b43c] to-[#ace8b0] text-white font-[520] rounded-3xl"
                            style={{fontSize: '15px'}}
                        >
                            Đăng nhập
                        </button>
                    </form>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[#34ac44] font-bold text-sm'>Liên hệ:</p>
                    <div className='mt-5 flex flex-row justify-between items-center gap-x-5 text-[45px]'>
                        <FaFacebookF className='text-[#303484] bg-transparent rounded-full border-[#303484] border-[3px] p-1 cursor-pointer'/>
                        <FaTwitter className='text-[#70c4dc] bg-transparent rounded-full border-[#70c4dc] border-[3px] p-1 cursor-pointer'/>
                        <FaLinkedinIn className='text-[#305ca4] bg-transparent rounded-full border-[#305ca4] border-[3px] p-1 cursor-pointer'/>
                        <FaYoutube className='text-[#ff0c04] bg-transparent rounded-full border-[#ff0c04] border-[3px] p-1 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login