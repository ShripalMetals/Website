import Shripalteam1 from "../../assets/images/shripal-team-1.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:gap-[80px] justify-center mt-[154px] mx-4 lg:mx-[100px]">
      {/* Image Section */}
      <img
        style={{ marginTop: "-37px" }}
        className="w-full max-w-[500px] h-auto rounded-[10px] mb-12 lg:mb-0"  // Increased margin-bottom here
        src={Shripalteam1}
        alt="Team"
      />

      {/* Content Section */}
      <div className="py-12 w-full lg:w-auto mb-8 lg:mb-0">
        {/* Left-align header on larger screens, center on smaller ones */}
        <h3 className="text-[28px] font-bold mb-6 text-center lg:text-left" style={{ marginTop: "-90px" }}>
          About Us
        </h3>
        <p className="mb-6 text-[18px] leading-relaxed tracking-wide">
          Shripal Metal Ltd. is a rapidly expanding industrial supplier,
          offering top-tier construction materials and engineering services for a
          wide spectrum of projects.
        </p>
        <p className="mb-6 text-[18px] leading-relaxed tracking-wide">
          Shripal Metal Ltd. takes pride in its legacy as a well-established
          company with over 45 years of unwavering commitment to the global
          market. Our enduring presence in the industry is a testament to our
          dedication to excellence. We stand tall as an ISO 9001:2008 certified
          organization, recognized and accredited by BVQI.
        </p>
        <p className="text-[18px] leading-relaxed tracking-wide">
          Shripal Metal Ltd. is a registered vendor with esteemed companies like
          SABIC, HPCL, BPCL, PDIL, Petrofac to name a few, further affirming our
          commitment to quality and global standards.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
