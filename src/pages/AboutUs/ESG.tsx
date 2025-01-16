import Workers from "../../assets/images/workers.jpg";
import ContactFooter from "../../common/components/ContactFooter";
import AboutUsEsg1 from "../../assets/images/aboutUsEsg1.png";
import AboutUsEsg2 from "../../assets/images/aboutUsEsg2.png";
import AboutUsEsg3 from "../../assets/images/aboutUsEsg3.png";
import AboutUsEsg4 from "../../assets/images/aboutUsEsg4.png";
import AboutUsEsg5 from "../../assets/images/aboutUsEsg5.png";
import AboutUsCover from "../../assets/images/aboutUsEsgCover.png";

const ESG = () => {
  return (
    <div>
      {/* Cover Image Section */}
      <div className="relative">
        <img className="w-full h-[80vh] object-cover" alt="" src={AboutUsCover} />

        <div className="absolute bottom-12 left-8" style={{ marginBottom: "60px" }}>
          <h3 className="text-2xl font-bold">ESG</h3>
          <p className="w-[30%] sm:w-[30%] mt-3 mb-12">
            At Shripal Metals, we are dedicated to responsible and sustainable business practices. Our ESG policy highlights
            our commitment to ethical conduct, environmental stewardship, and social responsibility, creating value for all
            our stakeholders.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-[40px] px-[80px] sm:px-[20px]" style={{ marginTop: "80px" }}>
        {/* Environmental Responsibility Section */}
        <div className="mb-8">
          <h3 className="text-[24px] font-semibold pb-3">
            <span className="border-b-2 pb-3 pr-4 border-[#ce8359]">Environmental Responsibility</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center mt-9">
            <div className="w-full sm:w-[60%] pr-8 text-[18px]">
              <p className="mb-3">
                Sustainable Resource Management: We focus on minimizing waste and optimizing our use of raw materials
                through recycling and innovative practices.
              </p>
              <p className="mb-3">
                Energy Efficiency: We're reducing our carbon footprint by using energy-efficient technologies.
                <strong>We switch off the lights when not in use.</strong>
              </p>
              <p className="mb-3">
                Pollution Prevention: <strong>We try to minimize usage logistic movements by clubbing our deliveries.</strong>
              </p>
            </div>
            <div className="w-full sm:w-[40%] flex sm:h-[50%] justify-between mt-4 sm:mt-0">
              <img className="w-[48%] h-auto object-cover" alt="" src={AboutUsEsg1} />
              <img className="w-[48%] h-auto object-cover" alt="" src={AboutUsEsg2} />
            </div>
          </div>
        </div>

        {/* Social Responsibility Section */}
        <div className="mb-8">
          <h3 className="text-[24px] font-semibold pb-3">
            <span className="border-b-2 pb-3 pr-4 border-[#ce8359]">Social Responsibility</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center mt-9">
            <div className="w-full sm:w-[60%] pr-8 text-[18px]">
              <p className="mb-3">
                Employee Well-being: We prioritize the health and safety of our employees, offering continuous growth
                and development opportunities.
              </p>
              <p className="mb-3">
                Community Engagement: We engage with the community through social initiatives focused on education,
                healthcare, and environmental conservation.
              </p>
              <p className="mb-3">
                Diversity and Inclusion: We have a very diverse and inclusive workspace providing equal opportunities
                to every employee.
              </p>
            </div>
            <div className="w-full sm:w-[40%] flex sm:h-[50%] justify-between mt-4 sm:mt-0">
              <img className="w-[48%] h-auto object-cover" alt="" src={AboutUsEsg3} />
              <img className="w-[48%] h-auto object-cover" alt="" src={AboutUsEsg4} />
            </div>
          </div>
        </div>

        {/* Governance Section */}
        <div className="mb-8" style={{ marginTop: "70px" }}>
          <h3 className="text-[24px] font-semibold pb-1">
            <span className="border-b-2 pb-2 pr-4 border-[#ce8359]">Governance</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-1"> {/* Added gap for spacing control */}
            <div className="w-full sm:w-[60%] pr-8 text-[18px]">
              <p className="mb-3">
                Ethical Conduct: We maintain high standards of transparency, integrity, and accountability,
                demonstrating our commitment to ethics and honesty.
              </p>
              <p className="mb-3">
                Risk Management: We identify and address risks through strong frameworks and regular reviews to ensure effective mitigation.
              </p>
              <p className="mb-3">
                Stakeholder Engagement: We ensure stakeholder engagement through open communication and continuous feedback to improve and meet their expectations and requirements.
              </p>
            </div>
            <div className="w-full sm:w-[30%] mt-4 sm:mt-0 flex justify-center items-center">
              <img className="w-full h-auto object-cover" alt="" src={AboutUsEsg5} />
            </div>
          </div>
        </div>


      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
};

export default ESG;
