import CustoerIcon1 from "../../assets/images/values/Frame 1000001881.svg";
import CustoerIcon2 from "../../assets/images/values/Frame 1000001882.svg";
import CustoerIcon3 from "../../assets/images/values/Frame 1000001883.svg";
import CustoerIcon4 from "../../assets/images/values/Frame 1000001884.svg";
import CustoerIcon5 from "../../assets/images/values/Frame 1000001885.svg";
import CustoerIcon6 from "../../assets/images/customer.png";

const CoreValues = () => {
  return (
    <div className="bg-gray-100 py-[25px] px-[20px] sm:px-[40px] md:px-[80px] text-center">
      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6 sm:mb-10">
        Our Core Values
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-white mb-6 px-6 py-9 flex justify-center rounded-full">
            <img
              src={CustoerIcon1}
              alt="Prioritize the customer"
              className="w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] object-contain"
            />
          </div>
          <div>
            <p className="text-[16px] sm:text-[18px]">Prioritize the customer</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white mb-6 px-6 py-9 flex justify-center rounded-full">
            <img
              src={CustoerIcon2}
              alt="Respect and Be Respected"
              className="w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] object-contain"
            />
          </div>
          <div>
            <p className="text-[16px] sm:text-[18px]">Respect and Be Respected</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white mb-6 px-6 py-9 flex justify-center rounded-full">
            <img
              src={CustoerIcon3}
              alt="Collaborate as a Team"
              className="w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] object-contain"
            />
          </div>
          <div>
            <p className="text-[16px] sm:text-[18px]">Collaborate as a Team</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white mb-6 px-6 py-9 flex justify-center rounded-full">
            <img
              src={CustoerIcon4}
              alt="Embrace Responsibility"
              className="w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] object-contain"
            />
          </div>
          <div>
            <p className="text-[16px] sm:text-[18px]">Embrace Responsibility</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white mb-6 px-6 py-9 flex justify-center rounded-full">
            <img
              src={CustoerIcon5}
              alt="Innovate Simply"
              className="w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] object-contain"
            />
          </div>
          <div>
            <p className="text-[16px] sm:text-[18px]">Innovate Simply</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white mb-6 px-6 py-9 flex justify-center rounded-full">
            <img
              src={CustoerIcon6}
              alt="Innovate Simply"
              className="w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] object-contain"
            />
          </div>
          <div>
            <p className="text-[16px] sm:text-[18px]">Empowering Audience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
