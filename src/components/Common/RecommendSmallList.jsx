import React from "react";
import styled from "styled-components";
import RecommendSmall from "./RecommendSmall";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperContainer = styled.div`
  width: 392px;
  height: 137px;
`;

const RecommendSmallList = () => {
  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={150} 
        slidesPerView={3} 
        loop={true}
      >
        <SwiperSlide><RecommendSmall /></SwiperSlide>
        <SwiperSlide><RecommendSmall /></SwiperSlide>
        <SwiperSlide><RecommendSmall /></SwiperSlide>
        <SwiperSlide><RecommendSmall /></SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

export default RecommendSmallList;
