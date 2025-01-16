import ContactFooter from "../../../../common/components/ContactFooter";
import ManufacturingBanner from "../../../../assets/images/manufacturing-banner-img.png"

import { useState } from "react";
import Pipes from "./Pipes";
import Fasteners from "./Fasteners";

const ManufacturingGallery = () => {
  const [tab, setTab] = useState("pipes");

  return (
    <>
      <div className="relative">
        <div>
        <img src={ManufacturingBanner} alt="" className="w-full h-auto max-h-[50vh]" />
        </div>
        <div className="absolute bottom-12 left-6 text-white">
          <div className="text-3xl font-bold">Manufacturing</div>
          <div className="text-xl mt-2 font-semibold text-left">
            Quality products for various industries
          </div>
        </div>
      </div>
      <div className="px-[75px] mb-[97px]">
          <h3 className="text-[40px] font-bold mt-[38px]">Manufacturing Facilities Gallery</h3>
        <div className="py-[80px]">
          <nav className="flex justify-evenly gap-6 font-semibold">
            <button
              onClick={() => setTab("pipes")}
              type="button"
              className={`py-2 px-1 inline-flex items-center gap-2 border-b-[3px] mb-[-1px] text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 hover:border-b-[#ce8359] ${tab === "pipes" ? "text-gray-900" : "text-[#9D9D9D]"
                } ${tab === "pipes"
                  ? "border-[#ce8359]"
                  : "border-[#9D9D9D]"
                }`}
            >
              Pipes
            </button>
            <button
              onClick={() => setTab("fasteners")}
              type="button"
              className={`py-2 px-1 inline-flex items-center gap-2 border-b-[3px] mb-[-1px] text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 hover:border-b-[#ce8359] ${tab === "fasteners" ? "text-gray-900" : "text-[#9D9D9D]"
                } ${tab === "fasteners"
                  ? "border-[#ce8359]"
                  : "border-[#9D9D9D]"
                }`}
            >
              Fasteners{" "}
            </button>
          </nav>
        </div>
        {tab === "pipes" && <Pipes />}
        {tab === "fasteners" && <Fasteners />}
      </div>
      <ContactFooter />

    </>
  );
};

export default ManufacturingGallery;
