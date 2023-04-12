import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorPage = () => {
    return (
        <>
            {/* Header */}
            <Header></Header>
            <div className='w-11/12 md:w-8/12 mx-auto flex justify-center items-center h-screen'>
                    <div className='text-center'>
                        <FaceFrownIcon className='h-40 w-40 text-red-600 mx-auto'></FaceFrownIcon>
                        <h1 className='text-xl font-bold text-center'>Oppss! Something Went Wrong...</h1>
                        <Link to={'/'}>
                            <button className='px-4 py-2 text-white bg-cyan-400 rounded-lg font-semibold my-8 hover:bg-cyan-600'>Go Back HomePage</button>
                            </Link>
                    </div>
            </div>
        </>
    );
};

export default ErrorPage;