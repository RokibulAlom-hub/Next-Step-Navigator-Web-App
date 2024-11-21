import React from 'react';
import Feedcard from './Feedcard';
import Marquee from "react-fast-marquee";


const Allfeedbacks = ({ feedbacks }) => {

    return (
        <div className='my-5'>
            <Marquee>
                <div className='flex'>
                    {
                        feedbacks.map(data => <Feedcard key={data.id} data={data}> </Feedcard>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Allfeedbacks;