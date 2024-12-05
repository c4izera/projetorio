// src/components/Carousel.jsx
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="prev" onClick={handlePrev}>⬅</button>
        <div className="carousel-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
        <button className="next" onClick={handleNext}>➡</button>
      </div>
    </div>
  );
};

export default Carousel;
