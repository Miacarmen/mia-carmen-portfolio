import React from "react";

const About = () => {
  return (
    <div className="container max-w-screen-lg mx-auto pt-10 pb-10 text-neutral-content grid grid-flow-col gap-4">
      <div className="card mx-auto pb-10 w-96 bg-primary">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>
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
          <p>
           Adobe Photoshop, Adobe Illustrator, Adobe Animate, Adobe AfterEffects, Javascript, HTML, CSS, React
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
