import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from './Button';
import { RiMenu3Fill } from "react-icons/ri";
import '../App.css'


function Navbar() {
    
     const [barsOpen,setBarsOpen] = useState('false')
    
    // const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //         setShowBgNavbar(true);
    //       }
    //       else {
    //         setShowBgNavbar(false);
    //       }
    // }

    // useEffect(() => {
    //     document.addEventListener('scroll', handleScroll);
    //     return () => {
    //         document.removeEventListener('scroll', handleScroll);
    //     }
    // },[])

    return ( 
        <>
            <header className={`flex sticky top-0 pt-2 lg:pt-4 z-50 px-[6%] justify-between items-center bg-white text-black font-poppins`}>
                <div className="logo">
                    <img src="../images/tahalogo2.png" className='h-24 w-24 lg:w-24 lg:h-24' alt="" />
                </div>
                <nav className=''>
                    <ul className='hidden mid:flex space-x-8 font-medium'>
                        <li className='transition delay-75 hover:text-[#0DB760] cursor-pointer'>Home</li>
                        <li className='transition delay-75 hover:text-[#0DB760] cursor-pointer'>About</li>
                        <li className='transition delay-75 hover:text-[#0DB760] cursor-pointer'>Services</li>
                        <li className='transition delay-75 hover:text-[#0DB760] cursor-pointer'>Projects</li>
                        <li className='transition delay-75 hover:text-[#0DB760] cursor-pointer'>Contact</li>
                    </ul>
                </nav>
                <div className="icons">
                    <div className="button hidden mid:block">
                        <Button />
                    </div>
                    <RiMenu3Fill onClick={() => { setBarsOpen(!barsOpen) }} color='black' size={30} className="block mid:hidden cursor-pointer "/>
                </div>
            </header>
            <div>
                    <ul className={`fixed py-6 top-20 left-0 z-40 gap-5 w-full bg-black text-white flex flex-col items-center font-medium ${barsOpen ? 'hidden opacity-0' : 'opacity-100'}`} style={{transition : "transform 0.3s ease, opacity 0.3s"}}>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#0DB760] cursor-pointer'>Home</li>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#0DB760] cursor-pointer'>About</li>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#0DB760] cursor-pointer'>Services</li>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#0DB760] cursor-pointer'>Projects</li>
                        <li className='transition w-full text-center  py-2 delay-75 hover:bg-[#0DB760] cursor-pointer'>Contact</li>
                    </ul>
            </div>
        </>
        
     );
}

export default Navbar;