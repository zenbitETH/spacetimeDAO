import React, { useState } from 'react';
import Image from 'next/image'
import car1 from '../assets/Carousel1.png'
import car2 from '../assets/Carousel2.png'
import car3 from '../assets/Carousel3.png'


const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const images = [
    car1,
    car2,
    car3
  ];

  return (
    <div className="relative overflow-hidden text-center">
      <button
        className="absolute left-0 top-0 m-4 text-white bg-gray-900 rounded-full p-2"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-0 m-4 text-white bg-gray-900 rounded-full p-2"
        onClick={handleNext}
      >
        Next
      </button>
      <Image
        className="w-full h-64 object-cover"
        src={images[currentIndex]}
        width={200}
        height={200}
        alt="Carousel Image"
      />
    </div>
  );
};

export default Carousel;