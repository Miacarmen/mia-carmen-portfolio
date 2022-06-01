import React from "react";
import { Footer, Button } from "react-daisyui";
import image2 from "../../images/heart (9).png";

const Foot = () => {
  return (
    <Footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
          <Footer.Title>Company</Footer.Title>
        <Button className="link link-hover">Home</Button>
        <Button className="link link-hover">About</Button>
        <Button className="link link-hover">Projects</Button>
        <Button className="link link-hover">Shop</Button>
        <Button className="link link-hover">Contact</Button>
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