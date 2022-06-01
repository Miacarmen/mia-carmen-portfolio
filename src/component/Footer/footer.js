import React from "react";
import { Footer, Button } from "react-daisyui";
import image2 from "../../images/heart (9).png";

const Foot = () => {
  return (
    <Footer className="footer footer-center p-10 bg-base-100 text-base-content rounded ">
      <div className="">
        <Footer.Title>Company</Footer.Title>
        <div>
          <Button size="sm" className="link link-hover">Home</Button>
          <Button size="sm" className="link link-hover">About</Button>
          <Button size="sm" className="link link-hover">Projects</Button>
          <Button size="sm" className="link link-hover">Shop</Button>
          <Button size="sm" className="link link-hover">Contact</Button>
        </div>
        <Footer.Title>Services</Footer.Title>
        <div>
          <Button size="sm" className="link link-hover">Web Development</Button>
          <Button size="sm" className="link link-hover">Graphic Design</Button>
          <Button size="sm" className="link link-hover">Illustration</Button>
          <Button size="sm" className="link link-hover">Branding</Button>
        </div>
        <Footer.Title>Social</Footer.Title>
        <div>
          <Button size="sm" className="link link-hover">Github</Button>
          <Button size="sm" className="link link-hover">Instagram</Button>
          <Button size="sm" className="link link-hover">LinkedIn</Button>
        </div>
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
