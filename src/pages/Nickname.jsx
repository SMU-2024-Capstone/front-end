import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Logo_lettering from "../assets/images/logo/Logo_lettering.svg";
import NextButton from '../components/Common/NextButton';
import { useNavigate } from "react-router-dom";

const SmallLogo = styled.div`
  img {
    margin-top: 52px;
    justify-content: center;
    align-items: center;
  }
`;

const BackgroundBox = styled.div`
  width: 360px;
  height: 502px;
  background: linear-gradient(${(props) => props.bgColor1}, ${(props) => props.bgColor2});
  border-radius: 12px;
  filter: drop-shadow(0px 8px 16px #282728);
  margin-top: 32px;
  margin-left: 16px;
`;

const Text = styled.div`
  padding-top: 36px;
  padding-left: 24px;
  color: #F8FAF9;
  font-size: 30px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 140%;
`;

const InputBox = styled.div`
  input {
    width: 227px;
    height: 36px;  
    margin-left: 24px;
    outline: none;
    border-width: 0 0 1px;
    background-color: transparent;
    color: #D3FF4E;
    font-size: 30px;
    font-family: "Apple-SD-GothicNeo-Medium";
    letter-spacing: -0.4%;
    line-height: 140%;

    &::placeholder {
      color: #D3FF4E;
      opacity: 40%;
    }

    &:hover {
      border-width: 0 0 1px;
    }

    &:focus {
      color: #D3FF4E;
      border-width: 0 0 1px;
    }
  }

  text {
    color: #F8FAF9;
    font-size: 30px;
    font-family: "Apple-SD-GothicNeo-Medium";
    letter-spacing: -0.4%;
    line-height: 140%;
  }
`;

const CateGoryBox = styled.div`
  width: 360px;
  height: 72px;
  background-color: #282728;
  border-radius: 12px;
  margin-top: 24px;
  margin-left: 16px;
`;

const CateGoryText = styled.div`
  padding-top: 25px;
  padding-left: 24px;
  color: #6A6D6E;
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const Nickname = () => {
  const [nickname, setNickname] = useState('');
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const handleNickname = (e) => {
    const newValue = e.target.value;
    const filteredValue = newValue.replace(/[^a-zA-Z가-힣]/g, '');

    // Set the character limit to 5
    if (filteredValue.length > 5) {
      setNickname(filteredValue.substr(0, 5));
    } else {
      setNickname(filteredValue);
    }
  };

  const handleCompositionEnd = (e) => {
    const newValue = e.target.value;
    const filteredValue = newValue.replace(/[^a-zA-Z가-힣]/g, '');

    if (filteredValue.length > 5) {
      setNickname(filteredValue.substr(0, 5));
    } else {
      setNickname(filteredValue);
    }
  };


  useEffect(() => {
    setIsActive(nickname.length === 5);
  }, [nickname]);

  const handleNextButtonClick = () => {
    if (isActive) {
      navigate("/onboarding", { state: { nickname } });
    }
  };

  return (
    <div>
      <SmallLogo>
        <img src={Logo_lettering} alt="Logo_lettering" />
      </SmallLogo>
      <BackgroundBox bgColor1="#282728" bgColor2="#0D0E10">
        <Text>나의 닉네임은</Text>
        <InputBox>
          <input 
            value={nickname}
            onChange={handleNickname}
            onCompositionEnd={handleCompositionEnd}
            id="nickname"
            placeholder='최대 5자까지'/>
          <text>입니다.</text>
        </InputBox>
      </BackgroundBox>
      <CateGoryBox>
        <CateGoryText>카테고리</CateGoryText>
      </CateGoryBox>
      <NextButton 
        disabled={!isActive}
        onClick={handleNextButtonClick}>
      </NextButton>
    </div>
  );
};

export default Nickname;
