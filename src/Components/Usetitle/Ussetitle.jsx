import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Ussetitle = () => {
    const [title,setitle] =useState('Usesetitile');

    return (
        <div>
            <Helmet>
                <title>{title ? title : ""}</title>
            </Helmet>        
        </div>
    );
};

export default Ussetitle;