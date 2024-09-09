import React from "react";
import styled from "styled-components";
import RecommendBig from "./RecommendBig";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const RecommendBigList = () => {
  return (
    <div>
      <Swiper
        spaceBetween={350} 
        slidesPerView={2} 
        loop={true}
      >
        <SwiperSlide><RecommendBig /></SwiperSlide>
        <SwiperSlide><RecommendBig /></SwiperSlide>
        <SwiperSlide><RecommendBig /></SwiperSlide>
        <SwiperSlide><RecommendBig /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RecommendBigList;
