import React from 'react'
import '../App.css'
import { HiCode } from "react-icons/hi";

function Skills() {
    return ( 
        <div className="container mt-[50%] md:mt-[12%] md:mx-[8%]">
            <h1 className='text-5xl font-bold text-center'>My Services</h1>
            <div className="box-container flex flex-col md:flex-row md:justify-between md:items-center gap-8 mt-[12%] mx-[5%] md:mx-0 md:mt-[5%]">
                <div className="box border-2 border-[#0DB760] hover:bg-[#0DB760] py-[50px] px-[15px] rounded-lg text-center ]">
                    <div className="icon mx-auto leading-[55px] w-[60px] h-[60px] bg-[#0DB760]">
                        <HiCode className='fa' color='white' size={43} />
                    </div>
                    <h2 className='mt-5 font-bold text-2xl'>Web Designer</h2>
                    <h3 className=''>I design modern website using multiple technologies and frameworks such as ReactJs and Laravel</h3>
                </div>
                <div className="box border-2 border-[#0DB760] hover:bg-[#0DB760] py-[50px] px-[15px] rounded-lg text-center ]">
                    <div className="icon mx-auto leading-[55px] w-[60px] h-[60px] bg-[#0DB760]">
                        <HiCode className='fa' color='white' size={43} />
                    </div>
                    <h2 className='mt-3 font-bold text-2x'>Web Designer</h2>
                    <h3 className=''>I design modern website using multiple technologies and frameworks such as ReactJs and Laravel</h3>
                </div>
                <div className="box border-2 border-[#0DB760] hover:bg-[#0DB760] py-[50px] px-[15px] rounded-lg text-center ]">
                    <div className="icon mx-auto leading-[55px] w-[60px] h-[60px] bg-[#0DB760]">
                        <HiCode className='fa' color='white' size={43} />
                    </div>
                    <h2 className='mt-3 font-bold text-2x'>Web Designer</h2>
                    <h3 className=''>I design modern website using multiple technologies and frameworks such as ReactJs and Laravel</h3>
                </div>
                
            </div>
        </div>
     );
}

export default Skills;