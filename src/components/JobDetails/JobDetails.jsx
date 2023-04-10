import { CalendarDaysIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [jobDetails, SetJobDetails] = useState({});
    
    const dynamicid = useParams()
    const jobID = dynamicid.id;
    const data = useLoaderData();
    
    useEffect(()=>{
        if(data){
            const jobData = data.find(data => data.id == jobID)
            SetJobDetails(jobData);
        }
    },[])
    
    
    return (
        <>
            {/* Banner Section */}
            <div className='bg-cyan-200 text-center py-24'>
                <h1 className='font-bold text-2xl'>Job Details</h1>
            </div>
            {/* Job Details Section */}
            <div className='w-11/12 md:w-8/12 mx-auto my-20'>
                <div className='grid md:grid-cols-3 gap-10'>
                    <div className='md:col-span-2'>
                        <p className='mb-10'><span className='font-bold'>Job Description: </span>{jobDetails.job_desc}</p>
                        <p className='mb-10' ><span className='font-bold'>Job Responsibily: </span> {jobDetails.job_res}</p>
                        <p className='mb-10' ><span className='font-bold'>Educational Requirements: </span>{jobDetails.educational_bg}</p>
                        <p className='mb-10' ><span className='font-bold'>Work Experiences: </span>{jobDetails.experience}</p>
                    </div>
                    <div>
                        {/* Job details & contact information section */}
                        <div className='bg-cyan-50 p-5 rounded'>
                            <h3 className='font-bold mb-3 '>Job Details</h3>
                            <hr />
                            <div className='my-4'>
                                <div className='inline-flex items-center'>
                                    <CurrencyDollarIcon className='text-cyan-400 h-5 w-5 me-1'></CurrencyDollarIcon>
                                    <p><span className='font-semibold'>Salary: </span>{jobDetails.salary}</p>
                                </div>
                                <div className='inline-flex items-center'>
                                    <CalendarDaysIcon className='text-cyan-400 h-5 w-5 me-1'></CalendarDaysIcon>
                                    <p><span className='font-semibold'>Job Title: </span>{jobDetails.job_title}</p>
                                </div>
                            </div>
                            <h3 className='font-bold mb-3 '>Job Details</h3>
                            <hr />
                            <div className='my-4'>
                                <div className='inline-flex items-center'>
                                    <PhoneIcon className='text-cyan-400 h-5 w-5 me-1'></PhoneIcon>
                                    <p><span className='font-semibold'>Phone: </span>{jobDetails.mobile}</p>
                                </div>
                                <div className='inline-flex items-center'>
                                    <EnvelopeIcon className='text-cyan-400 h-5 w-5 me-1'></EnvelopeIcon>
                                    <p><span className='font-semibold'>Email: </span>{jobDetails.email}</p>
                                </div>
                                <div className='inline-flex items-center'>
                                    <MapPinIcon className='text-cyan-400 h-5 w-5 me-1'> </MapPinIcon>
                                    <p><span className='font-semibold'>Location: </span>{jobDetails.job_location}</p>
                                </div>
                            </div>

                        </div>
                        {/* Apply Now Button */}
                        <Link to='/appliedjob'>
                            <button className='bg-cyan-400 px-2 py-3 rounded mt-8 w-full font-semibold text-white'>
                                Apply Now
                            </button>                        
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;