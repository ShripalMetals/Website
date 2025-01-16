import { Link } from "react-router-dom";
import Pipes from "../../assets/images/pipes-1.png";
import Flanges from "../../assets/images/flanges-1.png";
// import PipeFittings from "../../assets/images/pipe-fittings.png";
import PipeFittings from "../../assets/images/products-manufactured/fittings.png";
import Fasteners from "../../assets/images/products-manufactured/fasteners.png";
import SheetsAndPlates from "../../assets/images/products-manufactured/sheets.png";
import HandRailing from "../../assets/images/products-manufactured/railing.png";



const OurProducts = () => {
  return (
    <div className="mt-[137px] px-[80px] text-center" style={{ marginTop: '90px' }}>
      <div className="flex justify-around items-center">
        {/* Our Products Heading */}
        <h3 className="text-[28px] font-bold mx-auto">Our Products</h3>

        {/* View All Button */}
        {/* <Link
          to="/products"
          className="bg-[#BE5B23] text-white py-2 px-6 rounded-lg text-[16px] font-semibold h transition-colors"
        >
          View All
        </Link> */}
      </div>

      <div className="mt-[84px] gap-[75px] flex justify-center">
        <div className="text-center">
          <Link to="/products/pipes">
              <img
                src={Pipes}
                alt="Pipes"
                className="rounded"
                width={"500px"}
                height={"340px"}
              />
              <p className="text-[22px] mt-[32px]">Pipes</p>
            </Link>
        </div>
        <div className="text-center">
          <Link to="/products/flanges">
              <img
                src={Flanges}
                alt="Flanges"
                className="rounded"
                width={"500px"}
                height={"340px"}
              />
              <p className="text-[22px] mt-[32px]">Flanges</p>
            </Link>
        </div>
        <div className="text-center">
          <Link to="/products/pipe-fittings">
              <img
                src={PipeFittings}
                alt="Pipe Fittings"
                className="rounded"
                width={"500px"}
                height={"340px"}
              />
              <p className="text-[22px] mt-[32px]">Pipe Fittings</p>
            </Link>
        </div>
        {/* <div className="text-center">
          <Link to="/products/fastners">
              <img
                src={Fasteners}
                alt="Pipe Fittings"
                className="rounded"
                width={"500px"}
                height={"340px"}
              />
              <p className="text-[22px] mt-[32px]">Fasteners</p>
            </Link>
        </div>
        <div className="text-center">
          <Link to="/products/sheetsplates">
              <img
                src={SheetsAndPlates}
                alt="Pipe Fittings"
                className="rounded"
                width={"500px"}
                height={"340px"}
              />
              <p className="text-[22px] mt-[32px]">Sheets/Plates</p>
            </Link>
        </div>
        <div className="text-center">
          <Link to="/products/pipe-fittings">
              <img
                src={HandRailing}
                alt="Pipe Fittings"
                className="rounded"
                width={"500px"}
                height={"340px"}
              />
              <p className="text-[22px] mt-[32px]">Hand Railing</p>
            </Link>
        </div> */}
      </div>
    </div>
  );
};

export default OurProducts;
