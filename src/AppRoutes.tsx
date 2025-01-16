import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CoverPageTest from "./pages/CoverPage/CoverPage-test"; // Ensure this is correctly imported
const ManufacturingGallery = lazy(() => import("./pages/Services/pages/ManufacturingGallery"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const ServicesPage = lazy(() => import("./pages/Services/pages"));
const Projects = lazy(() => import("./pages/Projects"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ESG = lazy(() => import("./pages/AboutUs/ESG"));
const CSR = lazy(() => import("./pages/AboutUs/CSR"));
const Certifications = lazy(() => import("./pages/AboutUs/Certifications"));
const Updates = lazy(() => import("./pages/AboutUs/Updates"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetailsPage = lazy(() => import("./pages/Products/ProductsList/Product/index"));
const GradeDetailsPage = lazy(() => import("./pages/Products/ProductsList/Product/ProductDetailsPage"));
const AlloyDetailsPage = lazy(() => import("./pages/Products/Alloys/Alloy/index"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<CoverPageTest />} />
        
        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:name" element={<ServicesPage />} />
        <Route path="/services/manufacturing/gallery" element={<ManufacturingGallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/csr" element={<CSR />} />
        <Route path="/about-us/esg" element={<ESG />} />
        <Route path="/about-us/certifications" element={<Certifications />} />
        <Route path="/about-us/updates" element={<Updates />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:name" element={<ProductDetailsPage />} />
        <Route path="/alloys/:name" element={<AlloyDetailsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Routes>
        {/* Make sure you define this route with dynamic params for name, id, and grade */}
        <Route path="/products/:name/:id/:grade" element={<GradeDetailsPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
