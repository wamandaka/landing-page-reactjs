import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";
 
const Navbar = () => {
    
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1080px] mx-auto px-4">
            <h1 className='w-full text-3xl font-bold text-emerald-500'><a href="#home">REACT.</a></h1>
                <ul className='hidden md:flex'>
                    <li className='p-4 hover:text-emerald-400'><a href="#home">Home</a></li>
                    <li className='p-4 hover:text-emerald-400'><a href="#company">Company</a></li>
                    <li className='p-4 hover:text-emerald-400'><a href="#resource">Resource</a></li>
                    <li className='p-4 hover:text-emerald-400'><a href="#about">About</a></li>
                    <li className='p-4 hover:text-emerald-400'><a href="#content">Content</a></li>
                </ul>
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-500 h-full bg-black ease-in-out duration-500 md:hidden z-50' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-emerald-500 m-4 pt-3'>REACT.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-b-gray-500 hover:text-emerald-400'><a href="#home">Home</a></li>
                        <li className='p-4 border-b border-b-gray-500 hover:text-emerald-400'><a href="#company">Company</a></li>
                        <li className='p-4 border-b border-b-gray-500 hover:text-emerald-400'><a href="#resource">Resource</a></li>
                        <li className='p-4 border-b border-b-gray-500 hover:text-emerald-400'><a href="#about">About</a></li>
                        <li className='p-4 hover:text-emerald-400'><a href="#content">Content</a></li>
                    </ul>
                    <div className="text-center pt-12 block">
                        <button onClick={handleNav}><BsBoxArrowLeft size={30} /></button>
                    </div>
            </div>
        </div>
    )
}

export default Navbar