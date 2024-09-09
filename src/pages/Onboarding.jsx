import React from 'react';
import styled from "styled-components";
import Logo_lettering from "../assets/images/logo/Logo_lettering.svg";
import nicknameback from "../assets/images/nicknameback.svg";
import OnboardingCategory from '../components/Common/OnboardingCategory';
import { useNavigate } from "react-router-dom";  

const SmallLogo = styled.div`
  img {
    margin-top: 52px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const NicknameBox = styled.div`
  width: 360px;
  height: 72px;
  background-color: #282728;
  border-radius: 12px;
  margin-top: 24px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 24px; 
`;

const NicknameText = styled.div`
  color: #6A6D6E;
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const NicknameBackImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Onboarding = () => {
  const navigate = useNavigate();  

  const handleButtonClick = () => {
    navigate("/nickname");  
  };

  return (
    <div>
      <SmallLogo>
        <img src={Logo_lettering} alt="Logo_lettering" />
      </SmallLogo>
      <NicknameBox>
        <NicknameText>닉네임</NicknameText>
        <NicknameBackImg 
          src={nicknameback} 
          alt="Back" 
          onClick={handleButtonClick} 
        />
      </NicknameBox>
      <OnboardingCategory />
    </div>
  );
};

export default Onboarding;
