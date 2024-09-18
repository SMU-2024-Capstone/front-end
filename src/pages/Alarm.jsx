import React, { useState, useRef } from 'react';
import Navigation from '../components/Common/Navigation';
import BackBox_Alarm from '../components/Common/Box_Search&Back/BackBox_Alarm';


const Alarm = () => {

  return (
    <div>
      <BackBox_Alarm />
      <Navigation />
    </div>
  );
};

export default Alarm;
