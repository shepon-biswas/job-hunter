import React from 'react';
import JobCard from '../JobCard/JobCard';

const JobsSection = ({jobsData}) => {
    // console.log(jobsData);

    return (
        <>
            <div className='w-11/12 md:w-8/12 mx-auto mt-20'>
                {/* Title & Description */}
                <div className='text-center my-20'>
                    <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                    <p className='text-gray-500 my-5'>All the featured jobs are listed below.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-10 mb-20'>
                    {
                        jobsData.map(jobData => <JobCard key = {jobData.id} jobData = {jobData}></JobCard>)
                    }
                </div>

            </div>
        </>
    );
};

export default JobsSection;