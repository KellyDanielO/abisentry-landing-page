import { useState } from 'react';
import Logo from '../assets/images/logo.png'

const NavBar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    return <nav className='flex justify-between items-center py-5 backdrop-blur-lg px-2 fixed top-0 w-[90%] lg:w-[70%] mx-auto left-[50%] -translate-x-[50%]'>
        <a href="#">
            <img src={Logo} alt="Abisentry" />
        </a>
        {/* Desktop Menu */}
        <ul className='hidden lg:flex gap-5 justify-center items-center'>
            <li><a href="#" className='text-lg font-medium'>Products</a></li>
            <li><a href="#" className='text-lg font-medium'>Services</a></li>
            <li><a href="#" className='text-lg font-medium'>Resources</a></li>
            <li><a href="#" className='text-lg font-medium'>Free Tools</a></li>
            <li><a href="#" className='text-lg font-medium'>Blog</a></li>
            <li><a href="#" className='text-lg font-medium'>Subscription Plans</a></li>
            <li><a href="#" className='text-lg font-medium'>Company</a></li>
        </ul>
        <div className='hidden lg:flex gap-5 justify-center items-center'>
            <a href="#" className='text-lg font-medium'>Login</a>
            <a href="#" className='text-lg font-medium py-2 px-5 bg-primary rounded-lg uppercase'>request a demo</a>
        </div>

        {/* Mobile Menu toggle */}
        <button
            id="menu-btn"
            className={`block hamburger lg:hidden focus:outline-none z-50  ${isActive ? "open" : ""
                } `}
            onClick={toggleActiveClass}
        >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </button>

        {/* Mobile Menu */}


        <ul
            className={`hidden hm_menu md:mx-auto gap-6 flex-col bg-black shadow-lg p-5  lg:hidden ${isActive ? "active" : ""
                } `}
        >
            <div className="flex justify-center items-center flex-col h-screen gap-5 text-sm relative">
                <li onClick={toggleActiveClass}><a href="#" className='text-lg font-medium'>Products</a></li>
                <li onClick={toggleActiveClass}><a href="#" className='text-lg font-medium'>Services</a></li>
                <li onClick={toggleActiveClass}><a href="#" className='text-lg font-medium'>Resources</a></li>
                <li onClick={toggleActiveClass}><a href="#" className='text-lg font-medium'>Free Tools</a></li>
                <li onClick={toggleActiveClass}><a href="#" className='text-lg font-medium'>Blog</a></li>
                <li onClick={toggleActiveClass}><a href="#" className='text-lg font-medium'>Subscription Plans</a></li>
                <li onClick={toggleActiveClass}><a href="#" className='text-lg font-medium'>Company</a></li>

                <a href="#" className='text-lg font-medium'>Login</a>
                <a href="#" className='text-lg font-medium py-2 px-5 bg-primary rounded-lg uppercase'>request a demo</a>

            </div>
        </ul>
    </nav>
}

export default NavBar