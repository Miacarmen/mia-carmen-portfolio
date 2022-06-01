import React from "react";
import { Navbar } from "react-daisyui";
import image from "../../images/heart (8).png";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar className="bg-base-200">
      <Navbar.Start className="px-2 mx-2">
        <span className="text-lg font-bold">
          <img alt="logo" src={image} height="70px" width="70px"></img>
        </span>
      </Navbar.Start>

    

      <Navbar.End className="flex-1 px-2 mx-2">
        <div className="hidden sm:flex items-stretch space-x-4">
          <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
          <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
          <a href="#shop" onClick={() => handlePageChange('Shop')} className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}>Shop</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;
