import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import SearchIconCourseBox from '../components/Common/SearchIconCourseBox';
import Navigation from '../components/Common/Navigation';
import BottomSheet from '../components/Common/HomeFilter_BS';

const SearchResult = () => {
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];

  return (
    <div>
      <SearchIconCourseBox />
      <Navigation></Navigation>
      <BottomSheet selectedCategories={selectedCategories} />
    </div>
  );
};

export default SearchResult;
