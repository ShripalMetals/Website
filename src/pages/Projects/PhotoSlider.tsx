import { useState } from 'react';
import LeftArrow from '../../assets/images/leftArrow.png'; 
import RightArrow from '../../assets/images/rightArrow.png'; 

const photos = [
  'https://via.placeholder.com/300?text=Photo+1',
  'https://via.placeholder.com/300?text=Photo+2',
  'https://via.placeholder.com/300?text=Photo+3',
  'https://via.placeholder.com/300?text=Photo+4',
];

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[60vh] mt-[5vh] ">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-[-50px] p-2 focus:outline-none"
      >
        <img src={LeftArrow} alt="Previous" className="w-12 h-16" />
      </button>

      {/* Image Display */}
      <div className="w-[90vw] h-full flex justify-center items-center overflow-hidden rounded-xl">
        <img
          src={photos[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-[-50px] p-2 focus:outline-none"
      >
        <img src={RightArrow} alt="Next" className="w-12 h-16"/>
      </button>
    </div>
  );
};

export default PhotoSlider;
