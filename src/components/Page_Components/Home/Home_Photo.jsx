import React, { useState } from "react";
import styled from "styled-components";
import bookmark from "../../../assets/icons/button/bookmark_default.svg";
import bookmark_clicked from "../../../assets/icons/button/bookmark_clicked.svg";
import { useNavigate } from "react-router-dom";
import Food_2 from '../../../assets/images/photo/Food/Food_2.jpg';
import Cafe_3 from '../../../assets/images/photo/Cafe/Cafe_3.jpg';
import Drink_1 from '../../../assets/images/photo/Drink/Drink_1.jpg';
import Add_1 from '../../../assets/images/photo/Add/Add_1.jpg';

const Container = styled.div`
  position: relative;
  width: 360px;
  height: 274px;
  margin-left: 16px;
  margin-bottom: 24px;
  cursor: pointer;
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
  background: rgba(36, 36, 36, 50%);
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

const BookMark = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
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


const HomeContent = ({ title, category, tag, url }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const categoryImage = imageData.find(image => image.category === category);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank"); // URL로 이동
    }
  };

  return (
    <Container onClick={handleClick}>
      <HomePhoto src={Food_2} alt="Food_2" />  //Test 지워야 됨!!!
      {/* <HomePhoto src={categoryImage?.src} alt={categoryImage?.alt || "Default Image"} /> */}
      <BlurBackground />
      <TextContainer>
        <Header>
          <Head>에버랜드로 함께 떠나볼까요?</Head>
          {/* <Head>{title}</Head> */}
          <BookMark onClick={toggleBookmark}>
            <img
              src={isBookmarked ? bookmark_clicked : bookmark}
              alt="bookMark"
              style={{ width: "100%", height: "100%" }}
            />
          </BookMark>
        </Header>
        <Text1>#카테고리 #태그</Text1> //Test 지워야 됨!!!
        {/* <Text1>{`#${category} #${tag}`}</Text1> */}
      </TextContainer>
    </Container>
  );
};

export default HomeContent;
