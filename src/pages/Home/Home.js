import React from 'react';
import Service from '../../components/Service/Service';
import background from '../../assets/images/Bg.png';
import './Home.css';
import { useQuery } from '@tanstack/react-query';

const Home = () => {

    const { data: services = [], isLoading, error } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://urban-riders-server.vercel.app/services')
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
         
    }

    if(error){

    }

    return (
        <section
            className='background-section'
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='container'>
                <div className='row'>
                    {
                        services?.map(service => <Service
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