import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import placelist_star_default from "../../../assets/icons/button/placelist_star_default.svg";
import placelist_star_clicked from "../../../assets/icons/button/placelist_star_clicked.svg";
import PopupCompleteButton from '../../Common/Button_Next&Complete/PopupCompleteButton';

const Popup = ({ onClose, place, initialRating }) => {
  const [stars, setStars] = useState(Array(5).fill(false)); 
  const [selectedRating, setSelectedRating] = useState(initialRating); // 초기 별점 설정
  const [isButtonDisabled, setIsButtonDisabled] = useState(initialRating === 0); 

  useEffect(() => {
    // 받아온 initialRating 값에 따라 별 상태를 초기화
    setStars(Array(5).fill(false).map((_, i) => i < initialRating));
    setSelectedRating(initialRating); 
    setIsButtonDisabled(initialRating === 0); 
  }, [initialRating]);

  const handleStarClick = (index) => {
    const updatedStars = stars.map((_, i) => i <= index);
    setStars(updatedStars);
    setSelectedRating(index + 1); // 선택된 별점 업데이트
    setIsButtonDisabled(false); 
  };



  const handleButtonClick = () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const requestData = {
      placename: place,
      rating: selectedRating,
    };

    console.log(requestData);
  
    fetch(`http://localhost:8080/rating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestData),
    }).finally(() => {
      onClose(selectedRating);
      console.log(selectedRating);
    });
  };

  return (
    <Container>
      <PopupContainer bgColor1="#0D0E10" bgColor2="#282728">
        <PopupContent>
          <TextContainer>
            <Text Color="#8F4ABF">{place}</Text>
            <Text Color="#ECEFF0">추천이 도움 되셨나요?</Text>
          </TextContainer>
          <Rating>
            {stars.map((isClicked, index) => (
              <Star
                key={index}
                src={isClicked ? placelist_star_clicked : placelist_star_default}
                alt={`star_${index}`}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </Rating>
          <PopupCompleteButton 
            disabled={isButtonDisabled} 
            onClick={handleButtonClick} 
            selectedRating={selectedRating}
          />
        </PopupContent>
      </PopupContainer>
    </Container>
  );
};

export default Popup;

// Styled components
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 392px;
  height: 852px;
  background: rgba(13, 14, 16, 0.5);
  z-index: 9998;
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;

const PopupContainer = styled.div`
  width: 392px;
  height: 360px;
  bottom: 0;
  background: linear-gradient(${(props) => props.bgColor1}, ${(props) => props.bgColor2});
  border-radius: 12px 12px 0 0;
  filter: drop-shadow(0px -8px 16px rgba(40, 39, 40, 1)); 
`;

const PopupContent = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 79px;
`;

const Text = styled.div`
  color: ${(props) => props.Color};
  font-family: "Apple-SD-GothicNeo-Bold";
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.3%;
`;

const Rating = styled.div`
  gap: 24px;
  margin-top: 31px;
  display: flex;
  justify-content: center;
`;

const Star = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
