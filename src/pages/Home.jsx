import React, { useState } from 'react';
import styled from "styled-components";
import SearchFilterBox from '../components/Common/SearchFilterBox';
import Navigation from '../components/Common/Navigation';
import HomeContents from '../components/Common/Home_Contents';
import MapButton from '../components/Common/MapButton';

const Text = styled.div`
  padding-top: 16px;
  padding-left:16px;
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 140%;
  margin-bottom: 8px;
`;



const Home = () => {
  return (
    <div>
      <SearchFilterBox></SearchFilterBox>
      <Text>이길로 추천 장소</Text>
      <HomeContents></HomeContents>
      <MapButton></MapButton>
      <Navigation></Navigation>
    </div>
  );
};


export default Home;
