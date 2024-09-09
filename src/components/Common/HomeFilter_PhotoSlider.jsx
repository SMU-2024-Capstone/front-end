import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imageData from "./HomeFilter_Photo"; // 이미지 데이터 가져오기


const CarouselContainer = styled.div`
  width: 400px;
  height: 245px; /* 슬라이더 높이를 이미지 높이에 맞게 설정 */
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
  height: 245px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* 슬라이드 크기 유지 */
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
  cursor: pointer;
`;

const PhotoSlider = () => {
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(imageData)); // 랜덤으로 섞인 이미지 데이터 설정
  }, []);

  const totalSlides = shuffledImages.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <CarouselContainer>
        <SlideWrapper currentIndex={currentIndex}>
          {shuffledImages.map((image, index) => (
            <Slide key={index}>
              <Image src={image.src} alt={image.alt} />
            </Slide>
          ))}
        </SlideWrapper>
      </CarouselContainer>
      <IndicatorWrapper>
        {shuffledImages.map((_, index) => (
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
