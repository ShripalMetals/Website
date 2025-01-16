import { Link, NavLink, useLocation } from "react-router-dom";
import ShripalLogo from "../../assets/images/shripal-logo.png";
import { useState } from "react";

const CoverPageNavbar = () => {
  const [about, setAbout] = useState(false);
  const [products, setProducts] = useState(false);
  const location = useLocation();
  const showFullNavBar = location.pathname !== "/";

  const handleShowAbout = () => {
    setProducts(false);
    setAbout(true);
  };

  const handleShowProducts = () => {
    setAbout(false);
    setProducts(true);
  };

  const closeAllDropdowns = () => {
    setProducts(false);
    setAbout(false);
  };

  const handleProductsClick = () => {
    if (location.pathname === "/products") {
      setProducts(!products);
    } else {
      closeAllDropdowns();
    }
  };

  const handleAboutUsClick = () => {
    if (location.pathname === "/about-us") {
      setAbout(!about);
    } else {
      closeAllDropdowns();
    }
  };

  return (
    <nav className="bg-white flex items-center shadow-sm p-4">
      <div className="w-[160px]">
        <img className="w-[70px] h-[70px] cursor-pointer" src={ShripalLogo} alt="logo" onClick={()=>window.location.href="/"}/>
      </div>
      {showFullNavBar ? <div className="flex w-full pl-10 justify-evenly text-[18px]">
        <NavLink
          to="/home"
          onClick={closeAllDropdowns}
          className={`cursor-pointer ${location.pathname === "/" ? "font-bold" : "font-normal"
            }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          onClick={closeAllDropdowns}
          className={`cursor-pointer ${location.pathname === "/services" ? "font-bold" : "font-normal"
            }`}
        >
          Services
        </NavLink>
        <div id="products-wrapper" className="relative">
          <div className="flex items-center">
            <NavLink
              to="/products"
              onClick={handleProductsClick}
              className={`cursor-pointer flex items-center ${location.pathname.includes("/products")
                ? "font-bold"
                : "font-normal"
                }`}
            >
              Products
            </NavLink>
            <div>
              {!products ? (
                <span
                  className="about-up cursor-pointer"
                  onClick={handleShowProducts}
                // onMouseEnter={handleShowProducts}
                // onMouseLeave={() => setProducts(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              ) : (
                <span
                  className="about-down cursor-pointer"
                  onClick={() => setProducts(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
          {products && (
            <div className="absolute top-11 text-center z-50">
              <div className="flex gap-4">
                <div className="text-white bg-[#324664] w-[150px] rounded-md">
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/pipes"
                    >
                      Pipes
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/pipes-fittings"
                    >
                      Pipes Fittings
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/fasterers"
                    >
                      Fasterers
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/flanges"
                    >
                      Flanges
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/sheets-plates"
                    >
                      Sheets/ Plates
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/tubes"
                    >
                      Tubes
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/round-bar"
                    >
                      Round Bar
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/wire"
                    >
                      Wire
                    </NavLink>
                  </div>
                </div>
                <div className="text-white bg-[#324664] w-[150px] rounded-md">
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/stainless-steel"
                    >
                      Stainless Steel
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/duplex-steel"
                    >
                      Duplex Steel
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/super-duplex"
                    >
                      Super Duplex
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/nickel"
                    >
                      Nickel
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/inconel"
                    >
                      Inconel
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/monel"
                    >
                      Monel
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/hatelloy"
                    >
                      Hastelloy
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/titanium"
                    >
                      Titanium
                    </NavLink>
                  </div>
                </div>
                <div className="text-white bg-[#324664] w-[150px] h-[254px] rounded-md">
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/copper-brass"
                    >
                      Copper/ Brass
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/copper-nickel"
                    >
                      Copper Nickel
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/aluminium"
                    >
                      Aluminium
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/carbon-steel"
                    >
                      Carbon Steel
                    </NavLink>
                  </div>
                  <div className="p-3">
                    <NavLink
                      onClick={() => setProducts(false)}
                      to="/products/alloy-steel"
                    >
                      Alloy Steel
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <NavLink
          to="/projects"
          onClick={closeAllDropdowns}
          className={`cursor-pointer ${location.pathname === "/projects" ? "font-bold" : "font-normal"
            }`}
        >
          Projects
        </NavLink>
        <div id="about-wrapper" className="relative">
          <div className="flex items-center">
            <NavLink
              to="/about-us"
              onClick={handleAboutUsClick}
              className={`cursor-pointer about-nav-item flex items-center ${location.pathname.includes("/about")
                ? "font-bold"
                : "font-normal"
                }`}
            >
              About Us
            </NavLink>
            <div>
              {!about ? (
                <div
                  className="about-up cursor-pointer"
                  onClick={handleShowAbout}
                // onMouseEnter={handleShowAbout}
                // onMouseLeave={() => setAbout(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  className="about-down cursor-pointer"
                  onClick={() => setAbout(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {about && (
            <div className="about-dropdown-wrapper">
              <div className="absolute top-11 right-[-8px] text-center text-white bg-[#324664] w-[150px] z-50 rounded-md">
                <div className="p-3">
                  <NavLink onClick={() => setAbout(false)} to="/about-us/csr">
                    CSR
                  </NavLink>
                </div>
                <div className="p-3">
                  <NavLink onClick={() => setAbout(false)} to="/about-us/esg">
                    ESG
                  </NavLink>
                </div>
                <div className="p-3">
                  <NavLink
                    onClick={() => setAbout(false)}
                    to="/about-us/certifications"
                  >
                    Certifications
                  </NavLink>
                </div>
                <div className="p-3">
                  <NavLink
                    onClick={() => setAbout(false)}
                    to="/about-us/updates"
                  >
                    Updates
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/contact-us"
          className="bg-[#be5b23] text-white px-5 pt-1 pb-[6px] rounded-lg"
        >
          Contact Us
        </Link>
      </div>
        :
        <div className=" flex gap-20 justify-end mr-40 items-center w-full pl-10 text-[18px]">
          <NavLink
            to="/about-us"
            onClick={handleAboutUsClick}
            className={`cursor-pointer about-nav-item  "font-bold"}`}
          >
            About Us
          </NavLink>
          <NavLink
          to="/projects"
          onClick={closeAllDropdowns}
          className={`cursor-pointer about-nav-item  "font-bold"}`}

        >
          Projects
        </NavLink>
        <Link
          to="/contact-us"
          className="bg-[#be5b23] text-white px-5 pt-1 pb-[6px] rounded-lg"
        >
          Contact Us
        </Link>
        </div>}
    </nav>
  );
};

export default CoverPageNavbar;
