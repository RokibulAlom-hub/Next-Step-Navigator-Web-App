import React from 'react';
import Slider from '../../Components/Slider/Slider';
import slides from "../../../public/Slider.json"
import Services from '../../Components/ServiceSection/Services';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Commitment from '../../Components/Commitment/Commitment';

const Home = () => {
    const services = useLoaderData();
    console.log(services);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div >
                <Slider slides={slides}></Slider>
            </div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-center font-bold text-4xl  mt-5'>Our Services</h1>
                <Services allservices={services}></Services>
            </div>
            <div>
                <Commitment></Commitment>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;