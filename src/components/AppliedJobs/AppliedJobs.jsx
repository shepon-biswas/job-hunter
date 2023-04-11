import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {
    const {initialJobs} = useLoaderData();
    console.log(initialJobs);
    
    return (
        <>
            {/* Banner Section */}
            <div className='bg-cyan-200 text-center py-24'>
                <h1 className='font-bold text-2xl'>Applied Jobs</h1>
            </div>
            <div className='w-11/12 md:w-8/12 mx-auto my-20'>
                <div>
                    {
                        initialJobs.map(jobdata=> (
                            <AppliedJobCard
                                key ={jobdata.id}
                                jobData = {jobdata}
                            ></AppliedJobCard>
                        
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;