import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchIconCourseBox from "../components/Common/Box_Search&Back/SearchIconCourseBox";
import Navigation from "../components/Common/Navigation";
import Test_BottomSheet from "../components/Page_Components/Search/HomeFilter_BS_TEST";
import MapComponent_TEST from "../components/Common/MapComponent_TEST";

const SearchResult = () => {
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];
  const requestData = location.state?.requestData || {};
  console.log(requestData);
  const places = location.state?.places || {};
  const lng = location.state?.lng || {};
  const lat = location.state?.lat || {};
  const route = location.state?.route || {};
  const link = location.state?.link || {};

  return (
    <Container>
      <MapWrapper>
        <MapComponent_TEST 
          selectedCategories={selectedCategories} 
          lng={lng}
          lat={lat}
          link={link}
          />
      </MapWrapper>
      <ContentWrapper>
        <SearchIconCourseBox></SearchIconCourseBox>
      </ContentWrapper>
      <Test_BottomSheet
        selectedCategories={selectedCategories}
        requestData={requestData}
        places={places}
        route={route}
      />
      {/* <Navigation /> */}
    </Container>
  );
};

export default SearchResult;

const Container = styled.div``;

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
