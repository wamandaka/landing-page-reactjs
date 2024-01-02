import React from 'react';

const Analytics = () => {
    return ( 
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1080px] mx-auto grid md:grid-cols-2">
                <img className='mx-auto my-4' src="https://source.unsplash.com/featured?analytics" alt="" width={400} height={400}/>
                <div className="flex flex-col justify-center">
                    <p className='text-emerald-500 font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo iusto officia quibusdam, a beatae exercitationem inventore, fugiat itaque autem expedita ullam sint incidunt.</p>
                    <button className='bg-black text-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto py-2 hover:bg-gray-700 md:mx-0'>Get Started</button>
                </div>
            </div>
        </div>
     );
}
 
export default Analytics;