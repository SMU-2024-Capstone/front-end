import React, { useState } from "react";
import styled from "styled-components";
import recommend_big_photo from "../../assets/images/photo/recommend_big_photo.svg";
import bookmark from "../../assets/images/bookmark.svg";
import bookmark_clicked from "../../assets/images/bookmark_clicked.svg";

const BigBox = styled.div`
  position: relative;
  margin-left: 16px;
  margin-top: 8px;
  width: 348px;
  height: 274px;
`;

const Img = styled.img`
  width: 100%; 
  height: 225px;
  border-radius: 12px;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0; 
  left: 0;
  width: 100%;
  height: 71px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

const BlurBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 71px;
  background: rgba(36, 36, 36, 0.5); 
  border-radius: 0 0 12px 12px;
  filter: blur(5px);
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 2; 
`;

const Head = styled.div`
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3px;
  line-height: 140%;
  color: #ffffff;
  margin-top: 4px;
`;

const Text = styled.div`
  font-size: 14px;
  font-family: "Apple-SD-GothicNeo-Light";
  letter-spacing: -0.3px;
  line-height: 140%;
  color: #eceff0;
`;

const BookMark = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 10; 
`;

const RecommendBig = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <BigBox>
      <Img src={recommend_big_photo} alt="BigPhoto" />
      <BlurBackground />
      <TextContainer>
        <Header>
          <Head>에버랜드로 함께 떠나볼까요?</Head>
          <BookMark onClick={toggleBookmark}>
            <img 
              src={isBookmarked ? bookmark_clicked : bookmark} 
              alt="bookMark" 
              style={{ width: '100%', height: '100%' }} 
            />
          </BookMark>
        </Header>
        <Text>#이길로 #용인 #카페 #술 #공연 #음식</Text>
      </TextContainer>
    </BigBox>
  );
};

export default RecommendBig;
