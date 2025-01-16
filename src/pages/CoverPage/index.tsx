import VectorIcon from "../../assets/images/icons/Vector.svg";

import { useEffect, useState } from 'react';
import Cover from "../../assets/videos/Cover-video.mp4";
import { useNavigate } from "react-router";

const CoverPage = () => {
    const navigate = useNavigate();
    const [currentValue, setCurrentValue] = useState("Manufacturing Excellence");
    const values = ["Manufacturing Excellence", "Trading", "EPC Expertise"];
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % values.length;
            setCurrentValue(values[index]);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-4 sm:px-8 lg:px-24">
            {/* Video Container */}
            <div className="lg:float-right lg:w-1/3 lg:h-1/2 w-full h-auto mb-6 lg:mb-0" style={{marginTop:"-130px"}}>
                <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                    <source src={Cover} type="video/mp4" />
                </video>
            </div>

            {/* Text Section */}
            <div className="lg:ml-8 mt-8 sm:mt-10">
                <p className="text-[14px] sm:text-[16px] lg:text-[18px]" style={{marginTop:"150px"}}>
                    Your Trusted Partner for Seamless Innovation and Success.
                </p>
                <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold mt-4">
                    Empowering growth through{" "}
                    <span className="text-[#BE5B23]">{currentValue}</span>
                </p>
            </div>

            {/* Clearfix to ensure the next content flows under the floated content */}
            <div style={{ clear: "both" }}></div>

            {/* Add some space here to push the content further down */}
            <div className="mt-10 sm:mt-12 mb-10"></div>

            {/* Flex container for buttons or other content */}
            <div className="flex flex-col sm:flex-row lg:flex-row justify-around gap-6 sm:gap-12 lg:gap-16 text-[24px] sm:text-[28px] lg:text-[32px] font-semibold">
                <div
                    className="bg-[#F2F2F2] h-[10vh] sm:h-[12vh] lg:h-[15vh] w-full sm:w-[30vw] lg:w-[20vw] text-center flex items-center justify-center hover:bg-[#BE5B23] hover:text-white cursor-pointer"
                    onClick={() => navigate("/services/manufacturing")}
                >
                    <p>Manufacturing</p>
                </div>
                <div
                    className="bg-[#F2F2F2] h-[10vh] sm:h-[12vh] lg:h-[15vh] w-full sm:w-[30vw] lg:w-[20vw] text-center flex items-center justify-center hover:bg-[#BE5B23] hover:text-white cursor-pointer"
                    onClick={() => navigate("/products")}
                >
                    <p>Trading</p>
                </div>
                <div
                    className="bg-[#F2F2F2] h-[10vh] sm:h-[12vh] lg:h-[15vh] w-full sm:w-[30vw] lg:w-[20vw] text-center flex items-center justify-center hover:bg-[#BE5B23] hover:text-white cursor-pointer"
                    onClick={() => navigate("/services/fabrication-epc")}
                >
                    <p>EPC</p>
                </div>
            </div>

            {/* Vector Icon Section */}
            <div className="w-full m-10 flex justify-center items-center" style={{marginLeft:"1px"}}>
                <img
                    alt="Vector Icon"
                    src={VectorIcon}
                    className="cursor-pointer"
                    onClick={() => navigate("/home")}
                />
            </div>
        </div>
    );
};

export default CoverPage;
