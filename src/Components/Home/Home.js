import React from 'react';
import About from '../Home/About/About'
import Banner from '../Home/Banner/Banner';
import Contact from '../Home/Contact/Contact';
import Header from './Header/Header';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner> </Banner>
           <About></About>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;