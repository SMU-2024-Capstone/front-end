import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeSearchIconCourseBox from '../components/Common/Box_Search&Back/HomeSearchIconCourseBox';
import Navigation from '../components/Common/Navigation';
import MapComponent from '../components/Common/MapComponent';

const SearchResult = () => {
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];

  return (
    <div>
      <HomeSearchIconCourseBox />
      <MapComponent />
      <Navigation></Navigation>
    </div>
  );
};

export default SearchResult;
