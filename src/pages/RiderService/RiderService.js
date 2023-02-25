import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import peopleImage from '../../assets/images/people-icon.png';
import map from '../../assets/images/Map.png';
import './RiderService.css';

const RiderService = () => {
    const service = useLoaderData();
    const { name, image, price } = service;

    const [quantity, SetQuantity] = useState(1);
    const [newPrice, setPrice] = useState(price);

    const handleAddQuantity = () => {
        // const newQuantity = quantity + 1;
        // const newPrice = price * newQuantity;

        // SetQuantity(newQuantity);
        // setPrice(newPrice);
    };

    const handleDeleteQuantity = () => {
        // const newQuantity = quantity - 1;
        // if (newQuantity >= 1) {
        //     SetQuantity(newQuantity);
        // }
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
                                <button className='click-btn' onClick={handleDeleteQuantity}><IoRemove></IoRemove></button>
                                <img className='people-image' src={peopleImage} alt="" />
                                <h5 className='m-0 quantity'>{quantity}</h5>
                                <button className='click-btn' onClick={handleAddQuantity}><IoAdd></IoAdd></button>
                            </div>
                        </div>

                        <div className='search-part'>
                            <form>
                                <div class="mb-2">
                                    <label for="exampleInputFrom" class="form-label fw-semibold">Pick From</label>
                                    <input name='from' type="text" class="form-control" id="exampleInputFrom" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputTo" class="form-label fw-semibold">Pick To</label>
                                    <input name='to' type="text" class="form-control" id="exampleInputTo" required/>
                                </div>
                                <button type="submit" class="search-btn"><BiSearch className='fs-4'></BiSearch> Search</button>
                            </form>
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