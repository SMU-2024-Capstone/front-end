import React, { useState } from "react";
import styled from "styled-components";
import bookmark from "../../assets/images/bookmark.svg";
import Test from "../../assets/images/photo/Test.svg";
import bookmark_clicked from "../../assets/images/bookmark_clicked.svg";
import { useNavigate } from "react-router-dom";

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

const HomeContent = ({ title, category, tag, url }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

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
      <HomePhoto src={Test} alt="Home Photo" />
      <BlurBackground />
      <TextContainer>
        <Header>
          <Head>{title}</Head>
          <BookMark onClick={toggleBookmark}>
            <img
              src={isBookmarked ? bookmark_clicked : bookmark}
              alt="bookMark"
              style={{ width: "100%", height: "100%" }}
            />
          </BookMark>
        </Header>
        <Text1>{`#${category} #${tag}`}</Text1>
      </TextContainer>
    </Container>
  );
};

export default HomeContent;
