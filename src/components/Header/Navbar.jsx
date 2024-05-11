import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
    return (
        <div className='logo'>
            <a href='/'> <h1 className='font-extrabold text-4xl '>Upendhar<span className='text-4xl text-sky-400'>.</span>dev</h1> </a>
        </div>
    )
};

const Navbar = () => {

  return (
    <div className='h-[75px] w-[85%]  bg-[#f5f6fa] flex justify-around items-center border-b-2  fixed top-0 left-[6%] md:left-[8%] z-50 pt-3'>
        <Logo className="home"/>
        {/* <div className=' md:hidden rounded-full text-3xl'>
            <FontAwesomeIcon icon={faBars} />
        </div> */}
        <nav className='hidden md:flex items-end gap-8 text-1xl font-bold'>
            <a href="#About" className="hover:scale-110 hover:transition-all hover:text-sky-400">ABOUT</a>
            <a href="#Qualification" className="hover:scale-110 hover:transition-all hover:text-sky-400">QUALIFICATION</a>
            <a href="#Projects" className="hover:scale-110 hover:transition-all hover:text-sky-400">PROJECTS</a>
            <a href="#Connect" className="hover:scale-110 hover:transition-all hover:text-sky-400">CONNECT</a>
        </nav>
    </div>
  )
};

export default Navbar;