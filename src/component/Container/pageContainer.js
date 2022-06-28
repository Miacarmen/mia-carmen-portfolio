import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Navbar/navbar';
import Foot from '../Footer/footer';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Resume from '../../pages/Resume';
import Contact from '../../pages/Contact';
import Portfolio from '../../pages/Portfolio';
import Shop from '../../pages/Shop';

const RenderPage = () => {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div>
        <Foot />
      </div>
    </Router>
  );
};

export default RenderPage;
// export default function PageContainer() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   // * TO-DO: render current page without the page reloading

//   // render current page
//   const renderPage = () => {
//     if (currentPage === "/") {
//       return <Home />;
//     }
//     if (currentPage === "Home") {
//       return <Home />;
//     }
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Resume") {
//       return <Resume />;
//     }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     if (currentPage === "Shop") {
//       return <Shop />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

//       {renderPage()}

//       <Foot currentPage={currentPage} handlePageChange={handlePageChange} />
//     </div>
//   );
// }
