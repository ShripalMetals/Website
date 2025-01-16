import ProductCard from "./ProductCard";
import Steelpipes from "../../assets/images/steelpipes.jpg";
import RenownedDistributorShipImage1 from "../../assets/images/mishra_dhatu_nigam_limited_841352f3ab 1.png";
import RenownedDistributorShipImage2 from "../../assets/images/hasmlogo 1.png";
import RenownedDistributorShipImage3 from "../../assets/images/flowone-logo 1.png";

const RenownedDistributorship = () => {
  return (
    <div className="mt-[137px] px-[80px] text-center" style={{ marginTop: '90px' }}>
      <h3 className="text-[28px] font-bold">Renowned Distributorship</h3>
      <div className="mt-[84px] gap-[142px] flex justify-center items-center flex-wrap">
        <div className="text-center w-full sm:w-auto flex justify-center">
          <img 
            src={RenownedDistributorShipImage1} 
            alt="Distributor 1" 
            className="rounded w-full max-w-[233px] h-auto" 
          />
        </div>
        <div className="text-center w-full sm:w-auto flex justify-center">
          <img 
            src={RenownedDistributorShipImage2} 
            alt="Distributor 2" 
            className="rounded w-full max-w-[276px] h-auto" 
          />
        </div>
        <div className="text-center w-full sm:w-auto flex justify-center">
          <img 
            src={RenownedDistributorShipImage3} 
            alt="Distributor 3" 
            className="rounded w-full max-w-[274px] h-auto" 
          />
        </div>
      </div>
    </div>
  );
};

export default RenownedDistributorship;
