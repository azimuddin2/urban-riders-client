import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Map from '../../components/Map/Map';
import './Search.css';

const Search = () => {
    const [accepted, setAccepted] = useState(false);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const service = useLoaderData();
    const { name, _id } = service
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const start = form.origin.value;
        const end = form.destination.value;
        setOrigin(start);
        setDestination(end);
    };

    return (
        <section className='form-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12 gap-4 mb-4'>
                        <div className='search-part'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <input name='service' defaultValue={name} disabled type="text" class="form-control bg-light" />
                                </div>
                                <div class="mb-2">
                                    <label for="exampleInputFrom" class="form-label fw-semibold">Pick From</label>
                                    <input name='origin' type="text" class="form-control" id="exampleInputFrom" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputTo" class="form-label fw-semibold">Pick To</label>
                                    <input name='destination' type="text" class="form-control" id="exampleInputTo" required />
                                </div>
                                <button onClick={() => setAccepted(!accepted)} type="submit" class="search-btn"><BiSearch className='fs-4'></BiSearch> Search</button>
                            </form>
                            {accepted ?
                                <button
                                    onClick={() => navigate(`/rider-service/${_id}`)}
                                    type="submit" class="btn btn-dark w-100 mt-4">Destination</button>
                                :
                                ""
                            }
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className='d-grid col-lg-8 col-sm-12 rounded-5'>
                        <Map></Map>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;