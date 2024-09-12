import React, { useState } from 'react';
import styled from "styled-components";
import MyPagePost from '../components/Common/MyPagePost';
import Navigation from '../components/Common/Navigation';
import MyPageSetting from '../components/Common/MyPageSetting';
import BookMarkBox from '../components/Common/BookMarkBox';
import BookMarkPost from '../components/Common/BookMarkPost';

const Text = styled.div`
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const TextBox = styled.div`
  width: 392px;
  height: 48px;
  padding: 16px;
`;


const BookMark = () => {


  return (
    <div>
      <BookMarkBox />
      <TextBox>
        <Text>나의 북마크</Text>
      </TextBox>
      <BookMarkPost />
      <Navigation />
    </div>
  );
};

export default BookMark;
