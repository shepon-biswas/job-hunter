import React, { useState } from 'react';
import JobCard from '../JobCard/JobCard';

const JobsSection = ({jobsData}) => {
    const [seeall, SetseeAll] = useState(false);

    // Handle See All Button
    const handleSeeAll = ()=>{
        SetseeAll(true);
    }

    return (
        <>
            <div className='w-11/12 md:w-8/12 mx-auto mt-20'>
                {/* Title & Description */}
                <div className='text-center my-20'>
                    <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                    <p className='text-gray-500 my-5'>All the featured jobs are listed below.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-10 mb-10'>
                    {
                        jobsData.slice(0, seeall ? 6 : 4).map(jobData => 
                        <JobCard 
                            key = {jobData.id} 
                            jobData = {jobData}     
                        ></JobCard>)
                    }
                </div>
                {/* See All Button */}
                {
                    !seeall&&(
                        <div className='flex justify-center'>
                            <button 
                            onClick={handleSeeAll}
                            className='text-center bg-cyan-400 hover:bg-cyan-600 px-6 py-3 rounded-lg mb-10 text-white font-semibold'>See All</button>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default JobsSection;