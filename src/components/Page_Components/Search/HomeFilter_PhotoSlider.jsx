import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imageData from "./HomeFilter_Photo"; 

const CarouselContainer = styled.div`
  width: 400px;
  height: 217px; 
  overflow: hidden;
  position: relative;
  margin: auto;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const Slide = styled.div`
  width: 400px;
  height: 217px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; 
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-top: 18px;
`;

const Indicator = styled.button`
  width: 4px;
  height: 4px;
  margin: 0 4px;
  background-color: ${({ isActive }) => (isActive ? "#D9D9D9" : "#6A6D6E")};
  border: none;
  border-radius: 50%;
`;

const PhotoSlider = ({ selectedCategories = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const getRandomImagePerCategory = (categories) => {
    if (!categories || categories.length === 0) return [];

    const filteredImages = categories.map(category => {
      const categoryImages = imageData.filter(image => image.category === category);
      if (categoryImages.length > 0) {
        return categoryImages[Math.floor(Math.random() * categoryImages.length)];
      }
      return null;
    });
    return filteredImages.filter(image => image !== null);
  };

  useEffect(() => {
    const randomImages = getRandomImagePerCategory(selectedCategories);
    setSelectedImages(randomImages);
  }, [selectedCategories]);

  const totalSlides = selectedImages.length;

  useEffect(() => {
    if (totalSlides > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <CarouselContainer>
        {totalSlides > 0 ? (
          <SlideWrapper currentIndex={currentIndex}>
            {selectedImages.map((image, index) => (
              <Slide key={index}>
                <Image src={image.src} alt={image.alt} />
              </Slide>
            ))}
          </SlideWrapper>
        ) : (
          <p>No images available</p>
        )}
      </CarouselContainer>
      <IndicatorWrapper>
        {selectedImages.map((_, index) => (
          <Indicator
            key={index}
            isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </IndicatorWrapper>
    </div>
  );
};

export default PhotoSlider;
