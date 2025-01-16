import TeamPhoto from "../../assets/images/shripal-team-1.jpg";
import ContactFooter from "../../common/components/ContactFooter";
import CoreValues from "./CoreValues";
import GlobalFootprint from "./GlobalFootprint";
import Pipeline from "./Pipeline";
import AboutUsHome from "../../assets/images/workers3.png";

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full">
          <img
            src={AboutUsHome}
            alt="About Us"
            className="w-full h-[350px] sm:h-[450px] md:h-[400px] object-cover"
          />
        </div>
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 px-4 sm:px-8 md:px-[80px] text-center" style={{marginBottom: "120px"}}>
          <h3 className="text-[20px] sm:text-[28px] md:text-[32px] font-bold font-poppins text-white" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000", fontWeight:"bold" }}>
            About Us
          </h3>
          <p className="text-[12px] sm:text-[16px] md:text-[18px] text-white" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000", fontWeight:"bold" }}>
            Discover our innovative solutions for your construction needs
          </p>
        </div>
      </div>

      <div className="py-[40px] px-[20px] sm:px-[40px] md:px-[80px]">
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold font-poppins">
          Shripal Metals Ltd
        </h3>
        <div>
          <p className="mb-6 text-[14px] sm:text-[16px] md:text-[18px] font-poppins">
            Shripal Metal Ltd. is a rapidly expanding industrial supplier, offering top-tier construction materials and engineering services for a wide
            spectrum of projects.
          </p>
          <p className="mb-6 text-[14px] sm:text-[16px] md:text-[18px]">
            Shripal Metal Limited takes pride in its legacy as a well-established company with over 45 years of unwavering commitment to the global
            market. Our enduring presence in the industry is a testament to our dedication to excellence. We stand tall as an ISO 9001:2008 certified
            organization, recognized and accredited by BVQI.
          </p>
          <p className="mb-6 text-[14px] sm:text-[16px] md:text-[18px]">
            Shripal Metal Limited is registered vendor with esteemed companies like SABIC, HPCL, BPCL, PDIL, Petrofac to name a few, further affirming our
            commitment to quality and commitment to global standards.
          </p>
          <p className="mb-6 text-[14px] sm:text-[16px] md:text-[18px]">
            We cater to a diverse array of core industries, including Chemical, Petro-Chemical, Pharma, Food, Dairy, Beverages, Mining, Refineries, Oil & 
            Gas, Offshore, Fertilizer, Power, Nuclear, Cement, Pulp & Paper, Water-Treatment Plants, and Architecture. Whether it's contributing to the
            structural integrity of a nuclear facility or facilitating the smooth flow of fluids in a petrochemical plant, we play a pivotal role in the 
            success of the world's most demanding engineering projects.
          </p>
        </div>

        <div className="flex justify-center items-center py-8">
          <img
            src={TeamPhoto}
            alt="Team"
            className="w-[90%] sm:w-[80%] md:w-[70%] h-auto rounded-md"
          />
        </div>
      </div>

      <CoreValues />
      <Pipeline />
      <GlobalFootprint />
      <ContactFooter />
    </div>
  );
};

export default AboutUs;
