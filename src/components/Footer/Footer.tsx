import React from 'react'
import logo_white from "@/assets/img/logo.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaEarthAsia } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="mt-10 flex flex-row flex-wrap items-center justify-between p-4 bg-zinc-700 text-white">

                <div className="flex flex-row items-center gap-x-3">
                    <a href="" title="QTSC" className='flex flex-row items-center gap-x-1'>
                        <img className="img-fluid" width="60" src={logo_white} alt="A9" />
                        <span className='flex flex-row gap-x-1 font-bold text-2xl text-white'>A9<span>I<span className='text-green-400'>O</span>T</span></span>
                    </a>
                </div>

                {/* Company Information */}
                <div className="flex flex-col gap-y-2">
                    <h5 className="text-base font-bold">
                        CÔNG TY TNHH MTV GIẢI PHÁP CÔNG NGHỆ A9 IOT
                    </h5>

                    <div className="flex flex-col gap-y-3 text-sm">
                        <p>Phòng Kỹ Thuật Điện - Nước</p>
                        
                        <p className='flex flex-row gap-x-2 items-center'>
                            <HiOutlineLocationMarker className='text-green-500 text-xl'/> Số 198, đường 19/8, Xã Vị Tân, Thành Phố Vị Thanh, Tỉnh Hậu Giang, Việt Nam
                        </p>

                        <div className='flex flex-row gap-x-4 items-center'>
                            <p className='flex flex-row gap-x-2 items-center'> <MdOutlinePhone className='text-green-500 text-xl'/> 0772595952</p>
                            <p className='flex flex-row gap-x-2 items-center'> <CiMail className='text-green-500 text-xl'/> khaipham2204@gmail.com</p>
                            <p className='flex flex-row gap-x-2 items-center'> <FaEarthAsia className='text-green-500 text-xl'/> www.canammo.com</p>
                        </div>

                       
                    </div>
                </div>

                <div className="flex flex-row items-center gap-x-5">
            
                    <FaFacebookF className='cursor-pointer text-5xl border-2 rounded-full p-2 hover:border-green-500 hover:text-green-500'/>
                    <FaTwitter className='cursor-pointer text-5xl border-2 rounded-full p-2 hover:border-green-500 hover:text-green-500'/>
                    <FaLinkedinIn className='cursor-pointer text-5xl border-2 rounded-full p-2 hover:border-green-500 hover:text-green-500'/>
                    <FaYoutube className='cursor-pointer text-5xl border-2 rounded-full p-2 hover:border-green-500 hover:text-green-500'/>
                    
                </div>

            </div>
        </footer>

    )
}

export default Footer