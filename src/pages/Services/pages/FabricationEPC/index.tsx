import ShripalTeam2 from "../../../../assets/images/workers3.jpg";
import ChemtexLogo from "../../../../assets/images/chemtex.png";
import Incoloy from "../../../../assets/images/incoloy.jpg";
import Blank from "../../../../assets/images/blank.png";
import images from "./images";
import ContactFooter from "../../../../common/components/ContactFooter";
import Pipes from "../../../../assets/images/products-manufactured/pipes.png";
import Flanges from "../../../../assets/images/products-manufactured/flanges.png";
import PipeFittings from "../../../../assets/images/products-manufactured/fittings.png";
import ManufacturingBanner from "../../../../assets/images/manufacturing-banner-img.png";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const FabricationEPC = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={ManufacturingBanner}
            alt=""
            className="w-full h-auto max-h-[50vh] object-cover"
          />
        </div>
        <div className="absolute bottom-12 left-6 text-white">
          <div className="text-3xl font-bold">Fabrication / EPC</div>
          <div className="text-xl mt-2 font-semibold text-left">
            Quality products for various industries
          </div>
        </div>
      </div>

      <div className="mx-[8%] sm:mx-[10%] md:mx-[112px]">
        <h3 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold mt-[55px]">
          Fabrication / EPC
        </h3>
        <div className="flex flex-col sm:flex-row gap-[40px] sm:gap-[60px] items-center justify-center my-[36px]">
          <img
            className="w-full sm:w-auto sm:max-w-[572px] sm:max-h-[297px]"
            src={Blank}
            alt=""
          />
          <img
            className="w-full sm:w-auto sm:max-w-[572px] sm:max-h-[297px]"
            src={Blank}
            alt=""
          />
        </div>

        <div>
          <p className="text-[20px] sm:text-[24px] leading-relaxed tracking-wide">
            At Shripal Metals Ltd., we offer top-tier fabrication services
            tailored to meet the specific needs of our clients. Our advanced
            fabrication facilities are equipped with the latest technology and
            operated by skilled professionals, enabling us to produce custom
            metal components with precision and efficiency. We specialize in
            metal fabrication, spool fabrication, and the manufacturing of tanks
            and agitators, along with other bespoke fabrication projects.
          </p>
          <p className="text-[20px] sm:text-[24px] leading-relaxed tracking-wide mt-[40px]">
            In addition, we provide comprehensive Engineering Procurement and
            Construction(EPC) services. We are proud to announce our strategic
            partnership with Chemtex India for providing EPC services in the
            MENA(Middle East & North Africa) region. Chemtex India is renowned
            for delivering high-quality EPC services across various industries,
            including petrochemical, chemical, oil and gas, and water treatment.
            Our combined expertise allows us to offer innovative and sustainable
            EPC solutions that meet the evolving needs of the African market.
          </p>
        </div>

        <div className="mt-[52px]">
          <h3 className="text-[25px] sm:text-[30px] font-bold mb-2">
            Our Collaboration with Chemtex India focuses on:
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-5 my-6">
            <div className="flex justify-center sm:w-1/2">
              <img
                src={ChemtexLogo}
                alt=""
                className="w-full sm:w-auto sm:max-w-[488px] sm:max-h-[288px]"
              />
            </div>
            <div className="sm:w-1/2">
              <ul className="list-disc list-inside text-[20px] sm:text-[21.5px] leading-relaxed tracking-wide">
                <li>Comprehensive project management and execution</li>
                <li>Advanced engineering and design services</li>
                <li>Efficient procurement and supply chain management</li>
                <li>High-quality construction and commissioning</li>
                <li>Sustainable and environmentally friendly practices</li>
              </ul>
            </div>
          </div>
          <div className="text-[20px] sm:text-[24px] leading-relaxed tracking-wide">
            <p>
              Together, Shripal Metal Ltd. and Chemtex are committed to
              delivering exceptional value to our clients, ensuring seamless
              project execution from concept to completion. Our partnership
              enhances our ability to deliver world-class EPC services, creating
              significant opportunities for growth and development in the MENA
              region. From concept to completion, Shripal Metal Ltd. is your
              trusted partner for exceptional metal fabrication and EPC solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Fabrication / EPC products section */}
      <div className="mt-[66px] px-[8%] sm:px-[10%] md:px-[60px] mb-[136px]">
        <h3 className="text-[32px] sm:text-[36px] md:text-[40px] mb-[66px] font-bold text-center">
          Fabrication / EPC Products
        </h3>
        <div className="flex flex-col sm:flex-row justify-evenly gap-[40px] sm:gap-[95px]">
          {/* Product 1 - Pipes */}
          <div className="flex flex-col items-center">
            <Link to="/products/pipes"> {/* Link to the Pipes page */}
              <img
                alt="Pipes"
                src={Pipes}
                className="w-full sm:w-auto sm:max-w-[376px] sm:max-h-[365px]"
              />
            </Link>
            <p className="text-center text-[20px] sm:text-[24px] mt-3">Pipes</p>
          </div>

          {/* Product 2 - Flanges */}
          <div className="flex flex-col items-center">
            <Link to="/products/flanges"> {/* Link to the Flanges page */}
              <img
                alt="Flanges"
                src={Flanges}
                className="w-full sm:w-auto sm:max-w-[376px] sm:max-h-[365px]"
              />
            </Link>
            <p className="text-center text-[20px] sm:text-[24px] mt-3">Flanges</p>
          </div>

          {/* Product 3 - Pipe Fittings */}
          <div className="flex flex-col items-center">
            <Link to="/products/pipe-fittings"> {/* Link to the Pipe Fittings page */}
              <img
                alt="Pipe Fittings"
                src={PipeFittings}
                className="w-full sm:w-auto sm:max-w-[376px] sm:max-h-[365px]"
              />
            </Link>
            <p className="text-center text-[20px] sm:text-[24px] mt-3">Pipe Fittings</p>
          </div>
        </div>
      </div>

      <ContactFooter />
    </>
  );
};

export default FabricationEPC;
