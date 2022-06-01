import React from "react";
import { Navbar, Button } from "react-daisyui";
import image from "../../images/heart (8).png";

const Nav = () => {
  return (
    <Navbar>
      <Navbar.Start className="px-2 mx-2">
        <svg
          className="block sm:hidden mr-2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
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
