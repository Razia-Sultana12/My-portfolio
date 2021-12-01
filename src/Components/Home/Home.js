import React from 'react';
import About from '../Home/About/About'
import Banner from '../Home/Banner/Banner';
import Contact from '../Home/Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            
           <Banner> </Banner>
           <About></About>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;