import { useState } from "react";
import Domestic from "./Domestic";
import Export from "./Export";
import FabricationEPC from "./FabricationEPC";
import ClientsCarousel from "./ClientsCarousel";
import PhotoSlider from "./PhotoSlider";
import ProjectsSkeleton from "./ProjectsSkeleton";

const Projects = () => {
  const [tab, setTab] = useState("export");
  const projectsData = [
    {
      title: "Bangalore International Airport (BIAL) T2 Project",
      details: ["SS Base Plate & SS Railing", "Design | Fabrication | Erection"],
      contractorInfo: "Main Contractor: L&T | Client: BIAL",
      description: `The terminal is designed as a tribute to the Garden city of Bengaluru and passenger experience is meant to be a "walk in the garden," according to news agency ANI. Passenger handling capacity, counters of check-in and immigration doubled at the Kempegowda airport T2. With this, the airport is now able to handle between 5-6 crore passengers annually. The terminal has a capacity of 25 lakh and 100 counters. Shripal Metal Ltd. is proud to be a part of this modern monument, serving today and tomorrow.`,
    },
    {
      title: "Hyderabad International Airport (HIAL)",
      details: ["SS Guard Rail & Glass Rail", "Fabrication | Installation"],
      contractorInfo: "Main Contractor: L&T | Client: HIAL",
      description: `The project was envisaged as a synergistic ecosystem with Hyderabad International Airport as the core and surrounded by an Airport City, driving a host of commercial and social activities, aligned with the vision of the State Government and Government of India to develop Hyderabad into a world class Global city and a Preferred Destination for Investments. Conceived as a new Gateway to South & Central India, Hyderabad Airport was commissioned in a record time of 31 months and inaugurated on March 14, 2008, with an initial capacity of 12 million passengers per annum.`,
    },
    {
      title: "Mumbai Metro Stations Churchgate & Hutatma Chawk",
      details: ["SS & Glass Rail", "Fabrication | Installation"],
      contractorInfo: "Main Contractor: L&T Client: MMRC",
      description: `The Aqua Line 3 of the Mumbai Metro, also known as Colaba-Bandra-SEEPZ Line, is current- ly under construction in Mumbai, India. When completed, the 33.5 km (20.8 mi) long line will be the first underground metro line in Mumbai, with 27 underground stations and one at-grade station. The line will will include connections to other metro lines, monorail, suburban rail, inter-city rail, and Mumbai Airport. Line 3 is expected to reduce road congestion, and to reduce the load on the Western Line between Bandra and Churchgate.`,
    },
    {
      title: "CIDCO Taloja & Bomandongri",
      details: ["SS Safety Grill", "Fabrication | Installation"],
      contractorInfo: "Main Contractor: L&T Client: CIDCO",
      description: `Navi Mumbai real estate market has a range of property options in various price brackets. Taloja & Bamandongri are one of the localities known for housing affordable residential projects which makes it a suitable destinations for homebuyers looking for a property for self-use or investment purposes in the city. One thing that makes Navi Mumbai different from any other city in this region is its potential to attract investors through its flourishing job market and employ- ment opportunities, bringing in fresh housing demand regularly.`,
    },
    {
      title: "ITC ONE Sri Lanka Colombo",
      details: ["SS Railing, Gratings, Fin Brackets", "Fabrication | Supply"],
      contractorInfo: "Main Contractor: L&T Client: ITC",
      description: `A two-tower behemoth, ITC Colombo will have a hotel tower of 29 floors with 371 rooms and a residential tower of 49 floors and 143 high-end residential units bordering the Indian Ocean and a lake on either side. A 54 m sky bridge will link the two towers that is all set to redefine the Colombo skyline.`,
    },
  ];

  return (
    <>
      <div className="py-[40px] border-t border-gray-300 px-[20px] md:px-[80px]">
        <h3 className="text-[30px] md:text-[40px] font-bold">Projects</h3>

        <div>
          {projectsData.map((project, index) => (
            <div key={index} className="mb-[5vh]">
              <ProjectsSkeleton
                title={project.title}
                details={project.details}
                contractorInfo={project.contractorInfo}
                description={project.description}
              />
            </div>
          ))}
        </div>

        <div className="mb-4 border-t-4 border-b-4 p-4">
          <nav className="flex justify-between space-x-6 font-semibold">
            <button
              onClick={() => setTab("domestic")}
              type="button"
              className={`py-2 px-1 inline-flex items-center gap-2 text-xl md:text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 ${
                tab === "domestic" ? "text-gray-900" : "text-gray-400"
              } ${
                tab === "domestic"
                  ? "border-[#ce8359] border-b-[3px] mb-[-1px]"
                  : "border-b-[2px] border-transparent"
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setTab("export")}
              type="button"
              className={`py-2 px-1 inline-flex items-center gap-2 text-xl md:text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 ${
                tab === "export" ? "text-gray-900" : "text-gray-400"
              } ${
                tab === "export"
                  ? "border-[#ce8359] border-b-[3px] mb-[-1px]"
                  : "border-b-[2px] border-transparent"
              }`}
            >
              Export
            </button>
            <button
              onClick={() => setTab("epc")}
              type="button"
              className={`py-2 px-1 inline-flex items-center gap-2 text-xl md:text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 ${
                tab === "epc" ? "text-gray-900" : "text-gray-400"
              } ${
                tab === "epc"
                  ? "border-[#ce8359] border-b-[3px] mb-[-1px]"
                  : "border-b-[2px] border-transparent"
              }`}
            >
              Fabrication / EPC
            </button>
          </nav>
        </div>
        {tab === "domestic" && <Domestic />}
        {tab === "export" && <Export />}
        {tab === "epc" && <FabricationEPC />}
        <ClientsCarousel />
      </div>
    </>
  );
};

export default Projects;
