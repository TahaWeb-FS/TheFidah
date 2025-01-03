import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'lottie-react';
import Animation from './Animation-Green.json'
import './hero.css'

const Hero = () => {

  return (
    <div className='w-full'>
      <div className="parent flex lg:flex-row flex-col-reverse text-black ">
        <div className="container px-[8%] flex flex-col my-[-5%] lg:my-[8%] relative lg:w-[62%] w-full">
          <h1 className='text-[40px] lg:text-[55px] font-bold'>Hi, I'm <span className='text-[#0DB760]'>Taha </span></h1>
          <h2 className='text-[39px] font-bold leading-[50px] lg:text-[55px]'>a <span className='text-[#0DB760]'>Full Stack Developer</span></h2>
          <p className='font-medium py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. nemo illo atque <br /> odit eligendi vitae ut dolores quas eopo fugiat deleniti sunt at poruit lokijn. <br /> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="buttons py-4">
            <button className="cursor-pointer group relative flex gap-1.5 px-6 py-3 bg-[#0DB760] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Interface / Download">
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>
                  </g>
                </g>
              </svg>
              Download CV
                
            </button>
            <div className="icons flex gap-6 pt-12 absolute bottom-[-20%]">
              <FontAwesomeIcon icon={faLinkedinIn}  color="#000000" className=' transition delay-50 hover:text-[#0DB760]/70  cursor-pointer size-5' />
              <FontAwesomeIcon icon={faInstagram}  color="#000000" className='transition delay-50 hover:text-[#0DB760] cursor-pointer size-5' />
              <FontAwesomeIcon icon={faFacebook}  color="#000000" className='transition delay-50 hover:text-[#0DB760] cursor-pointer size-5' />
              <FontAwesomeIcon icon={faGithub}  color="#000000" className='transition delay-50 hover:text-[#0DB760] cursor-pointer size-5' />
            </div>
          </div>
          
          
        </div>
        <div className="">
          <Lottie animationData={Animation} loop={true} className="w-[350px] h-[350px] lg:mt-8 lg:w-[500px] lg:h-[500px] lg:mx-[-10%]" />
        </div>
      </div>
        
    </div>
  );
};

export default Hero;
