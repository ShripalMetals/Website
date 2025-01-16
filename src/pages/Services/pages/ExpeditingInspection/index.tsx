import ShripalTeam2 from "../../../../assets/images/workers3.jpg";
import ContactFooter from "../../../../common/components/ContactFooter";
import images from "./images";
import Pipes from "../../../../assets/images/products-manufactured/pipes.png";
import Flanges from "../../../../assets/images/products-manufactured/flanges.png";
import PipeFittings from "../../../../assets/images/products-manufactured/fittings.png";
import ManufacturingBanner from "../../../../assets/images/manufacturing-banner-img.png";
import { Link } from "react-router-dom";

const ExpeditingInspection = () => {
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
          <div className="text-3xl sm:text-4xl font-bold">Expediting, Inspection</div>
          <div className="text-xl sm:text-2xl mt-2 font-semibold text-left">
            Quality products for various industries
          </div>
        </div>
      </div>

      <div className="mx-[8%] sm:mx-[10%] md:mx-[112px]">
        <h3 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold mt-[55px] mb-[39px]">
          Expediting, Inspection
        </h3>
        <p className="text-[20px] sm:text-[24px] leading-relaxed tracking-wide">
          At Shripal Metal Ltd., we are committed to ensuring the highest levels
          of quality and timely delivery for our clients. Our comprehensive
          expediting and inspection services are designed to streamline your
          supply chain and uphold rigorous standards. Our expediting team
          meticulously monitors and coordinates the entire production process,
          providing real-time updates and proactive solutions to prevent any
          delays. Alongside this, our expert inspection services ensure that
          every product meets stringent quality requirements through thorough
          testing and evaluation. By integrating these services, we guarantee
          that your orders are delivered on time and to the highest standards,
          minimizing disruptions and ensuring seamless project execution.
        </p>

      </div>

      <ContactFooter />
    </>
  );
};

export default ExpeditingInspection;
