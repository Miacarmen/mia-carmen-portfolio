import React from "react";
import { Navbar, Button } from "react-daisyui";
import image from "../../images/heart (8).png";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar>
      <Navbar.Start className="px-2 mx-2">
        
        <span className="text-lg font-bold">
          <img alt="logo" src={image} height="70px" width="70px"></img>
        </span>
      </Navbar.Start>

      <Navbar.Center className="px-2 mx-2">
        {/* <div className="hidden sm:flex items-stretch">
          <Button size="sm">Home</Button>
          <Button size="sm">About</Button>
          <Button size="sm">Portfolio</Button>
          <Button size="sm">Shop</Button>
          <Button size="sm">Contact</Button>
        </div> */}
      </Navbar.Center>

      <Navbar.End className="px-2 mx-2">
        <div className="hidden sm:flex items-stretch">
          <Button size="sm">Home</Button>
          <Button size="sm">About</Button>
          <Button size="sm">Portfolio</Button>
          <Button size="sm">Shop</Button>
          <Button size="sm">Contact</Button>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;
