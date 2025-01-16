import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TataLogo from "../../assets/images/tata-logo.jpg";
import GoorejLogo from "../../assets/images/goorej-logo.png";
import JacobsLogo from "../../assets/images/jacobs-logo.png";
import LTLogo from "../../assets/images/LT-logo.png";
import MitsubushiLogo from "../../assets/images/mitsubushi-logo.png";
import HpLogo from "../../assets/images/Hp-logo.png";

const animation = { duration: 6000, easing: (t: number) => t };

const ClientsCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,  // Enable continuous looping
    renderMode: "performance",
    drag: false, // Disable drag for automatic movement
    created(s) {
      s.moveToIdx(1, true, animation); // Initially start the carousel
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation); // Move to next item smoothly
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation); // Ensure the loop continues smoothly
    },
  });

  return (
    <div className="mb-4 mt-12">
      <div className="text-center mb-6">
        <h3 className="text-4xl font-bold mb-4">Our Clients</h3>
        <p>Explore our esteemed clientele list</p>
      </div>

      {/* Train-like container: a single continuous line of images */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide flex space-x-0">
          {[TataLogo, MitsubushiLogo, LTLogo, JacobsLogo, GoorejLogo, HpLogo].map((logo, index) => (
            <img key={index} alt={`logo-${index}`} className="h-[20vh] w-auto" src={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;
