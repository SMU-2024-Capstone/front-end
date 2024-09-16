import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchIconCourseBox from '../components/Common/Box_Search&Back/SearchIconCourseBox';
import Navigation from '../components/Common/Navigation';
import ErrorBottomSheet from '../components/Page_Components/Search/Error_BS';
import HomeMap from '../components/Common/HomeMap';

const SearchError = () => {
  return (
    <Container>
      <MapWrapper>
        <HomeMap />
      </MapWrapper>
      <ContentWrapper>
        <SearchIconCourseBox />
      </ContentWrapper>
      <ErrorBottomSheet /> 
      <Navigation />
    </Container>
  );
};

export default SearchError;

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
