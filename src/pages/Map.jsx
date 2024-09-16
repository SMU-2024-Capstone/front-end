import React from 'react';
import Navigation from '../components/Common/Navigation';
import MapSearchBox from '../components/Common/Box_Search&Back/MapSearchBox';
import HomeMap from '../components/Common/HomeMap';

const Map = () => {
  return (
    <div>
      <MapSearchBox />
      <HomeMap />
      {/* <Navigation></Navigation> */}
    </div>
  );
};

export default Map;
