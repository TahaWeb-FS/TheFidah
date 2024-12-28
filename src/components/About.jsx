import React from 'react'


function About() {
    return ( 
        <div className='bg-[url("../images/about-bg.png")] bg-cover bg-no-repeat text-5xl my-10 font-bold text-center h-[400px]'>
            <h1>About Me</h1>
            <div className="container mt-36 flex justify-center items-center">
                <div className="image">
                    <img src="../images/me-cropped.png" className="w-[500px] " />
                </div>
                
            </div>
        </div>
        
     );
}

export default About;