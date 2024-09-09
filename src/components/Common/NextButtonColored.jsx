import React from 'react';
import styled from "styled-components";

const StyledNextButtonColored = styled.button`
  margin-top: 24px;
  margin-left: 16px;
  width: 360px;
  height: 54px;
  border-radius: 12px;
  border: 1px solid #ECEFF0;
  background-color: #ECEFF0;
  cursor: pointer;
  filter: drop-shadow(0px 6px 8px rgba(236, 239, 240, 30%)); 
  color: #0D0E10;
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  text-align: center;
`;

const NextButtonColored = ({ onClick }) => {
  return (
    <StyledNextButtonColored onClick={onClick}>
      다음
    </StyledNextButtonColored>
  );
};

export default NextButtonColored;
