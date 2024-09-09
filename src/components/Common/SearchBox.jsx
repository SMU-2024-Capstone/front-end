import React from 'react';
import styled from "styled-components";
import Search_grey from '../../assets/images/icons/Search_grey.svg';
import Search_black from '../../assets/images/icons/Search_black.svg';
import { useNavigate } from "react-router-dom";

const SearchButton = styled.div`
  width: 360px;
  height: 54px;
  margin-top: 24px;
  margin-left: 16px;
  border: 1px solid #ECEFF0;
  border-radius: 12px; 
  filter: drop-shadow(0 6px 8px rgba(236, 239, 240, 0.3));
  background-color: ${props => props.canProceed ? '#ECEFF0' : 'transparent'};
  cursor: ${props => props.canProceed ? 'pointer' : 'not-allowed'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  left: 16px;
  width: 18px;
  height: 18px;
`;

const Text = styled.div`
  color: ${props => props.canProceed ? '#0D0E10' : '#6A6D6E'};
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  font-size: 18px;
`;

const SearchBox = ({ canProceed, selectedCategories }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (canProceed) {
      navigate('/searchresult', { state: { selectedCategories } }); // 선택된 카테고리를 상태로 전달
    }
  };

  return (
    <SearchButton canProceed={canProceed} onClick={handleClick}>
      <Img src={canProceed ? Search_black : Search_grey} alt="Search icon" />
      <Text canProceed={canProceed}>검색하기</Text>
    </SearchButton>
  );
};

export default SearchBox;
