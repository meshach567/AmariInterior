import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { ArrowLeft, ChevronRight } from '../icons';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? 'carousel-slide active-slide'
                : 'carousel-slide'
            }
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              priority={false}
              className="h-auto w-full object-cover object-center"
              width={500}
              height={500}
              quality={75}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ArrowLeft />
        </button>
        <button
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
