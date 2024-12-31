import React from 'react'
import '../App.css'


function Services() {
    return ( 
        <div className="container">
            <div className="mt-[10%] md:mx-[8%] w-full">
            <h1 className='text-center relative title text-6xl font-bold'>Services</h1>
            <div className="box-container grid grid-cols-3 mt-[7.8%] gap-32">
                <div className="box rounded-lg border-2 px-[8%] py-[8%] h-[330px] w-[370px] hover:bg-[#1e1e1e] hover:scale-110">
                    <div className="icons text-center">
                        <i class="fa-solid fa-computer text-[#F4000A] text-6xl"></i>
                    </div>
                    <h3 className='pt-10 font-bold text-3xl text-center'>Web Designer</h3>
                    <p className='text-center pt-5 font-normal'>I design beautiful modern website using frameworks such as ReactJs, Laravel and tailwind for the design.</p>
                </div>
                <div className="box shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg border-2 px-[7%] py-[7%] h-[330px] w-[370px] hover:bg-[#1e1e1e]">
                    <div className="icons text-center">
                        <i class="fa-solid fa-pencil text-[#F4000A] text-6xl"></i>
                    </div>
                    <h3 className='pt-10 font-bold text-3xl text-center'>Web Designer</h3>
                    <p className='text-center pt-5 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore quisquam assumenda aperiam voluptatibus enim.</p>
                </div>
                <div className="box shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg border-2 px-[7%] py-[7%] h-[330px] w-[370px] hover:bg-[#1e1e1e]">
                    <div className="icons text-center">
                        <i class="fa-solid fa-code text-[#F4000A] text-6xl"></i>
                    </div>
                    <h3 className='pt-10 font-bold text-3xl text-center'>Web Designer</h3>
                    <p className='text-center pt-5 font-mediunormal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore quisquam assumenda aperiam voluptatibus enim.</p>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Services;