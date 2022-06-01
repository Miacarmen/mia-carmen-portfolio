import React, { useState } from "react";
import Nav from "../Navbar/navbar";
import Foot from "../Footer/footer";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Contact from "../../pages/Contact";
import Portfolio from "../../pages/Portfolio";
import Shop from "../../pages/Shop";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // render current page
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
        return <Resume />;
      }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Shop") {
      return <Shop />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Foot currentPage={currentPage} handlePageChange={handlePageChange} />
      
    </div>
  );
}
