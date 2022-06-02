import React, { useState } from "react";
import { Navbar } from "react-daisyui";
import image from "../../images/heart (8).png";
import '../../styles/Navbar.css';

// * TO-DO: add hamburger menu for mobile views
// * TO-DO: change active link color, and link hover color

const Nav = ({ currentPage, handlePageChange }) => {
  const [expandMenu, setExpandMenu] = useState(false);

  return (

    <Navbar className="navbar bg-primary">
      <Navbar.Start className="px-2 mx-2">
        <span className="text-lg font-bold">
          <img alt="logo" src={image} height="70px" width="70px"></img>
        </span>
      </Navbar.Start>

  

      <Navbar.End className="flex-1 px-2 mx-2 ">

      <div className="dropdown">
      <label tabindex="0" className="dropMenu btn btn-ghost btn-circle" onClick={() => setExpandMenu(!expandMenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a></li>
        <li><a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
        <li><a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a></li>
        <li><a href="#shop" onClick={() => handlePageChange('Shop')} className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}>Shop</a></li>
        <li><a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a></li>
        <li><a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
      </ul>
      </div>

        <div className="hidden md:flex items-stretch space-x-4 font-medium">
          <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
          {/* <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a> */}
          {/* <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a> */}
          {/* <a href="#shop" onClick={() => handlePageChange('Shop')} className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}>Shop</a> */}
          <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;
