import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../wemon-clipart-3-removebg-preview.png';
import './About.css';

const About = () => {
    return (
        <div class="bgimg">
        <div class="row">
          <div class="col-12 col-md-6">
            <img src={bg} alt="" />
          </div>
          <div class="col-12 col-md-6 my-auto text-light">
            <h1>I'm Razia Sultana</h1>
            <p>A Junior web developer with six plus months of front end training and passion for responsive website design and a determined believer in the mobile-first approach is searching for an opportunity to enhance my web development skills and knowledge.</p>
            <button className='resume btn text-light fw-bold'>Hire Me</button>
          </div>
        </div>
        </div>
    );
};

export default About;