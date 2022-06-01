import React from "react";
import { Footer, Button } from "react-daisyui";
import image2 from "../../images/heart (9).png";

const Foot = ({ currentPage, handlePageChange }) => {
  return (
    <Footer className="footer footer-center p-10 bg-base-100 text-base-content rounded ">
      <div className="">
        <Footer.Title>Company</Footer.Title>
        <div className="hidden sm:flex items-stretch">
          <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
          <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
          <a href="#shop" onClick={() => handlePageChange('Shop')} className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}>Shop</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </div>
        <Footer.Title>Services</Footer.Title>
        <div>
          <Button size="sm" className="link link-hover">Web Development</Button>
          <Button size="sm" className="link link-hover">Graphic Design</Button>
          <Button size="sm" className="link link-hover">Illustration</Button>
          <Button size="sm" className="link link-hover">Branding</Button>
        </div>
        <Footer.Title>Social</Footer.Title>
        <div>
          <Button size="sm" className="link link-hover">Github</Button>
          <Button size="sm" className="link link-hover">Instagram</Button>
          <Button size="sm" className="link link-hover">LinkedIn</Button>
        </div>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <img alt="logo" src={image2} height="70px" width="70px"></img>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - Made With Sugar, Spice & Everything Nice</p>
      </div>
    </Footer>
  );
};

export default Foot;
