import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    
    const [barsOpen,setBarsOpen] = useState('false')

    return ( 
        <>
            <header className='flex sticky top-0 z-50 py-7 px-[8%] justify-between items-center bg-[#060407] text-white font-poppins'>
                <div className="logo">
                    <h1 className='text-3xl font-bold'>TahaLam</h1>
                </div>
                <nav className=''>
                    <ul className='hidden mid:flex space-x-8 font-medium'>
                        <li className='transition delay-75 hover:text-[#F61907] cursor-pointer'>Home</li>
                        <li className='transition delay-75 hover:text-[#F61907] cursor-pointer'>About</li>
                        <li className='transition delay-75 hover:text-[#F61907] cursor-pointer'>Services</li>
                        <li className='transition delay-75 hover:text-[#F61907] cursor-pointer'>Projects</li>
                        <li className='transition delay-75 hover:text-[#F61907] cursor-pointer'>Contact</li>
                    </ul>
                </nav>
                <div className="icons">
                    <button className='hidden bg-[#F61907] mid:block transition delay-75 hover:opacity-90 py-2 px-7 rounded-2xl font-medium'>Hire Me</button>              
                    <FontAwesomeIcon icon={faBars} onClick={() => { setBarsOpen(!barsOpen) }} className="text-2xl mid:hidden cursor-pointer" />
                </div>
            </header>
            <div>
                    <ul className={`fixed py-6 top-20 left-0 z-40 gap-5 w-full bg-black flex flex-col items-center font-medium ${barsOpen ? 'hidden opacity-0' : 'opacity-100'}`} style={{transition : "transform 0.3s ease, opacity 0.3s"}}>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#F61907] cursor-pointer'>Home</li>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#F61907] cursor-pointer'>About</li>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#F61907] cursor-pointer'>Services</li>
                        <li className='transition w-full text-center py-2  delay-75 hover:bg-[#F61907] cursor-pointer'>Projects</li>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#F61907] cursor-pointer'>Contact</li>
                    </ul>
                </div>
        </>
        
     );
}

export default Navbar;