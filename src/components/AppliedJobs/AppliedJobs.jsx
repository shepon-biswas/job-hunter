import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {
    const {initialJobs} = useLoaderData();

    const [selectItem, setSelectItem] = useState("")
    const handleChange = (e)=>{
        setSelectItem(e.target.value)
    }

    const newFilter = initialJobs.filter(jobItem => jobItem.job_type === selectItem || selectItem === "")

    
    return (
        <>
            {/* Banner Section */}
            <div className="relative h-50 w-full">
                <img
                    src="https://raw.githubusercontent.com/ProgrammingHero1/career-hub/main/assets/All%20Images/Vector.png"
                    alt=""
                />
                <img
                    className="absolute right-0 top-0"
                    src="https://raw.githubusercontent.com/ProgrammingHero1/career-hub/main/assets/All%20Images/Vector-1.png"
                    alt=""
                />
                <h1 className="absolute inset-0 flex justify-center items-center text-xl font-bold">Applied Jobs</h1>
            </div>
            {/* Filter Section */}
            <div className='w-11/12 md:w-8/12 mx-auto '>
                    <div className='text-end mt-10'>
                            <select 
                            value={selectItem}
                            onChange={handleChange}
                            name="Filter" id="" 
                            className='border border-b-gray-600 px-5 py-2'>
                                <option value="">Filter by(All)</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Remote">Remote</option>
                            </select>
                    </div>
            </div>
            <div className='w-11/12 md:w-8/12 mx-auto my-20'>
                <div>
                    {
                        newFilter.map(jobdata=> (
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