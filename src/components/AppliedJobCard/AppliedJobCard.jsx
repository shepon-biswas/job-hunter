import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({jobData}) => {
    return (
        <>
            <div className='border border-cyan-300 my-10 px-10 py-5 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <div className='inline-flex gap-10 items-center'>
                        <div>
                            <img className='w-20 h-10' src={jobData.company_logo} alt="company-log" />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>{jobData.job_title}</h2>
                            <h5 className='text-gray-500 my-2'>{jobData.company_name}</h5>
                            <div className='my-4'>
                                <span className='px-2 py-1 border border-cyan-400 rounded text-cyan-400'>{jobData.job_type}</span>
                                <span className='px-2 py-1 border border-cyan-400 rounded text-cyan-400 ms-3'>{jobData.job_hour}</span>
                            </div>
                            <div className='inline-flex items-center text-gray-500'>
                                <MapPinIcon className='w-5 h-5'></MapPinIcon>
                                <span>{jobData.job_location}</span> 
                            </div>
                            <div className='inline-flex items-center text-gray-500 md:ms-3'>
                            <CurrencyDollarIcon className='w-5 h-5'></CurrencyDollarIcon>
                            <span>Salary: {jobData.salary}</span>
                            </div>
                        </div>
                    </div>
                    {/* Details Button */}
                    <div>
                    <Link
                    to={`../job/${jobData.id}`}
                    
                >
                    <button className='bg-cyan-400 text-white font-semibold px-4 py-3 rounded-lg'>View Details</button>
                </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AppliedJobCard;