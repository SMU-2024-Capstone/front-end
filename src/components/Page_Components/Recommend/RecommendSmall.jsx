import React, { useState } from "react";
import styled from "styled-components";
import recommend_small_photo from "../../../assets/images/photo/Book/Book_1.jpg";
import bookmark from "../../../assets/icons/button/bookmark_default.svg";
import bookmark_clicked from "../../../assets/icons/button/bookmark_clicked.svg";

const SmallBox = styled.div`
  position: relative; 
  margin-top: 4px;
  margin-left: 18px;
  margin-right: 8px;
  width: 170px;
  height: 150px;
`;

const Img = styled.img`
  width: 170px;
  height: 104px;
  border-radius: 8px;
`;

const Head = styled.div`
  font-size: 12px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.4%;
  line-height: 130%;
  color: #ECEFF0;
  margin-top: 4px;
`;

const Text = styled.div`
  font-size: 10px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
  color: #D9D9D9;
`;

const BookMark = styled.button`
  position: absolute; 
  top: 4px; 
  left: 4px; 
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 10;
`;

const RecommendSmall = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <SmallBox>
      <Img src={recommend_small_photo} alt="추천 사진" />
      <BookMark onClick={toggleBookmark}>
        <img 
          src={isBookmarked ? bookmark_clicked : bookmark} 
          alt="bookMark" 
          style={{ width: '100%', height: '100%' }} 
        />
      </BookMark>
      <Head>에버랜드로 함께 떠나볼까요?</Head>
      <Text>#이길로 #용인 #카페 #술 #공연 #음식</Text>
    </SmallBox>
  );
};

export default RecommendSmall;
