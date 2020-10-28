import React from 'react';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import WorkSlider from './WorkSlider/WorkSlider';
import Feedback from './Feedback/Feedback'
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Services />
            <WorkSlider />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;