import React from 'react';
import './Banner.css';
import 'animate.css'

const Banner = () => {
    return (
        <div className='bannerbg'>
            <h1 className='text-light text-start padding animate__animated animate__backInDown'>Hi,I'm Razia Sultana </h1> 
            <h3 className='ps-5 text-start animate__animated animate__fadeInLeft text-light'>A Junior Web Developer</h3>
            <h3 className='ps-5 text-start animate__animated animate__fadeInRight text-light'>A Frontend Developer</h3>
            <a href="https://drive.google.com/file/d/1d79VLA10qSiDKXZPngsBdv9tWp_N9rsH/view?usp=sharing" target='_blank'><button className='resume btn text-light fw-bold'>Resume</button>
</a>
            
        </div>
    );
};

export default Banner;