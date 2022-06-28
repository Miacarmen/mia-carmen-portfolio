import React from 'react';
import image2 from '../../images/heart (9).png';
import icon1 from '../../images/github.png';
import icon2 from '../../images/linkedin.png';
import icon3 from '../../images/instagram.png';

const Foot = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <footer class='footer p-10 bg-base-100 text-base-content justify-items-center'>
        <div>
          <span class='footer-title'>Services</span>
          <p>Web Development</p>
          <p>Graphic Design</p>
          <p>Illustration</p>
          <p>Branding</p>
        </div>
        <div>
          <span class='footer-title'>Company</span>
          <a
            href='#home'
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
          <a
            href='#about'
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
          <a
            href='#resume'
            onClick={() => handlePageChange('Resume')}
            className={
              currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
            }
          >
            Resume
          </a>
          <a
            href='#portfolio'
            onClick={() => handlePageChange('Portfolio')}
            className={
              currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
            }
          >
            Portfolio
          </a>
          <a
            href='#shop'
            onClick={() => handlePageChange('Shop')}
            className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}
          >
            Shop
          </a>
          <a
            href='#contact'
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </a>
        </div>

        <div>
          <span class='footer-title'>Legal</span>
          <a href='/' class='link link-hover'>
            Terms of use
          </a>
          <a href='/' class='link link-hover'>
            Privacy policy
          </a>
          <a href='/' class='link link-hover'>
            Cookie policy
          </a>
        </div>
      </footer>
      <footer class='footer flex grid grid-cols-3 px-10 pt-2 pb-2 bg-base-100 text-base-content border-base-300'>
        <div class='place-self-center grid-flow-col'>
          <p>Copyright © 2022 - Made With Sugar, Spice & Everything Nice</p>
        </div>
        <div className='justify-self-center'>
          <img alt='logo' src={image2} height='70px' width='70px'></img>
        </div>
        <div class='md:place-self-center md:justify-self-end'>
          <div class='grid grid-flow-col gap-4'>
            <img alt='github' src={icon1} height='30px' width='30px'></img>
            <img alt='linkedin' src={icon2} height='30px' width='30px'></img>
            <img alt='instagram' src={icon3} height='30px' width='30px'></img>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
