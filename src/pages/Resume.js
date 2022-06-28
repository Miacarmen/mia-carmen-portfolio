import React from "react";
import { Card } from "react-daisyui";
// import CardBody from "react-daisyui/dist/Card/CardBody";

// add link to a downloadable resume and a list of the developer’s proficiencies

const Resume = () => {
  return (
    <div className="bg-base-200">
      <div className="container max-w-screen-lg mx-auto pt-10 pb-10">
        <Card className="card lg:card-side bg-base-100 shadow-xl text-center mb-5">
          <div className="card-body">
            <h2 className="font-semibold text-xl">
              View and Download My Resume
            </h2>
            <div className="card-actions justify-center">
              <link alt="resume" download="https://drive.google.com/file/d/1Y9KHYeXjQtRk9HkX1pUJqG5OdX-Q8lKE/view?usp=sharing"><button className="btn btn-primary ">Download</button></link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
