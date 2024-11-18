import React from 'react';
import Slider from '../../Components/Slider/Slider';
import slides from "../../../public/Slider.json"

const Home = () => {
    return (
        <div>
            <Slider slides={slides}></Slider>
        </div>
    );
};

export default Home;