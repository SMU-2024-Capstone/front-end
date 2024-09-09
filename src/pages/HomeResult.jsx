import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import HomeSearchIconCourseBox from '../components/Common/HomeSearchIconCourseBox';
import Navigation from '../components/Common/Navigation';
import HomeBottomSheet from '../components/Common/Home_BS';

const SearchResult = () => {
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];

  return (
    <div>
      <HomeSearchIconCourseBox />
      <Navigation></Navigation>
      <HomeBottomSheet selectedCategories={selectedCategories} />
    </div>
  );
};

export default SearchResult;
