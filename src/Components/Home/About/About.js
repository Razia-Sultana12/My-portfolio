import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import bg from '../wemon-clipart-3-removebg-preview.png';
import './About.css';

const About = () => {
    return (
      <div>
      
        <div className="container">
          <h2 className="text-center color my-5">About Me</h2>
        <div class="row my-5">
          <div class="col-12 col-md-6 animate__animated animate__fadeInLeft">
          <h3>I'm Razia Sultana</h3>
            <p>A student of Computer Science And Engineering from Dhaka City College.And also A Junior web developer with six plus months of front end training and passion for responsive website design and a determined believer in the mobile-first approach is searching for an opportunity to enhance my web development skills and knowledge.</p>
            <Link to="/contact"><button className='resume btn text-light fw-bold'>Hire Me</button></Link>
            
            
          </div>
          <div class="col-12 col-md-6 animate__animated animate__fadeInRight">
          <h3>Skills</h3>
            <button className="btn resume btn-dark">HTML</button>
            <button className="btn resume btn-dark">CSS</button>
            <button className="btn resume btn-dark">Javascript</button>
            <button className="btn resume btn-dark">React.js</button>
            <button className="btn resume btn-dark">Bootstrap</button>
            <button className="btn resume btn-dark">TailwindCSS</button>
            <button className="btn resume btn-dark ">MaterialUi</button>
            <button className="btn resume btn-dark">Node.js</button>
            <button className="btn resume btn-dark">Express.js</button>
            <button className="btn resume btn-dark ">MongoDB</button>
            <button className="btn resume btn-dark">Firebase</button>
            <button className="btn resume btn-dark ">Github</button>
            <button className="btn resume btn-dark">Netlify</button>
            <button className="btn resume btn-dark">ES6</button>
          </div>
        </div>
        </div>
        </div>
    );
};

export default About;