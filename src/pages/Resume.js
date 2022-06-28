import React from "react";
import { Card, Button } from "react-daisyui";

// add link to a downloadable resume and a list of the developer’s proficiencies

const Resume = () => {
  return (
    <div className="bg-base-200">
      <div className="container max-w-screen-lg mx-auto pt-10 pb-10">
        <Card className="card bg-base-100 shadow-xl text-center mb-5">
          <div className="card-body">
            <h2 className="font-semibold text-xl">
              View and Download My Resume
            </h2>
            <div className="card-actions justify-center">
            <Button className="btn btn-primary "><a href="../images/Mia-Carmen_Web_Developer.png" download="Mia-Carmen_Web_Developer.png">Download</a></Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
