import Oil from "../../assets/images/industries/Frame 1000001871.svg";
import Pharma from "../../assets/images/industries/Frame 1000001872.svg";
import Nuclear from "../../assets/images/industries/Frame 1000001873.svg";
import Infra from "../../assets/images/industries/Frame 1000001874.svg";
import Water from "../../assets/images/industries/Frame 1000001875.svg";
import FnB from "../../assets/images/industries/Frame 1000001876.svg";
import Power from "../../assets/images/industries/Frame 1000001877.svg";
import Chemical from "../../assets/images/industries/Frame 1000001878.svg";
import Fertilizer from "../../assets/images/industries/Frame 1000001879.svg";
import Mining from "../../assets/images/industries/Frame 1000001880.svg";

const Industries = () => {
  return (
    <div className="mt-[104px] px-[80px] text-center">
      <h3 className="text-[28px] font-bold">Industries we serve</h3>
      <div className="flex flex-wrap mt-[81px] justify-center">
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Oil} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Oil & Gas</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Pharma} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Pharmaceuticals</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Nuclear} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Nuclear</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Infra} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Infrastructure</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Water} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Water Treatment</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={FnB} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">F&B</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Power} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Power</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Chemical} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Chemical</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Fertilizer} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Fertilizer</p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col items-center mb-[66px]">
          <img src={Mining} alt="" className="w-[160px] h-[160px]" />
          <p className="mt-[-8px]">Mining</p>
        </div>
      </div>
    </div>
  );
};

export default Industries;
