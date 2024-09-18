import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import star_default from "../../../assets/icons/button/star_default.svg";
import star_clicked from "../../../assets/icons/button/star_clicked.svg";
import Food_2 from '../../../assets/images/photo/Food/Food_2.jpg';
import Cafe_3 from '../../../assets/images/photo/Cafe/Cafe_3.jpg';
import Drink_1 from '../../../assets/images/photo/Drink/Drink_1.jpg';
import Add_1 from '../../../assets/images/photo/Add/Add_1.jpg';
import Popup from './Popup';

const Container = styled.div`
  position: relative;
  width: 360px;
  height: 274px;
  margin-left: 16px;
  margin-bottom: 24px;
`;

const HomePhoto = styled.img`
  width: 360px;
  height: 225px;
  border-radius: 12px;
  object-fit: cover;
  position: relative;
  cursor: pointer;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 203px;
  left: 0;
  width: 360px;
  height: 71px;
  background: rgba(40, 39, 40, 0.5);
  border-radius: 0 0 12px 12px;
  filter: blur(5px);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 203px;
  left: 0;
  width: 100%;
  height: 71px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  position: relative;
`;

const Head = styled.div`
  color: #ffffff;
  font-family: "Apple-SD-GothicNeo-Bold";
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.3%;
`;

const Text1 = styled.div`
  color: #eceff0;
  font-family: "Apple-SD-GothicNeo-Light";
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.3%;
`;

const RatingNumber = styled.div`
  color: #D7FC6F;
  font-family: "Apple-SD-GothicNeo-Bold";
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.3%;
`;

const Star = styled.img`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; 
`;

const imageData = [
  {
    label: "Food_2",
    alt: "Food_2",
    src: Food_2,
    category: "식사",
  },
  {
    label: "Cafe_3",
    alt: "Cafe_3",
    src: Cafe_3,
    category: "카페",
  },
  {
    label: "Drink_1",
    alt: "Drink_1",
    src: Drink_1,
    category: "술집",
  },
  {
    label: "Add_1",
    alt: "Add_1",
    src: Add_1,
    category: "놀거리",  
  },
];

const HomeContent = ({ category, tag, url, rating: initialRating, title }) => {
  const [ratings, setRatings] = useState({}); 
  const [showPopup, setShowPopup] = useState(false); 
  const [selectedTitle, setSelectedTitle] = useState(null); 

  useEffect(() => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [title]: initialRating || 0,
    }));
  }, [initialRating, title]);

  const categoryImage = imageData.find(image => image.category === category) || {};

  const togglePopup = (title) => {
    setSelectedTitle(title);
    setShowPopup(true);
  };

  const handleClosePopup = (selectedRating) => {
    setShowPopup(false);
    setRatings((prevRatings) => ({
      ...prevRatings,
      [selectedTitle]: selectedRating,
    }));
  };

  const handleClick = (e) => {
    if (url) {
      e.stopPropagation();
      window.open(url, "_blank");
    }
  };

  const rating = ratings[title] || 0; 

  return (
    <Container>
      <HomePhoto 
        src={categoryImage.src || 'default-image.jpg'} 
        alt={categoryImage.alt || "Default Image"} 
        onClick={handleClick}
      />
      <BlurBackground />
      <TextContainer>
        <Header>
          <Head>{title}</Head>
          <RatingBox onClick={(e) => {
            e.stopPropagation(); 
            togglePopup(title);
          }}>
            <Star
              src={rating > 0 ? star_clicked : star_default}
              alt="star"
            />
            {rating > 0 && <RatingNumber>{rating}점</RatingNumber>}
          </RatingBox>
        </Header>
        <Text1>{`#${category} #${tag}`}</Text1>
      </TextContainer>

      {showPopup && 
        <Popup 
          onClose={handleClosePopup} 
          initialRating={ratings[selectedTitle] || 0}
          title={selectedTitle}
        />
      }
    </Container>
  );
};

export default HomeContent;
