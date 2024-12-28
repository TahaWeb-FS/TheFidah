import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'lottie-react';
import Animation from './Animation.json'
import './hero.css'

const Hero = () => {
  return (
    <div className='w-full bg-[("../images/bg-2.jpg")]'>
      <div className="parent flex lg:flex-row flex-col  ">
        <div className="container lg:py-5 px-[8%] flex flex-col my-[12%] relative lg:w-[62%] w-full">
          <h1 className='text-[45px] lg:text-[60px] font-bold'>Hi, I'm <span className='text-[#F61907]'>Taha </span></h1>
          <h2 className='text-[45px] font-bold leading-[50px] lg:text-[60px]'>a <span className='text-[#F61907]'>Full Stack Developer</span></h2>
          <p className='font-medium py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. nemo illo atque <br /> odit eligendi vitae ut dolores quas eopo fugiat deleniti sunt at poruit lokijn. <br /> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="buttons py-4">
            <button className="cursor-pointer group relative flex gap-1.5 px-6 py-3 bg-[#F61907] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md w-fit">
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
            <div className="icons flex gap-6 py-8 absolute bottom-[-20%]">
              <FontAwesomeIcon icon={faLinkedinIn}  color="#ffffff" className=' transition delay-50 hover:text-[#f61907]/70  cursor-pointer size-5' />
              <FontAwesomeIcon icon={faInstagram}  color="#ffffff" className='transition delay-50 hover:text-[#f61907] cursor-pointer size-5' />
              <FontAwesomeIcon icon={faFacebook}  color="#ffffff" className='transition delay-50 hover:text-[#f61907] cursor-pointer size-5' />
              <FontAwesomeIcon icon={faGithub}  color="#ffffff" className='transition delay-50 hover:text-[#f61907] cursor-pointer size-5' />
            </div>
          </div>
          
          
        </div>
        <div className="div flex items-center ">
          <Lottie animationData={Animation} loop={true} className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] mx-auto" />
        </div>
      </div>
        
    </div>
  );
};

export default Hero;
