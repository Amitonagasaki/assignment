import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar: React.FC = () => {
  // nav state is of type boolean
  const [nav, setNav] = useState<boolean>(false);

  // Handle click to toggle nav state
  const handleClick = () => setNav(!nav);

  return (
    <nav className='bg-black opacity-75  h-10 text-white flex  justify-between items-center '>
      <div className='h-auto w-36     md:ml-4  '>
        <Link to='/'>
          <img src="/public/Progress Telerik.png" alt="Progress Telerik" />
        </Link>
      </div>

      <ul className='hidden 2xl:flex gap-3 '>
        <div className='m-5 p-5'>
          <div className='flex flex-row gap-14'>
            <NavLink to='/'><li className='text-xs'>PRODUCTS</li></NavLink>
            <Link to='/enterprise'><li className='text-xs'>ENTERPRISE</li></Link>
            <Link to='/FreeTrials'><li className='text-xs'>FREE TRAILS</li></Link>
            <Link to='/Pricing'><li className='text-xs '>PRICING</li></Link>
            <Link to='/support'><li className='text-xs'>SUPPORT & LEARNING</li></Link>
            <Link to='/aboutus'><li className='text-xs'>ABOUT US</li></Link>
            <IoSearch />
            <Link to='/youracc'><li className='text-xs'>YOUR ACCOUNT</li></Link>
            <Link to='/platform'><li className='text-xs'>TELERIK PLATFORM</li></Link>
          </div>
        </div>

       
     
      </ul>

      <div className='2xl:hidden z-50 pr-2' onClick={handleClick} aria-label="Toggle navigation menu">
        {nav ? <FaTimes size={35} color={'white'} /> : <RxHamburgerMenu size={35} />}
      </div>

      {/* Mobile view */}
      <ul className={`${
        nav
          ? 'text-white bg-black opacity-100 transform translate-x-0'
          : 'opacity-0 transform -translate-y-full'
      } transition transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl z-10`}
        onClick={() => setNav(false)}>
        <Link to='/products'><li className='p-2 hover:text-teal-700'>Products</li></Link>
        <Link to='/enterprise'><li className='p-2 hover:text-teal-700'>Enterprise</li></Link>
        <Link to='/FreeTrials'><li className='p-2 hover:text-teal-700'>Free Trials</li></Link>
        <Link to='/Pricing'><li className='p-2 hover:text-teal-700'>Pricing</li></Link>
        <Link to='/Support'><li className='p-2 hover:text-teal-700'>Support & Learning</li></Link>
        <Link to='/Aboutus'><li className='p-2 hover:text-teal-700'>About us</li></Link>
        <Link to='/youracc'><li className='p-2 hover:text-teal-700'>Your Account</li></Link>
        <Link to='/platform'><li className='p-2 hover:text-teal-700'>Telerik Platform</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
