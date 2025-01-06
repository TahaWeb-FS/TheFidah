import React, { useState, useEffect } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import Button from './Button';
import '../App.css';
import logo from '../assets/images/tahalogo2.png';


function Navbar() {
    const [barsOpen, setBarsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Apply box shadow after 50px of scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header 
                className={`flex sticky top-0 pt-2 lg:pt-4 z-50 px-[6%] justify-between items-center font-poppins transition-shadow duration-300 bg-white text-black ${
                    isScrolled ? 'shadow-lg' : ''
                }`}
            >
                <div className="logo">
                    <img src={logo} className="h-20 w-20 lg:w-20 lg:h-20" alt="" />
                </div>
                <nav>
                    <ul className="hidden mid:flex space-x-8 font-medium">
                        <li className="transition delay-75 hover:text-[#0DB760] cursor-pointer">Home</li>
                        <li className="transition delay-75 hover:text-[#0DB760] cursor-pointer">About</li>
                        <li className="transition delay-75 hover:text-[#0DB760] cursor-pointer">Services</li>
                        <li className="transition delay-75 hover:text-[#0DB760] cursor-pointer">Projects</li>
                        <li className="transition delay-75 hover:text-[#0DB760] cursor-pointer">Contact</li>
                    </ul>
                </nav>
                <div className="icons">
                    <div className="button hidden mid:block">
                        <Button />
                    </div>
                    <RiMenu3Fill
                        onClick={() => setBarsOpen(!barsOpen)}
                        color="black"
                        size={30}
                        className="block mid:hidden cursor-pointer"
                    />
                </div>
            </header>
            <div>
                <ul
                    className={`fixed py-6 top-20 left-0 z-40 gap-5 w-full bg-[#0DB760] text-white flex flex-col items-center font-medium ${
                        barsOpen ? 'opacity-100' : 'hidden opacity-0'
                    }`}
                    style={{ transition: 'transform 0.3s ease, opacity 0.3s' }}
                >
                    <li className="transition w-full text-center py-2 delay-75 hover:bg-[#0DB760] cursor-pointer">Home</li>
                    <li className="transition w-full text-center py-2 delay-75 hover:bg-[#0DB760] cursor-pointer">About</li>
                    <li className="transition w-full text-center py-2 delay-75 hover:bg-[#0DB760] cursor-pointer">Services</li>
                    <li className="transition w-full text-center py-2 delay-75 hover:bg-[#0DB760] cursor-pointer">Projects</li>
                    <li className="transition w-full text-center py-2 delay-75 hover:bg-[#0DB760] cursor-pointer">Contact</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
