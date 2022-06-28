import React from "react";
import { Card } from "react-daisyui";
import img1 from "../images/Swimming.png";
import img2 from "../images/Feral.png";
import img3 from "../images/Temper.png";
import img4 from "../images/Devil3.png";
import img5 from "../images/Devils-Disco-Top.png";
import img6 from "../images/Devils-Disco-Bottom.png";

// * TO-DO: When this page is active, display shopping cart icon
// * TO-DO: When a user clicks add to cart, add item to cart, change button to say "added"
const Prints = () => {
  return (
    <div className="bg-base-200">
      <h1 className="pt-5 text-3xl font-bold text-base-300 text-center">Prints</h1>
      <div className="container max-w-screen-lg mx-auto pb-10 text-primary mt-7">
        <Card className="card-title lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Swimming" src={img1}></img>
            <Card.Title>Swimming</Card.Title>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow">Add to Cart</button>
            </div>
          </div>
        </Card>

        <Card className="card lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Feral" src={img2}></img>
            <Card.Title>Feral</Card.Title>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow">Add to Cart</button>
            </div>
          </div>
        </Card>

        <Card className="card lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Temper" src={img3}></img>
            <Card.Title>
              Careful Now, She's Got a Temper
            </Card.Title>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow">Add to Cart</button>
            </div>
          </div>
        </Card>

        <Card className="card lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Devil Girl" src={img4}></img>
            <Card.Title>Good Girl</Card.Title>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow">Add to Cart</button>
            </div>
          </div>
        </Card>

        <Card className="card lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Devil's Disco" src={img5}></img>
            <Card.Title>The Devils Disco</Card.Title>
            <p>**Animation Under Construction</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow">Add to Cart</button>
            </div>
          </div>
        </Card>

        <Card className="card lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Devil's Disco" src={img6}></img>
            <Card.Title>The Devils Disco</Card.Title>
            <p>**Animation Under Construction</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow">Add to Cart</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Prints;
