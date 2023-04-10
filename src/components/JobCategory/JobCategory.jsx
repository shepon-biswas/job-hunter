import React from 'react';
import accounting from '../../assets/icons/accounting.png';
import business from '../../assets/icons/business.png';
import chip from '../../assets/icons/chip.png';
import innovation from '../../assets/icons/innovation.png';

const JobCategory = () => {
    return (
        <>
            <div className='w-11/12 md:w-8/12 mx-auto mt-20'>
                {/* Title & Description */}
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>
                        Job Category List
                    </h1>
                    <p className='text-gray-500 my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                {/* Category Grid Section */}
                <div className='w-full mx-auto grid md:grid-cols-4 gap-5 my-20 '>
                    <div className='text-center md:text-left border border-cyan-400 rounded-lg py-10 px-6 bg-cyan-50'>
                        <img className='w-18 mx-auto md:ms-0' src={chip} alt="chip-image" />
                        <h3 className='text-gray-600 text-xl font-bold my-2'>Engineering</h3>
                        <p className='text-gray-500'>300+ Jobs Available</p>
                    </div>
                    <div className='text-center md:text-left border border-cyan-400 rounded-lg py-10 px-6 bg-cyan-50'>
                        <img className='w-18 mx-auto md:ms-0' src={innovation} alt="innovation-image" />
                        <h3 className='text-gray-600 text-xl font-bold my-2'>Creative Design</h3>
                        <p className='text-gray-500'>200+ Jobs Available</p>
                    </div>
                    <div className=' text-center md:text-left border border-cyan-400 rounded-lg py-10 px-6 bg-cyan-50'>
                        <img className='w-18 mx-auto md:ms-0' src={accounting} alt="accounting-image" />
                        <h3 className='text-gray-600 text-xl font-bold my-2'>Account & Finance</h3>
                        <p className='text-gray-500'>250+ Jobs Available</p>
                    </div>
                    <div className=' text-center md:text-left border border-cyan-400 rounded-lg py-10 px-6 bg-cyan-50'>
                        <img className='w-18 mx-auto md:ms-0' src={business} alt="accounting-image" />
                        <h3 className='text-gray-600 text-xl font-bold my-2'>Sales & Marketing</h3>
                        <p className='text-gray-500'>200+ Jobs Available</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobCategory;