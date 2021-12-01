import React from 'react';
import './Banner.css';
import 'animate.css'
import img from '../webdev.jpg';

const Banner = () => {
    return (
        <div>
            <div className="container">
        <div class="row my-5">
          <div class="col-12 col-md-6 animate__animated animate__fadeInLeft">
            <h1 className='text-start padding animate__animated animate__backInDown'>Hi,I'm <span className="color">Razia Sultana</span> </h1> 
            <h3 className='ps-5 text-start animate__animated animate__fadeInLeft '>A Junior Frontend Developer</h3>
            <a href="https://drive.google.com/file/d/1d79VLA10qSiDKXZPngsBdv9tWp_N9rsH/view?usp=sharing" target='_blank'><button className='ms-5 resume btn fw-bold'>Resume</button>
</a>
</div>
          <div class="col-12 col-md-6 animate__animated animate__fadeInRight">
       
          <img className='rounded-circle' width="450" src={img} alt="" srcset="" />
          </div>
        </div>
          </div>
            
        </div>
    );
};

export default Banner;