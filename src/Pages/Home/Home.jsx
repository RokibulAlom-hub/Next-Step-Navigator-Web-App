import React from 'react';
import Slider from '../../Components/Slider/Slider';
import slides from "../../../public/Slider.json"
import Services from '../../Components/ServiceSection/Services';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Commitment from '../../Components/Commitment/Commitment';
import Allfeedbacks from '../../Components/What People Say/Allfeedbacks';
import feedbacks from "../../../public/Feedback.json"

const Home = () => {
    const services = useLoaderData();
    // console.log(services);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className=''>
                <Slider slides={slides}></Slider>
            </div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-center text-[#6C1C2E] underline font-bold text-4xl  mt-5'>Our Services</h1>
                <Services allservices={services}></Services>
            </div>
            <div className='w-11/12 mx-auto'>
                <h1 className="text-center text-4xl font-bold text-[#6C1C2E]  mb-8">
                    What People Say ....
                </h1>
                <Allfeedbacks feedbacks={feedbacks}></Allfeedbacks>
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