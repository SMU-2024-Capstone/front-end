import React from 'react';
import styled from "styled-components";
import Logo_welcome from '../assets/images/logo/Logo.svg';
import NextButtonColored from '../components/Common/NextButtonColored';
import { useNavigate } from 'react-router-dom'; 

const BackgroundBox = styled.div`
  width: 360px;
  height: 726px;
  background: linear-gradient(${(props) => props.bgColor1}, ${(props) => props.bgColor2});
  border-radius: 12px;
  filter: drop-shadow(0px 8px 16px #282728);
  margin-left: 16px;
`;

const Box = styled.div`
  padding-top: 24px;
`;

const Logo = styled.div`
  img {
    width: 208px;
    height: 200px;
    margin-top: 180px;
    margin-left: 76px;
  }
`;

const TextWrapper = styled.div`
  color: #ECEFF0;
  font-size: 36px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 120%;
  margin-top: 192px;
  margin-left: 12px;
`;

const NicknameText = styled.span`
  color: ${(props) => props.textColor};
  font-size: 36px;
  font-family: "Apple-SD-GothicNeo-Medium";
`;

const Welcome = () => {
  window.localStorage.getItem("nickname");
  const navigate = useNavigate();  

  const handleButtonClick = () => {
    console.log('Navigating to /home'); 
    navigate("/home"); 
  };

  return (
    <div>
      <Box>
        <BackgroundBox bgColor1="#282728" bgColor2="#0D0E10">
          <Logo>
            <img src={Logo_welcome} alt="Logo_welcome" />
          </Logo>
          <TextWrapper>
            <NicknameText textColor="#D3FF4E">{nickname}</NicknameText>님,
            <br />이길로에 오신 걸<br />환영합니다!
          </TextWrapper>
        </BackgroundBox>
      </Box>
      <NextButtonColored onClick={handleButtonClick} />
    </div>
  );
};

export default Welcome;
