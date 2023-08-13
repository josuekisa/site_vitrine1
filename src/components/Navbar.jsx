import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);

  return (
    <nav className={` dark:bg-[#181610] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ${nav ? 'md:block' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
       
    
      <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            className=" h-20 w-200 mr-5  transition-transform transform-gpu hover:scale-110"
            alt="Flowbite Logo"
          />
        </Link>
         
       
        <div className="flex md:order-2">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={handleclick}>
            <span className="sr-only">Open main   menu</span>
          
          </button>
        </div>
        <div className={`items-center justify-between md:flex md:w-auto md:order-1 ${nav ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#181610] md:dark:bg-[#181610] dark:border-gray-700">
            <li><Link to="home"  smooth={true} duration={500} >
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </Link></li>
            <li><Link to="about"  smooth={true} duration={500} >
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">A Propos</a>
              </Link></li>
            <li> <Link to="prestation"  smooth={true} duration={500} >
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Prestation</a>
              </Link></li>
            <li> <Link to="contact"  smooth={true} duration={500} >
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
           </Link> </li>    
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;