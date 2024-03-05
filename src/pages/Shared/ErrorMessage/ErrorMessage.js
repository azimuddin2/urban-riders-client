import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div className='py-5'>
            <p className='text-danger text-center pt-5'>error: {message}</p>
        </div>
    );
};

export default ErrorMessage;