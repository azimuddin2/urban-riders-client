import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../components/Service/Service';
import background from '../../assets/images/Bg.png';
import './Home.css';

const Home = () => {
    const services = useLoaderData();

    return (
        <section className='background-section'
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='container'>
                <div className='row'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;