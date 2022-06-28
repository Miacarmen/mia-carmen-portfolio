import React from 'react';
import profileImg from '../images/HeadShot.jpg';
// * TO-DO: add professional image of myself

const About = () => {
  return (
    <div className='bg-base-200 pb-7 pt-7'>
      <div className='container max-w-screen-lg mx-auto pt-10 pb-10 text-neutral-content content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='card mx-auto pb-3 w-96 bg-primary'>
          <div className='card-body content-center'>
            <h2 className='card-title text-center'>About Me</h2>
            <div className='pl-7 pb-5'>
              <img
                alt='headshot'
                src={profileImg}
                className='rounded-full'
                width='250px'
                height='250px'
              ></img>
            </div>
            <p className='text-base-content font-bold'>
              My name is Mia Carmen. I'm a full stack web developer, graphic
              designer, and illustrator based in Los Angeles, CA. I've gained my
              skills through FIDM in Los Angeles, General Assembly, CodeSmith,
              and UC Berkely extension. Growing up I always loved art and design
              and over the years have found web developement to be the best way
              to express my love for both design and tech, meshed into one. My
              style is either super tacky girly, or dark and mischievous, but
              know how to find that happy middle. If you're looking for someone
              to help you step outside your comfort zone and create eyecatching
              content, I'm your gal.
            </p>
          </div>
        </div>

        <div className='card mx-auto pb-10 w-96 bg-primary'>
          <div className='card-body'>
            <h2 className='card-title'>Skills</h2>
            <h3 className='font-bold mt-5'>Design:</h3>
            <ul className='grid grid-cols-2 gap-x-5 text-base-content list-outside font-semibold'>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe After Effects</li>
              <li>Adobe Animate</li>
              <li>Adobe InDesign</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
              <li>Procreate</li>
              <li>Figma</li>
            </ul>
            <h3 className='font-bold mt-5'>Web Dev:</h3>
            <ul className='grid grid-cols-3 gap-x-5 text-base-content list-outside font-semibold'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
              <li>MaterialUI</li>
              <li>DaisyUI</li>
              <li>Sass</li>
              <li>Handlebars</li>
              <li>React</li>
              <li>Redux</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>JSX</li>
              <li>Node.JS</li>
              <li>Express.js</li>
              <li>AngularJS</li>
              <li>AJAX</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>PostgreSQL</li>
              <li>Apollo</li>
              <li>GraphQL</li>
              <li>IndexedDB</li>
              <li>APIs</li>
              <li>MERN Stack</li>
              <li>MVC</li>
              <li>PWAs</li>
              <li>OOP</li>
              <li>Git</li>
              <li>Github</li>
              <li>Jest</li>
              <li>WebPack</li>
              <li>Babel</li>
              <li>Solidity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
