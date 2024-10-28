import React, { useState } from 'react';

// Array of image paths
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Loop through the array to find the next image
  const handleNext = () => {
    for (let i = 0; i < images.length; i++) {
      if (i === currentIndex) {
        // Move to the next image, or loop back to the first one
        let nextIndex = ((i + 1) % images.length);
        setCurrentIndex(nextIndex);
        console.log(nextIndex);
        break;
      }
    }
  };

  // Loop through the array to find the previous image
  const handlePrev = () => {
    for (let i = 0; i < images.length; i++) {
      if (i === currentIndex) {
        // Move to the previous image, or loop back to the last one
        setCurrentIndex(i === 0 ? images.length - 1 : i - 1);
        break;
      }
    }
  };

  return (
    <div>
      <button onClick={handlePrev}>←</button>
      <img src={images[currentIndex]} alt="slideshow" style={{ width: '400px', height: '300px' }} />
      <button onClick={handleNext}>→</button>

      <div>{images[currentIndex]}</div>
    </div>
  );
}

export default Slideshow;
