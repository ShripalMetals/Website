import React, { useState } from "react";
import ClientTestimonialsImage1 from "../../assets/images/testimonials/L&Tnitro-logo.png";
import ClientTestimonialsImage2 from "../../assets/images/testimonials/sumatec-logo.png";
import ClientTestimonialsImage3 from "../../assets/images/testimonials/godrej-logo.png";
import ClientTestimonialsImage4 from "../../assets/images/testimonials/praxier-logo.png";
import ClientTestimonialsImage5 from "../../assets/images/testimonials/herdellia-logo.png";

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "It gives me immense pleasure to learn that yours is the first Support Service company in metal market in India to be ISO certified by BVQI. I wish all the best to you and your team for achieving this milestone.",
      image: ClientTestimonialsImage1,
      additionalText: "Kapil Kumar (Chief Executive)",
    },
    {
      text: "We are deeply impressed with Shripal Metal Ltd on their services and the quality of the materials which are in conformance to the International Standards. The supply of the materials was done professionally with constant expediting report and on-time delivery which has greatly assisted our project completion schedule.",
      image: ClientTestimonialsImage2,
      additionalText: "KK Khoo (Procurement Manager)",
    },
    {
      text: "We have found the quality of the materials supplied by Shripal Metal to be excellent. They have been giving us good service both in deliveries and in addressing our queries promptly.",
      image: ClientTestimonialsImage3,
      additionalText: "Manager (Purchase and Planning)",
    },
    {
      text: "We have found the material supplied by Shripal Metal to be of satisfactory quality. The spirit with which our orders were serviced was exemplary in terms of timely delivery and willingness to deliver irrespective of problems faced.",
      image: ClientTestimonialsImage4,
      additionalText: "D.P. Chakravorty (Procurement GPMM)",
    },
    {
      text: "Shripal Metal, we may state, have been able to manufacture and effect the supplies of the required pipes and fittings in record time to our satisfaction, enabling the time progress in the work of the project. The equipment fabricating with these pipes and fittings since have been in operation giving very satisfactory performance.",
      image: ClientTestimonialsImage5,
      additionalText: "B.K Gupta (General Manager)",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="mt-[137px] px-[80px] text-center" style={{ marginTop: "70px", width: "100%", height: "450px" }}>
      <h3 className="text-[24px] font-bold mb-2">Client Testimonials</h3>
      <p className="mb-4">Read what our clients say about our products and services</p>

      {/* Slider Container */}
      <div className="relative w-full" style={{ height: "350px" }}>
        {/* Testimonial Cards */}
        <div className="flex overflow-hidden" style={{ height: "100%" }}>
          {/* Left Testimonial Box */}
          <div className="w-[35%] px-4" style={{ marginTop: "31px" }}>
            <div className="bg-[#F2F2F2] relative flex flex-col justify-between items-center rounded-lg p-8 h-[300px]" style={{ marginTop: "-30px" }}>
              <p className="text-center text-sm">{testimonials[currentIndex].text}</p>
              <p className="text-center text-sm mt-2 font-bold" style={{marginBottom:"20px"}}>{testimonials[currentIndex].additionalText}</p> {/* Bold Text */}
              <img
                src={testimonials[currentIndex].image}
                alt="client"
                className="absolute bottom-[-37px] left-1/2 transform -translate-x-1/2"
                style={{
                  borderRadius: "50%",
                  width: 80,
                  height: 80,
                  objectFit: "cover", // Prevent cropping and scale the image appropriately
                }}
              />
            </div>
          </div>

          {/* Middle Testimonial Box */}
          <div className="w-[30%] px-4" style={{ marginTop: "31px" }}>
            <div className="bg-[#324664] relative flex flex-col justify-between items-center rounded-lg p-8 h-[300px]" style={{ marginTop: "-30px" }}>
              <p className="text-center text-white text-sm">{testimonials[(currentIndex + 1) % testimonials.length].text}</p>
              <p className="text-center text-white text-sm mt-2 font-bold" style={{marginBottom:"20px"}}>{testimonials[(currentIndex + 1) % testimonials.length].additionalText}</p> {/* Bold Text */}
              <img
                src={testimonials[(currentIndex + 1) % testimonials.length].image}
                alt="client"
                className="absolute bottom-[-37px] left-1/2 transform -translate-x-1/2"
                style={{
                  borderRadius: "50%",
                  width: 80,
                  height: 80,
                  objectFit: "cover", // Prevent cropping and scale the image appropriately
                }}
              />
            </div>
          </div>

          {/* Right Testimonial Box */}
          <div className="w-[35%] px-4" style={{ marginTop: "31px" }}>
            <div className="bg-[#F2F2F2] relative flex flex-col justify-between items-center rounded-lg p-8 h-[300px]" style={{ marginTop: "-30px" }}>
              <p className="text-center text-sm">{testimonials[(currentIndex + 2) % testimonials.length].text}</p>
              <p className="text-center text-sm mt-2 font-bold" style={{marginBottom:"20px"}}>{testimonials[(currentIndex + 2) % testimonials.length].additionalText}</p> {/* Bold Text */}
              <img
                src={testimonials[(currentIndex + 2) % testimonials.length].image}
                alt="client"
                className="absolute bottom-[-37px] left-1/2 transform -translate-x-1/2"
                style={{
                  borderRadius: "50%",
                  width: 80,
                  height: 80,
                  objectFit: "cover", // Prevent cropping and scale the image appropriately
                }}
              />
            </div>
          </div>
        </div>

        {/* Left and Right Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-4 rounded-full"
        >
          &#60;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-4 rounded-full"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default ClientTestimonials;
