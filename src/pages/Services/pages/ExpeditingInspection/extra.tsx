import { Link } from "react-router-dom";
import Pipes from "../../../../assets/images/products-manufactured/pipes.png";
import Flanges from "../../../../assets/images/products-manufactured/flanges.png";
import PipeFittings from "../../../../assets/images/products-manufactured/fittings.png";

<div className="mt-[66px] px-[8%] sm:px-[10%] md:px-[60px] mb-[136px]">
<h3 className="text-[32px] sm:text-[36px] md:text-[40px] mb-[66px] font-bold text-center">
  Expediting, Inspection Products
</h3>
<div className="flex flex-col sm:flex-row justify-evenly gap-[40px] sm:gap-[95px]">
  {/* Product 1 - Pipes */}
  <div className="flex flex-col items-center">
    <Link to="/products/pipes"> {/* Link to the Pipes page */}
      <img
        alt="Pipes"
        src={Pipes}
        className="w-full sm:w-auto sm:max-w-[376px] sm:max-h-[365px]"
      />
    </Link>
    <p className="text-center text-[20px] sm:text-[24px] mt-3">Pipes</p>
  </div>

  {/* Product 2 - Flanges */}
  <div className="flex flex-col items-center">
    <Link to="/products/flanges"> {/* Link to the Flanges page */}
      <img
        alt="Flanges"
        src={Flanges}
        className="w-full sm:w-auto sm:max-w-[376px] sm:max-h-[365px]"
      />
    </Link>
    <p className="text-center text-[20px] sm:text-[24px] mt-3">Flanges</p>
  </div>

  {/* Product 3 - Pipe Fittings */}
  <div className="flex flex-col items-center">
    <Link to="/products/pipe-fittings"> {/* Link to the Pipe Fittings page */}
      <img
        alt="Pipe Fittings"
        src={PipeFittings}
        className="w-full sm:w-auto sm:max-w-[376px] sm:max-h-[365px]"
      />
    </Link>
    <p className="text-center text-[20px] sm:text-[24px] mt-3">Pipe Fittings</p>
  </div>
</div>
</div>