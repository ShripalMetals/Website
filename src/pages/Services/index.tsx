import { Link } from "react-router-dom";
import ServicesBanner from "../../assets/images/services page/header.png";
import ContactFooter from "../../common/components/ContactFooter";
import Fabrication from "../../assets/images/fabrication-tab.png";
import Manufacturing from "../../assets/images/manufacturing-tab.png";
import Trading from "../../assets/images/trading-tab.png";

const Services = () => {
  return (
    <>
      <div className="relative mb-[60px]">
        <div>
          <img src={ServicesBanner} alt="" className="w-full h-auto max-h-[70vh]" />
        </div>
        <div className="absolute bottom-12 left-6 text-white">
          <div className="text-4xl font-bold" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000" }}>Our Services</div>
          <div className="text-2xl mt-2 font-semibold text-left" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000", fontWeight:"bold" }}>
            Discover our innovative solutions for your construction needs
          </div>
        </div>
      </div>

      <div>
        {/* Manufacturing Section */}
        <div className="py-[50px] px-[108px] flex flex-col lg:flex-row items-center gap-[80px]">
          <div className="flex justify-center lg:w-[45%]">
            <img src={Manufacturing} className="w-auto h-auto max-w-[447px] max-h-[495px] rounded" alt="" />
          </div>
          <div className="lg:w-[45%]">
            <h3 className="text-[40px] font-bold mb-4">Manufacturing</h3>
            <div className="mb-8">
              <p className="mb-2 text-[24px] leading-relaxed tracking-wider">
                At Shripal Metal Ltd., we are a leading metal manufacturer, committed to excellence and innovation.
                Our high-quality products meet diverse client needs, thanks to our state-of-the-art facilities
                and dedicated team. We ensure precision, reliability, and superior craftsmanship in every
                product.
              </p>
            </div>
            <div>
              <Link to="/services/manufacturing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-[72px] h-[72px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Trading Section */}
        <div className="py-[50px] px-[108px] flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="flex justify-center lg:w-[45%] order-first lg:order-none">
            <img src={Trading} className="w-auto h-auto max-w-[476px] max-h-[426px] rounded" alt="" />
          </div>
          <div className="lg:w-[45%] order-last lg:order-none">
            <h3 className="text-[40px] font-bold mb-4">Trading</h3>
            <div className="mb-8">
              <p className="mb-2 text-[24px] leading-relaxed tracking-wider">
                In our trading division, we ensure comprehensive market reach by meeting 
                diverse customer needs across multiple countries, including international clients
                from regions such as the Middle East, North Africa, Africa, USA, Europe & South East Asia.
              </p>
            </div>
            <div>
              <Link to="/services/trading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-[72px] h-[72px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Fabrication Section */}
        <div className="py-[50px] px-[108px] flex flex-col lg:flex-row items-center gap-8">
          <div className="flex justify-center lg:w-[45%]">
            <img src={Fabrication} className="w-auto h-auto max-w-[476px] max-h-[426px] rounded" alt="" />
          </div>
          <div className="lg:w-[45%]">
            <h3 className="text-[40px] font-bold mb-4">Fabrication / EPC</h3>
            <div className="mb-8">
              <p className="mb-2 text-[24px] leading-relaxed tracking-wider">
                Efficiently transforming raw materials into ready-to-use products takes place in the 
                process of fabrication, and molding your requirements into pieces of equipment 
                is our expertise.
              </p>
            </div>
            <div>
              <Link to="/services/fabrication-epc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-[72px] h-[72px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Expediting Section */}
        <div className="py-[50px] px-[108px] flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="flex justify-center lg:w-[45%] order-first lg:order-none">
            <img src={Trading} className="w-auto h-auto max-w-[476px] max-h-[426px] rounded" alt="" />
          </div>
          <div className="lg:w-[45%] order-last lg:order-none">
            <h3 className="text-[40px] font-bold mb-4">Expediting / Inspection</h3>
            <div className="mb-8">
              <p className="mb-2 text-[24px] leading-relaxed tracking-wider">
                At Shripal Metal Ltd., we ensure quality and timed delivery through our expediting and inspection 
                services. We monitor production, provide real-time updates, and ensure all products meet strict 
                quality standards. This guarantees on-time delivery and minimizes disruptions, ensuring 
                seamless project execution.
              </p>
            </div>
            <div>
              <Link to="/services/expediting-inspection">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-[72px] h-[72px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <ContactFooter />
      </div>
    </>
  );
};

export default Services;
