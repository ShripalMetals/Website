import React from "react";
import AppRoutes from "./AppRoutes";
import CopyrightsFooter from "./common/components/CopyrightsFooter";
import Navbar from "./common/components/Navbar/index"; // Import Navbar
import CoverPageNavbar from "./pages/CoverPage/CoverPageNavbar"; // Import CoverPageNavbar
import { useLocation } from "react-router-dom"; // Import useLocation to get the current route
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetailsPage from "../src/pages/Products/ProductsList/Product/ProductDetailsPage";
import Chatbot from "../src/pages/Chatbot";

const App = () => {
  const location = useLocation(); // Get current location

  // Conditionally check if the current path is "/"
  const isCoverPage = location.pathname === "/"; // Compare current path with "/"

  return (
    <div className="relative min-h-[100%]">
      {/* Render Navbar only if we're not on the root route ("/") */}
      {isCoverPage ? <CoverPageNavbar /> : <Navbar />}

      {/* Render AppRoutes for all pages */}
      <div className="pb-[48px] min-h-[100vh]">
        <AppRoutes />
      </div>

      <Chatbot />
      
      <CopyrightsFooter />
    </div>
  );
};

export default App;
