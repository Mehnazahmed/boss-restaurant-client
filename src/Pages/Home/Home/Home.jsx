import React from 'react';
import { Helmet } from 'react-helmet-async';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Swipper from '../Swipper/Swipper';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Home</title>
            </Helmet>
          <Banner></Banner>  
          <Swipper></Swipper>
          <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;