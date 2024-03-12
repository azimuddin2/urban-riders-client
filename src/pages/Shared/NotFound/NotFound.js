import React from 'react';
import './NotFound.css';
import notFound from '../../../assets/images/not-found.gif';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Zoom } from 'react-reveal';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Zoom>
            <div className='text-center my-5'>
                <img className='not-found-img' src={notFound} alt="" /><br />
                <button onClick={() => navigate('/')}
                    className='d-flex align-items-center mx-auto found-btn'>
                    <FaHome className='me-1 fs-5'></FaHome>
                    <span className='fw-semibold'>BACK TO HOME</span>
                </button>
            </div>
        </Zoom>
    );
};

export default NotFound;