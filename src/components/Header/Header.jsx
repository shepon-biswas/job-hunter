import { IdentificationIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='bg-cyan-50'>
                <div className='w-11/12 md:w-8/12 mx-auto flex justify-between items-center py-5'>
                    {/* logo */}
                    <div>
                        <Link to={'/'}>
                            <div className='inline-flex items-center'>
                            <IdentificationIcon className='w-10 h-6 text-black'></IdentificationIcon>
                            <span className='font-bold text-xl'>Job Hunter</span>
                            </div>
                        </Link>
                        
                    </div>
                    {/* Navbar */}
                    <div >
                        <ul className='hidden md:inline-flex items-center space-x-5 '>
                            <li>
                                <NavLink to='/statistics'className={({isActive}) => (isActive? 'text-cyan-400': '')} >Statistics</NavLink>
                            </li>
                            <li>
                                <NavLink to='/appliedjob' className={({isActive}) => (isActive? 'text-cyan-400': '')}>Applied Jobs</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog' className={({isActive}) => (isActive? 'text-cyan-400': '')}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Header Button */}
                    <div>
                        <button className='bg-cyan-400 px-5 py-2 rounded text-white font-bold hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400
                         hidden md:flex'>Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;