import React from 'react';
import { Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './service.css';

const Service = ({ service }) => {
    const { _id, name, image } = service;
    const navigate = useNavigate();

    return (
        <div className='col-sm-12 col-md-6 col-lg-3 g-4'>
            <Zoom bottom>
                <div
                    onClick={() => navigate(`/search/${_id}`)}
                    // onClick={() => navigate('/search')}
                    className='service bg-white text-center px-5 pt-5 pb-3 rounded h-100'
                >
                    <img className='w-100' src={image} alt="" />
                    <h4 className='text-uppercase fs-5 mt-3'>{name}</h4>
                </div>
            </Zoom>
        </div>
    );
};

export default Service;