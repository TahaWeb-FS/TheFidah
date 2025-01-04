import React from 'react'
import '../App.css'
import { FaDatabase } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { FaGem } from "react-icons/fa";

function Services() {
    return ( 
        <div className="parent w-full">
            <div className="container mt-[50%] md:mt-[12%] md:mx-[8%]">
            <h1 className='text-2xl text-[#0DB760] font-bold text-center'> Services</h1>
            <h1 className='md:text-5xl text-4xl font-bold text-center services-title'> What I Am Great At</h1>
            <div className="box-container grid grid-cols-1 md:grid-cols-3 gap-8 mt-[12%] mx-[5%] md:mx-[8%] md:mt-[8%] ">
                <div className="box pt-[35px] pb-[50px] px-[30px] rounded-md text-left ">
                    <div className="icon">
                        <FaGem className='fa text-[#0DB760]'  size={48}/>
                    </div>
                    <h2 className='mt-3 font-bold text-2xl'>Creative Designer</h2>
                    <h3 className='text-sm leading-6 mt-3'>Transforming ideas into captivating designs that reflect your brand’s identity </h3>
                </div>
                <div className="box pt-[35px] pb-[50px] px-[30px] rounded-md text-left ">
                    <div className="icon">
                        <IoDesktopOutline className='fa text-[#0DB760]'  size={48}/>
                    </div>
                    <h2 className='mt-3 font-bold text-2xl'>Web Developement</h2>
                    <h3 className='text-sm leading-6 mt-3'>Building modern, user-friendly websites with clean code and seamless functionality</h3>
                </div>
                <div className="box pt-[35px] pb-[50px] px-[30px] rounded-md text-left ">
                    <div className="icon">
                        <FaMobileAlt className='fa text-[#0DB760]'  size={48}/>
                        
                    </div>
                    <h2 className='mt-3 font-bold text-2xl'>Fully Responsive</h2>
                    <h3 className='text-sm leading-6 mt-3'>Ensuring your website performs perfectly on any device, from desktop to mobile</h3>
                </div>
                <div className="box pt-[35px] pb-[50px] px-[30px] rounded-md text-left ">
                    <div className="icon">
                        <FaHeadphones className='fa text-[#0DB760]'  size={48}/>
                    </div>
                    <h2 className='mt-3 font-bold text-2xl'>Customer Support</h2>
                    <h3 className='text-sm leading-6 mt-3'>Providing reliable support to keep your project running smoothly post-launch</h3>
                </div>
                <div className="box pt-[35px] pb-[50px] px-[30px] rounded-md text-left ">
                    <div className="icon">
                        <FaServer className='fa text-[#0DB760]'  size={48}/>
                    </div>
                    <h2 className='mt-3 font-bold text-2xl'>Web Hosting</h2>
                    <h3 className='text-sm leading-6 mt-3'>Offering secure, high-performance web hosting with minimal downtime</h3>
                </div>
                <div className="box pt-[35px] pb-[50px] px-[30px] rounded-md text-left ">
                    <div className="icon">
                        <FaDatabase className='fa text-[#0DB760]'  size={48}/>
                    </div>
                    <h2 className='mt-3 font-bold text-2xl'>Database Management</h2>
                    <h3 className='text-sm leading-6 mt-3'>Managing and protecting your data with efficient and secure database solutions</h3>
                </div>
                
                
            </div>
        </div>
        </div>
     );
}

export default Services;