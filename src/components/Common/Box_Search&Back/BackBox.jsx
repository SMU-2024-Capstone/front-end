import React from 'react';
import styled from "styled-components";
import Back from "../../../assets/icons/button/back.svg";
import { useLocation, useNavigate } from 'react-router-dom'; 



const Text = styled.div`
  color: #FFFFFF;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  font-size: 20px;
  line-height: 130%;
  margin-top: 27px;
  margin-left: 98px;
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
  margin: 16px;

  img {
    width: 24px; 
    height: 24px; 
  }
`;

const SearchBackBox = styled.div`
  display: flex;
  width: 392px;
  height: 80px;
  box-shadow: 0px 8px 8px rgba(79, 80, 82, 0.2); 
`;

const BackBox = () => {
  const navigate = useNavigate(); 


  const handleButtonClick = () => {
    navigate("/social"); 
  };
  
  return (
    <SearchBackBox>
      <BackButton onClick={handleButtonClick}> 
        <img src={Back} alt="Back" />
      </BackButton>
      <Text>알림</Text>
    </SearchBackBox>
  )
};

export default BackBox;
