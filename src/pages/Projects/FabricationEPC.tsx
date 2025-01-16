import ProductCard from "./ProductCard";
import { fabrication } from "./data";

const FabricationEPC = () => {
  return (
    <div className="my-5 flex gap-4 flex-wrap">
      {fabrication.map((i) => (
        <div key={i.id} className="w-[32.3%] flex justify-center my-4">
          <ProductCard data={i} />
        </div>
      ))}
    </div>
  );
};
export default FabricationEPC