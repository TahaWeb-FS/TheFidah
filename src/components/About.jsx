import React from 'react';
import taha from '../assets/images/cropped_image.png';


function About() {
    return (
        <div className='text-center pt-12 text-3xl md:text-5xl font-bold'>
            <div className="container px-4 sm:px-6 lg:px-12 lg:my-16 mx-auto h-auto flex flex-wrap justify-center items-center gap-4 sm:gap-12 lg:gap-24">
                <div className="image w-[200px] sm:w-[300px] md:w-auto">
                    <img
                        src={taha}
                        className="h-auto object-cover mt-14 w-[300px]"
                        alt="Profile"
                    />
                </div>
                <div className="about-text p-4 sm:p-8 md:p-16">
                    <h3 className='text-center sm:text-left text-4xl sm:text-4xl font-bold mt-3'>About Me</h3>
                    <p className='text-sm font-medium text-justify mt-4 md:w-[470px] w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus minima magnamo reiciendis error facilis ut molestias illum. Facilis ipsa dolorum expedita officia accusamus accusantium, consequatur neque ratione alias sint.
                    </p>
                    <div className="about-description text-justify mt-4">
                        <p className='text-sm leading-8'><i className="fa-solid fa-user text-sm"></i> <span className='ml-2'>Name </span><span className='md:ml-24'>:</span> <span className='ml-4'>Mohamed Taha Lamkhizni</span></p>
                        <p className='text-sm leading-8'><i className="fa-solid fa-phone text-sm"></i> <span className='ml-2'>Phone</span> <span className='md:ml-[5.75rem]'>:</span> <span className='ml-4'>06 93 09 48 65</span></p>
                        <p className='text-sm leading-8'><i className="fa-solid fa-envelope text-sm"></i> <span className='ml-2'>Email</span> <span className='md:ml-24'>:</span> <span className='ml-4'>tahalam.dev@gmail.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
