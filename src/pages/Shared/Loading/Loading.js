import React from 'react';
import { Watch } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{paddingTop: '300px'}}>
            <Watch
                visible={true}
                height="60"
                width="60"
                radius="48"
                color="#FF6E40"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;