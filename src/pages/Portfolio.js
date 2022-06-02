import React from "react";
import { Card } from "react-daisyui";
import p1 from "../images/GirlyNoteTaker.png";
import p2 from "../images/DayPlanner.png";
import p3 from "../images/MiseEnPlace.png";

// * TO-DO: add SIX  projects

const Portfolio = () => {
  return (
    <div className="bg-base-200">
      <div className="container max-w-screen-lg mx-auto pb-10 text-primary">
        <Card>
          <h1 className="mt-7 font-bold text-2xl">
            A Cute and Girly Notetaker
          </h1>
          <p>Take Notes with Express, but in a Cute Girly Way</p>
          <a
            href="https://github.com/Miacarmen/super_girly_note_taker"
            target="blank"
            className="text-secondary"
          >
            Link to Github
          </a>
          <a
            href="https://super-girly-notetaker.herokuapp.com/"
            target="blank"
            className="text-secondary"
          >
            Live Site Here
          </a>
          <img alt="Girly Note Taker" src={p1}></img>
        </Card>

        <Card>
          <h1 className="mt-7 font-bold text-2xl">Day Planner</h1>
          <p>Plan Your Day Using moment.js</p>
          <a
            href="https://github.com/Miacarmen/Day-Planner"
            target="blank"
            className="text-secondary"
          >
            Link to Github
          </a>
          <img alt="Day Planner" src={p2}></img>
        </Card>
        <Card>
          <h1 className="mt-7 font-bold text-2xl">Mise en Place</h1>
          <p>Time Management Software</p>
          <a
            href="https://github.com/Miacarmen/mise-en-place"
            target="blank"
            className="text-secondary"
          >
            Link to Github
          </a>
          <a
            href="https://mise-en-place-planner.herokuapp.com/"
            target="blank"
            className="text-secondary"
          >
            Live Site Here
          </a>
          <img alt="Mise en Place" src={p3}></img>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
