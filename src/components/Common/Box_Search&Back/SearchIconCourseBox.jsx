import React from "react";
import styled from "styled-components";
import Back from "../../../assets/icons/button/back.svg";
import Search from "../../../assets/icons/search/search.svg";
import { useNavigate } from "react-router-dom";

const SearchButton = styled.div`
  width: 296px;
  height: 48px;
  border: 1px solid #eceff0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    color: #6a6d6e;
    font-family: "Apple-SD-GothicNeo-Medium";
    letter-spacing: -0.3%;
    line-height: 140%;
    font-size: 16px;
    margin-left: 8px;
  }

  img {
    margin: 12px;
  }
`;

const BackButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #eceff0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin: 12px;
  }
`;

const SearchBackBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 392px;
  height: 80px;
  padding-top: 16px;
  filter: drop-shadow(0 8px 8px rgba(79, 80, 82, 0.2));
  background-color: #0D0E10;
`;

const SearchIconCourseBox = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Search");
  };

  return (
    <SearchBackBox>
      <BackButton onClick={handleButtonClick}>
        <img src={Back} alt="Back" />
      </BackButton>
      <SearchButton>
        <img src={Search} alt="Search" />
        <span>나에게 맞는 코스 찾아보기</span>
      </SearchButton>
    </SearchBackBox>
  );
};

export default SearchIconCourseBox;
