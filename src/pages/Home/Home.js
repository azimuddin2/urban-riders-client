import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../components/Service/Service';
import background from '../../assets/images/Bg.png';
import './Home.css';
import { Fade } from 'react-reveal';

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
                {/* <Fade bottom> */}
                    <div className='row'>
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                {/* </Fade> */}
            </div>
        </section>
    );
};

export default Home;