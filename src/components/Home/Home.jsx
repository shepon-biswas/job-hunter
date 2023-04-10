import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import JobCategory from '../JobCategory/JobCategory';
import JobsSection from '../JobsSection/JobsSection';

const Home = () => {
    const jobsData = useLoaderData();
    // console.log(jobsData);
    return (
        <div>
            <HeroSection></HeroSection>
            <JobCategory></JobCategory>
            <JobsSection jobsData = {jobsData} ></JobsSection>
        </div>
    );
};

export default Home;