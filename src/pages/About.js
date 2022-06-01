import React from "react";

const About = () => {
  return (
    <div className="container max-w-screen-lg mx-auto pt-10 pb-10 text-neutral-content grid grid-flow-col gap-4">
      <div className="card mx-auto pb-10 w-96 bg-primary">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p className="text-base-content font-bold">
            My name is Mia Carmen. I'm a full stack web developer, graphic
            designer, and illustrator based in Los Angeles, CA. I've gained my
            skills through FIDM in Los Angeles, General Assembly, CodeSmith, and
            UC Berkely extension. Growing up I always loved art and design and
            over the years have found web developement to be the best way to
            express my love for both design and tech, meshed into one. My style
            is either super tacky girly, or dark and mischievous, but know how
            to find that happy middle. If you're looking for someone to help you
            step outside your comfort zone and create eyecatching content, I'm
            your gal.
          </p>
        </div>
      </div>

      <div className="card mx-auto pb-10 w-96 bg-primary">
        <div className="card-body">
          <h2 className="card-title">Skills</h2>
          <h3 className="font-bold mt-3">Design:</h3>
          <ul className="grid grid-cols-2 text-base-content">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Animate</li>
            <li>Adobe After Effects</li>
            <li>Adobe InDesign</li>
            <li>Adobe XD</li>
            <li>Sketch</li>
            <li>Procreate</li>
            <li>Figma</li>
          </ul>
          <h3 className="font-bold mt-5">Web Dev:</h3>
          <ul className="grid grid-cols-3 gap-x-9 text-base-content list-outside">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>MaterialUI</li>
            <li>Sass</li>
            <li>Handlebars</li>
            <li>React</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Node.JS</li>
            <li>Express</li>
            <li>Angular.JS</li>
            <li>ESLint</li>
            <li>Jest</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
            <li>IndexedDB</li>
            <li>WebPack</li>
            <li>Babel</li>
            <li>Solidity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
