import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; // Import Swiper type
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles

import ContactFooter from "../../common/components/ContactFooter";
import AboutUsCsr1 from "../../assets/images/aboutUsCsr1.png";
import AboutUsCsr2 from "../../assets/images/aboutUsCsr2.png";
import AboutUsCsr3 from "../../assets/images/aboutUsCsr3.png";
import AboutUsCsrVideo from "../../assets/videos/aboutUsCsrVideo.mp4";

const CSR = () => {
  // State to manage text content based on the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Text content corresponding to each slide
  const slideText = [
    "Raised USD 40,000 by Organizing and Managing Jagjit Singh Ghazal Concert in association with Red Cross India for Rehabilitation of Tsunami Victims during college days. Co-Organized a team of 10 people and volunteered with Red Cross for Relief Operation during Maharashtra Floods and distributed food packets, medicines to the victims.",
    "Constructed a First Generation School for Underprivileged kids in Village - Akodia, District - Jalore, State - Rajasthan. India",
    "Constructed 6 houses and 3 store wells in Association with Carnegie Mellon (SIFE) Students and Eckerd College, Florida USA, Conducted prior research and survey to locate the genuine needy and led the whole team of 40 volunteers over a period of 1 month in Ghoniya Village, Chautan - District of Barmer, Rajasthan. Beneficiary: Houses: 2-Physically Handicapped & 4-widows 3 Store wells: 2-Local Community and 1-Animal Welfare."
  ];

  return (
    <div className="px-[40px] py-[80px]">
      <div className="flex flex-col lg:flex-row gap-[50px] justify-between items-center">
        <div className="w-full lg:w-[50%] text-[#BD191B] text-right font-bold">
          <div className="text-[50px] lg:text-[95px]">Koshish</div>
          <div className="text-[18px] lg:text-[45px]">...An Attempt</div>
        </div>
        <div className="w-full lg:w-[60vw] h-[70vh]">
          <video autoPlay loop muted className="w-full h-full">
            <source src={AboutUsCsrVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="mt-[75px] flex flex-col lg:flex-row gap-[10vw] justify-evenly items-center">
        <div className="w-full lg:w-[35vw] h-[50vh]">
          <img className="w-full h-full object-cover" alt="" src={AboutUsCsr1} />
        </div>
        <div className="w-full lg:w-[50%] text-[16px] lg:text-[26px]">
          <p className="mb-3">
            A philanthropic organization founded by Promoters of Shripal Metal Ltd with an aim and objective to make maximum
            positive impact on the social community service, be it in any domain irrespective of caste, creed, and culture.
            Koshish an attempt was founded on the premise of doing real ground work.
          </p>
        </div>
      </div>

      <div className="mt-[75px] flex flex-col lg:flex-row gap-[50px] justify-evenly items-center">
        <div className="w-full lg:w-[50%] text-[16px] lg:text-[26px]">
          <h3 className="text-[20px] lg:text-[30px] font-semibold pb-3 mb-3">
            <span className="border-b-2 pb-3 pr-4 border-[#BD191B]">
              Mehta Hospital Charitable Trust
            </span>
          </h3>
          <p className="mb-3">
            Promoters of Shripal Metal Ltd also run a not-for-profit hospital with 120 beds in the District of Jalore, Rajasthan.
          </p>
        </div>
        <div className="w-full lg:w-[40vw] h-[60vh] mt-[10vh]" style={{ marginTop: "10px" }}>
          <img className="w-full h-full object-cover" alt="" src={AboutUsCsr2} />
        </div>
      </div>

      {/* Image Slider/Carousel Section */}
      <div className="mt-[75px]">
        <div className="flex justify-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 500 }}
            pagination={{ clickable: true }}
            navigation
            className="w-[80%] lg:w-[60%]"
            onSlideChange={(swiper: SwiperType) => setActiveSlide(swiper.activeIndex)}  // Typing the 'swiper' parameter
          >
            <SwiperSlide>
              <img className="w-full h-[300px] lg:h-[500px] object-cover" alt="CSR Image 1" src={AboutUsCsr2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-[300px] lg:h-[500px] object-cover" alt="CSR Image 2" src={AboutUsCsr3} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-[300px] lg:h-[500px] object-cover" alt="CSR Image 3" src={AboutUsCsr1} />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Display text below the slider */}
        <div className="flex justify-center mt-4">
          <div className="w-full lg:w-[60%] text-center">
            <p className="text-[14px] lg:text-[20px]">
              {slideText[activeSlide]} {/* Display corresponding text based on the active slide */}
            </p>
          </div>
        </div>
        
        {/* Additional Content */}
        {/* <div className="flex justify-center mt-10">
          <div className="w-full lg:w-[60%]">
            <p className="mb-3 text-[14px] lg:text-[16px]">
              Raised USD 40,000 by Organizing and Managing Jagjit Singh Ghazal Concert in association with Red Cross India
              for Rehabilitation of Tsunami Victims during college days. Co-Organized a team of 10 people and volunteered with
              Red Cross for Relief Operation during Maharashtra Floods and distributed food packets, medicines to the victims.
            </p>
          </div>
        </div> */}
      </div>

      <ContactFooter />
    </div>
  );
};

export default CSR;
