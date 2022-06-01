import React from "react";
import { Hero, Button } from "react-daisyui";

const Home = () => {
  return (
    <Hero>
      <Hero.Overlay className="min-h-screen bg-primary" />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Mia Carmen</h1>
          <h2 className="mt-5 text-3xl">
            Full Stack Web Developer. Graphic Designer. Illustrator.
            <br></br>
            Based in Los Angeles.
          </h2>
          <Button className="mt-5 btn bg-base-200 btn-outline-none text-black">Learn More</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default Home;
