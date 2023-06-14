import React from 'react';
import About from '../About/About';
import Banner from './../Banner/Banner';
import Contact from '../../Contact/Contact';




const Home = () => {
    return (
        <div >
            <Banner />
            <About />
            {/* <Service /> */}
            {/* <Agency /> */}
            {/* <OurTeam /> */}
            <Contact />
            {/* <Articles /> */}
        </div>
    );
};
export default Home;