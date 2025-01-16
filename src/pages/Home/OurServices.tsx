import { Link } from "react-router-dom";
import TradingFlange from "../../assets/images/trading-flange.png";
import Manufacturing from "../../assets/images/manufacturing-cra.png";
import Fabrication from "../../assets/images/fabrication-homepage.png";

const OurServices = () => {
  return (
    <div className="mt-[125px] px-[10px] text-center" style={{ marginTop: '70px' }}>
      <h3 className="text-[28px] font-bold mb-[67px]">Our Services</h3>
      <div className="flex justify-center">
        <div className="flex gap-12 flex-wrap md:flex-nowrap justify-center">
          {/* Trading Flanges */}
          <div className="relative cursor-pointer mb-8 md:mb-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
            <div>
              <img
                src={TradingFlange}
                alt="Trading Flanges"
                className="w-full h-[500px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-[10px] object-cover"
                onClick={() => window.location.href = "/services/trading-flanges"}
              />
            </div>
            <div className="absolute bottom-[20px] left-[20px] text-white">
              <div className="text-[24px] sm:text-[30px] md:text-[32px] font-bold">Trading</div>
              <div className="text-[14px] sm:text-[16px] md:text-[20px] mt-[2px] font-semibold text-left">
                Flanges
              </div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="relative cursor-pointer mb-8 md:mb-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
            <div>
              <img
                src={Manufacturing}
                alt="Manufacturing"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-[10px] object-cover"
                onClick={() => window.location.href = "/services/manufacturing"}
              />
            </div>
            <div className="absolute bottom-[20px] left-[20px] text-white">
              <div className="text-[24px] sm:text-[30px] md:text-[32px] font-bold">Manufacturing</div>
              <div className="text-[14px] sm:text-[16px] md:text-[20px] mt-[2px] font-semibold text-left">
                Welded/CRA pipes
              </div>
            </div>
          </div>

          {/* Fabrication */}
          <div className="relative cursor-pointer mb-8 md:mb-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
            <div>
              <img
                src={Fabrication}
                alt="Fabrication / EPC"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-[10px]"
                onClick={() => window.location.href = "/services/fabrication-epc"}
              />
            </div>
            <div className="absolute bottom-[20px] left-[20px] text-white">
              <div className="text-[24px] sm:text-[30px] md:text-[32px] font-bold">
                Fabrication / EPC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
