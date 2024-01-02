import React from 'react';
import Typed from "react-typed";

const Hero = () => {
    return ( 
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-emerald-500 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className="flex justify-center items-center">
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'  strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600 px-3'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='bg-emerald-300 text-black w-[200px] rounded-md font-medium my-6 mx-auto py-2 hover:bg-emerald-200'>Get Started</button>
            </div>
        </div>
     );
}
 
export default Hero;