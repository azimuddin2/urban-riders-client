import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoAdd, IoRemove } from 'react-icons/io5';
import peopleImage from '../../assets/images/people-icon.png';
import map from '../../assets/images/Map.png';
import './RiderService.css';

const RiderService = () => {
    const service = useLoaderData();
    const { name, image, price } = service;

    const [quantity, SetQuantity] = useState(1);
    const [newPrice, setPrice] = useState(price);

    const handleAddUser = () => {
        const newQuantity = quantity + 1;
        const newPrice = price * newQuantity;

        SetQuantity(newQuantity);
        setPrice(newPrice);
    };

    const handleDeleteUser = () => {
        const newQuantity = quantity - 1;
        const newPrice = price * newQuantity;

        if (newQuantity >= 1) {
            SetQuantity(newQuantity);
            setPrice(newPrice);
        }
    };

    return (
        <section className='form-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12 gap-4'>
                        <div className='d-flex align-items-center justify-content-between service-part'>
                            <div className='d-flex align-items-center'>
                                <img style={{ width: '100px' }} src={image} alt="" />
                                <div className='ms-3'>
                                    <h4 className='m-0'>{name}</h4>
                                    <h5 className='m-0 service-price'>${newPrice}</h5>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <button className='click-btn' onClick={handleDeleteUser}><IoRemove></IoRemove></button>
                                <img className='people-image' src={peopleImage} alt="" />
                                <h5 className='m-0 quantity'>{quantity}</h5>
                                <button className='click-btn' onClick={handleAddUser}><IoAdd></IoAdd></button>
                            </div>
                        </div>
                    </div>
                    {/* Google Map */}
                    <div className='d-grid col-lg-8 col-sm-12'>
                        <img src={map} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiderService;