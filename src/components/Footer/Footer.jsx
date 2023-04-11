import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-black py-5'>
            <div className='w-11/12 md:w-8/12 mx-auto my-5 text-white'>
                <div className='grid md:grid-cols-6 gap-5 justify-between mb-4'>
                    <div className='col-span-2'>
                        <h1 className='font-bold text-xl'>Job Hunter</h1>
                        <p className='text-gray-400 my-4'>We want impact, purpose and to contribute to a better world. However, building a purposeful career is not always an easy process to navigate. </p>
                    </div>
                    <div>
                        <h1 className='font-bold mb-4'>Company</h1>
                        <div className='text-gray-400'>
                            <p>Latest News</p>
                            <p>Upcoming Event</p>
                            <p>Offices</p>
                            <p>Policy</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold mb-4'>Product</h1>
                        <div className='text-gray-400'>
                        <p>AI Universal</p>
                        <p>Digital News</p>
                        <p>Face Detector</p>
                        <p>Voice Recognation</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold mb-4'>Support</h1>
                        <div className='text-gray-400'>
                        <p>Help Desk</p>
                        <p>Ticket Support</p>
                        <p>Office Location</p>
                        <p>Privacy & Policy</p>
                    </div>
                    </div>
                    <div>
                    <h1 className='font-bold mb-4'>Contact</h1>
                    <div className='text-gray-400'>
                    <p>Call: +002233250</p>
                    <p>Email: conact@jobhunter.org</p>
                    </div>
                    </div>
                </div>
                <hr />
                {/* Copright Section */}
                <div className='text-center my-5 text-gray-300'>
                    <p>&copy; Job Hunter 2023</p>
                </div>
            </div>

            </div>
        </>
    );
};

export default Footer;