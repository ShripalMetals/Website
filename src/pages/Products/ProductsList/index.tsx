import Pipes from "../../../assets/images/products/pipes1.png";
import PipeFitting from "../../../assets/images/products/pipe-fitting.png";
import Fasteners from "../../../assets/images/products/fasteners.png";
import Flanges from "../../../assets/images/products/flanges.png";
import SheetsPlates from "../../../assets/images/products/sheets-plates.png";
import Tubes from "../../../assets/images/products/tubes.png";
import RoundBar from "../../../assets/images/products/roundbar.png";
import Wire from "../../../assets/images/products/wire.png";
import StainlessSteel from "../../../assets/images/products/stainless-steel.png";

import { Link } from "react-router-dom";

const ProductsList = () => {
  return (
    <div className="flex justify-evenly flex-wrap">
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/pipes">
          <img src={Pipes} alt="Pipes" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Pipes</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/pipe-fittings">
          <img src={PipeFitting} alt="Pipe Fittings" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Pipe Fittings</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/fasteners">
          <img src={Fasteners} alt="Fasteners" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Fasteners</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/flanges">
          <img src={Flanges} alt="Flanges" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Flanges</p>
      </div>
      <div className="bg-white p-8 mb-10 w-[30%] flex justify-center items-center">
        <div className="text-center font-semibold mt-4 text-[20px]">
          Explore our range of high-quality construction products and materials designed to meet your project needs.
        </div>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/sheet-plates">
          <img src={SheetsPlates} alt="Sheet/Plates" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Sheets/Plates</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/tubes">
          <img src={Tubes} alt="Tubes" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Tubes</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/round-bar">
          <img src={RoundBar} alt="Round Bar" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Round Bar</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/products/wire">
          <img src={Wire} alt="Wire" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Wire</p>
      </div>
      <div className="bg-[#f5f0ed] p-8 mb-10 w-[30%] flex flex-col items-center">
        <Link to="/materials/stainless-steel">
          <img src={StainlessSteel} alt="Stainless Steel" className="w-auto h-auto cursor-pointer" />
        </Link>
        <p className="text-center font-semibold mt-4 text-[20px]">Stainless Steel</p>
      </div>
    </div>
  );
};

export default ProductsList;
