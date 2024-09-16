import React from "react";
import styled from "styled-components";
import igilro_signboard from "../assets/images/logo/igilro_signboard.svg";
import Navigation from '../components/Common/Navigation';
import RecommendSmallList from "../components/Page_Components/Recommend/RecommendSmallList";
import RecommendBigList from "../components/Page_Components/Recommend/RecommendBigList";

const Container = styled.div`
  position: relative;
  width: 392px;
  height: 852px;
`;

const Background = styled.div`
  position: absolute;
  bottom: 56px; /* bottom에서 56px 떨어지게 설정 */
  left: 0;
  width: 392px;
  height: 554px;
  background-color: #0D0E10;
  filter: drop-shadow(0 -8px 36px rgba(231, 231, 233, 0.2));
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const Img = styled.img`
  width: 160px;
  height: 316px;
  margin-top: 16px;
  margin-left: 16px;
`;

const TextContainer = styled.div`
  width: 180px;
  height: 102px;
  margin-right: 16px;
  margin-top: 74px;
  text-align: right;
`;

const HeadText = styled.div`
  color: #FFFFFF;
  font-size: 24px;
  font-family: "Yeongdo";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const HighlightedText = styled.span`
  color: #D3FF4E;
`;

const Text = styled.div`
  color: #FFFFFF;
  font-size: 24px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.4%;
  line-height: 130%;
  margin-left: 18px;
  margin-top: 24px;
`;

const Recommend = () => { 
  return (
    <Container>
      <Background>
        <Text>이번주 인기코스</Text>
        <RecommendSmallList />
        <Text>이길로 추천코스</Text>
        <RecommendBigList />
      </Background>
      <Header>
        <Img src={igilro_signboard} alt="Igilro_signboard" />
        <TextContainer>
          <HeadText>
            <HighlightedText>이길로</HighlightedText> 따라와봐!
          </HeadText>
          <HeadText>재미있는 길이</HeadText>
          <HeadText>나올 거야!</HeadText>
        </TextContainer>
      </Header>
      <Navigation />
    </Container>
  );
};

export default Recommend;
