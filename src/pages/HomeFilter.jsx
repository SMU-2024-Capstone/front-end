import React from 'react';
import styled from "styled-components";
import HomeFilterCategory from "../components/Common/HomeFilterCategory";
import HomeFilterBackBox from "../components/Common/HomeFilterBackBox";
import homefilter_logo from "../assets/images/logo/homefilter_logo.svg";

const Img = styled.img`
  width: 69px;
  height: 64px;
  margin-top: 52px;
  margin-left: 161px;
`;

const HomeFilter = () => {
  return (
    <div>
      <HomeFilterBackBox />
      <Img src={homefilter_logo} alt="Home Filter Logo" />
      <HomeFilterCategory />
    </div>
  );
};

export default HomeFilter;
