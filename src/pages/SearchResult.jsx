import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchIconCourseBox from '../components/Common/SearchIconCourseBox';
import Navigation from '../components/Common/Navigation';
import BottomSheet from '../components/Common/HomeFilter_BS';
import MapComponent from '../components/MapComponent';

const SearchResult = () => {
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];

  return (
    <Container>
      <MapWrapper>
        <MapComponent />
      </MapWrapper>
      <ContentWrapper>
        <SearchIconCourseBox></SearchIconCourseBox>
      </ContentWrapper>
        <BottomSheet selectedCategories={selectedCategories} />
        <Navigation />
    </Container>
  );
};

export default SearchResult;

const Container = styled.div`

`;

const MapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 100%; 
`;


