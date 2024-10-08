import React from 'react';
import styled from "styled-components";
import Back from "../../../assets/icons/button/back.svg";
import { useLocation, useNavigate } from 'react-router-dom'; 


const SearchButton = styled.div`
  width: 296px;
  height: 48px;
  border: 1px solid #ECEFF0;
  border-radius: 12px; 
`;

const Text = styled.div`
  color: #6A6D6E;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  font-size: 16px;
  margin-top: 14px;
  margin-left: 12px;
  line-height: 140%;
`;

const BackButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #ECEFF0;
  border-radius: 12px; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 24px; 
    height: 24px; 
  }
`;

const SearchBackBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 392px;
  height: 80px;
  padding-top: 16px;
  box-shadow: 0px 8px 8px rgba(79, 80, 82, 0.2); 
`;

const HomeFilterBackBox = () => {
  const navigate = useNavigate(); 


  const handleButtonClick = () => {
    navigate("/home"); 
  };
  
  return (
    <SearchBackBox>
      <BackButton onClick={handleButtonClick}> 
        <img src={Back} alt="Back" />
      </BackButton>
      <SearchButton>
        <Text>취향 카테고리를 선택해 주세요!</Text>
      </SearchButton>
    </SearchBackBox>
  )
};

export default HomeFilterBackBox;
