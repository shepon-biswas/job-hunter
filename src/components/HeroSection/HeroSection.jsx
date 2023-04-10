import Lottie from "lottie-react";
import React from 'react';
import heroAnimation from '../../assets/hero-animation.json';

const HeroSection = () => {
    return (
        <>
            <div className='w-11/12 md:w-8/12 mx-auto mt-20'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* Hero Text info */}
                    <div>
                        <h1 className='text-4xl font-bold'>Find Your</h1>
                        <h1 className='text-4xl font-bold my-3'>Next level Job that's</h1>
                        <h1 className='text-cyan-400 font-bold text-4xl'>Revolutionary</h1>
                        <p className='my-5 text-gray-500'>We want impact, purpose and to contribute to a better world. However, building a purposeful career is not always an easy process to navigate. Here are some tips to get you started.</p>
                        <button className='px-4 py-3 bg-cyan-400 rounded-lg text-white font-bold hover:bg-cyan-600'>Get Started</button>
                    </div>
                    {/* Image Section */}
                    <div>
                        <div>
                            <Lottie animationData={heroAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;