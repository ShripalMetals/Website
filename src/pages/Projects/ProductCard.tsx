const ProductCard = ({ data }: any) => {
  return (
    <div className="relative rounded-lg w-full sm:w-[300px] lg:w-[300px]">
      <div>
        <img
          src={data.bg_img}
          alt=""
          className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg"
        />
      </div>
      <div className="absolute top-0 rounded-md w-full h-full text-transparent hover:text-white hover:bg-black hover:bg-opacity-70">
        <div className="pt-[32%] pl-3 sm:pt-[25%] lg:pt-[30%]">
          <p className="text-sm sm:text-lg lg:text-xl font-normal sm:font-semibold lg:font-semibold">
            Products:
          </p>
          <p className="text-sm sm:text-lg lg:text-xl font-semibold">
            {data.products.join(', ')}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div
          className="w-full h-[40px] sm:h-[50px] opacity-90"
          style={{
            background:
              "linear-gradient(to top right, #D1D5DB 50%, transparent 50%)",
          }}
        ></div>
        <div className="bg-gray-300 bg-opacity-90 rounded-b-md h-[60px] sm:h-[70px] lg:h-[60px] px-2">
          <div className="absolute bottom-3 left-2 sm:left-3 lg:left-3">
            <img src={data.logo} alt="" className="w-10 sm:w-12 lg:w-12 h-10 sm:h-12 lg:h-12" />
          </div>
          <p className="font-semibold pl-[50px] sm:pl-[60px] lg:pl-[60px] pt-[13px] text-xs sm:text-base lg:text-base leading-tight">
            {data.company_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
