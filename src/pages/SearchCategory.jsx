import React, { useState } from 'react';
import styled from "styled-components";
import Category from '../components/Common/Category';

const BigText = styled.div`
  margin-top: 36px;
  margin-left: 24px;
  color: #ECEFF0;
  text-align: left;
  font-size: 20px;
  font-family: "GothicA1-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
`;

const Smalltext = styled.div`
  margin-left: 24px;
  color: #D9D9D9;
  text-align: left;
  font-size: 16px;
  font-family: "GothicA1-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;


const SearchCategory = () => {
  return (
    <div>
      <BigText>카테고리를 선택해 주세요.</BigText>
      <Smalltext>최소 2개 이상 최대 4개 이하</Smalltext>
      <Category></Category>
    </div>
  );
};

export default SearchCategory;
