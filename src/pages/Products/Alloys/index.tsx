import StainlessSteel from "../../../assets/images/alloys/stainless-steel.png";
import DuplexSteel from "../../../assets/images/alloys/duplex-steel.png";
import SuperDuplex from "../../../assets/images/alloys/super-duplex.png";
import NickelAlloy from "../../../assets/images/alloys/nickel-alloy.png";
import Inconel from "../../../assets/images/alloys/inconel.png";
import Monel from "../../../assets/images/alloys/monel.png";
import Hastelloy from "../../../assets/images/alloys/hastelloy.png";
import Titanium from "../../../assets/images/alloys/titanium.png";
import CopperBrass from "../../../assets/images/alloys/copper-brass.png";
import CopperNickel from "../../../assets/images/alloys/copper-nickel.png";
import Aluminium from "../../../assets/images/alloys/aluminium.png";
import CarbonSteel from "../../../assets/images/alloys/carbon-steel.png";
import AlloySteel from "../../../assets/images/alloys/alloy-steel.png";

import Pipes from "../../../assets/images/alloys/stainless-steel.png";
import { Link } from "react-router-dom";

const Alloys = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/stainless-steel">
        <img src={StainlessSteel} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Stainless Steel</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/duplex-steel">
        <img src={DuplexSteel} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Duplex Steel</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/super-duplex">
        <img src={SuperDuplex} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Super Duplex</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/nickel">
        <img src={NickelAlloy} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Nickel Alloy</p>
      </div>
      <div className="bg-white p-8 mb-10 w-[31%] flex justify-center items-center">
        <div className="text-center font-semibold mt-4 text-[20px]">
          Explore our range of high-quality construction products and materials
          designed to meet your project needs.
        </div>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[31%]">
        <Link to="/products/inconel">
        <img src={Inconel} alt="" className="w-full h-[260px] object-contain"/>
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Inconel</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[31%]">
        <Link to="/products/monel">
        <img src={Monel} alt="" className="w-full h-[260px] object-contain"/>
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Monel</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/hastelloy">
        <img src={Hastelloy} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Hastelloy</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/titanium">
        <img src={Titanium} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Titanium</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/copper-brass">
        <img src={CopperBrass} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Copper/Brass</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[23%]">
        <Link to="/products/copper-nickel">
        <img src={CopperNickel} alt="" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Copper Nickel</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[31%]">
        <Link to="/products/aluminium">
        <img src={Aluminium} alt="" className="w-full h-[260px] object-contain"/>
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Aluminium</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[31%]">
        <Link to="/products/carbon-steel">
        <img src={CarbonSteel} alt="" className="w-full h-[260px] object-contain"/>
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Carbon Steel</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[31%]">
        <Link to="/products/alloy-steel">
        <img src={AlloySteel} alt="" className="w-full h-[260px] object-contain"/>
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Alloy Steel</p>
      </div>
    </div>
  );
};

export default Alloys;
