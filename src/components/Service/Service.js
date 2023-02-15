import React from 'react';

const Service = ({ service }) => {
    const { name, image } = service;

    return (
        <div className='col-sm-12 col-md-6 col-lg-3 g-4'>
            <div className='bg-white text-center px-5 pt-5 pb-3 rounded h-100'>
                <img className='w-100' src={image} alt="" />
                <h4 className='text-uppercase fs-5 mt-3'>{name}</h4>
            </div>
        </div>
    );
};

export default Service;