import React, { useEffect, useState } from 'react';

const JobCategory = () => {
    const [jobCategory, SetJobCategory] = useState([]);

    useEffect(()=>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => SetJobCategory(data))
    },[])



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
                        {
                            jobCategory.map(jc =>(    
                                <div key={jc.id} className='text-center md:text-left border border-cyan-400 rounded-lg py-10 px-6 bg-cyan-50'>
                                    <img className='w-18 mx-auto md:ms-0' src={jc.category_logo} alt="chip-image" />
                                    <h5 className='text-gray-600 font-bold my-2'>{jc.category_name}</h5>
                                    <p className='text-gray-500'>{jc.available_jobs}</p>
                                </div>

                            ))
                        }
                </div>
            </div>
        </>
    );
};

export default JobCategory;