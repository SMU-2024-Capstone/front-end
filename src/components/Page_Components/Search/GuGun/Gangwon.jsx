import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropTypes from "prop-types";

const BarLong = styled.div`
  border-left: 1px solid #6a6d6e;
  height: 279px;
  margin-left: 80px;
  margin-top: 4px;
`;

const GuGunBox = styled.div`
  width: 312px;
  height: 359px;
  border-radius: 12px;
  background-color: #282728;
  padding-top: 55px;
  position: absolute;
  top: 73px;
  right: 24px;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Medium";
  visibility: ${({ isVisible, isVisible2 }) =>
    isVisible && isVisible2 ? "visible" : "hidden"};
`;

const GuGun = styled.p`
  margin-bottom: 12px;
  cursor: pointer;
  color: #d9d9d9;
`;

const Slide = styled.div`
  display: flex;
`;

const CircleBox = styled.div`
  display: flex;
  margin-left: 151px;
  margin-top: 8px;
`;

const Circle1 = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${(props) => (props.isActive ? "#d9d9d9" : "#6a6d6e")};
  border-radius: 50%;
  margin-right: 4px;
`;

const Circle2 = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${(props) => (props.isActive ? "#6a6d6e" : "#d9d9d9")};
  border-radius: 50%;
`;

const Gangwon = ({ isVisible, isVisible2, onGuGunClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div>
      <GuGunBox isVisible={isVisible} isVisible2={isVisible2}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("강릉")}>강릉</GuGun>
                <GuGun onClick={() => onGuGunClick("고성")}>고성</GuGun>
                <GuGun onClick={() => onGuGunClick("동해")}>동해</GuGun>
                <GuGun onClick={() => onGuGunClick("삼척")}>삼척</GuGun>
                <GuGun onClick={() => onGuGunClick("속초")}>속초</GuGun>
                <GuGun onClick={() => onGuGunClick("양구")}>양구</GuGun>
                <GuGun onClick={() => onGuGunClick("양양")}>양양</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("영월")}
                  style={{ marginBottom: "0px" }}
                >
                  영월
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("원주")}>원주</GuGun>
                <GuGun onClick={() => onGuGunClick("인제")}>인제</GuGun>
                <GuGun onClick={() => onGuGunClick("정선")}>정선</GuGun>
                <GuGun onClick={() => onGuGunClick("철원")}>철원</GuGun>
                <GuGun onClick={() => onGuGunClick("춘천")}>춘천</GuGun>
                <GuGun onClick={() => onGuGunClick("태백")}>태백</GuGun>
                <GuGun onClick={() => onGuGunClick("평창")}>평창</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("홍천")}
                  style={{ marginBottom: "0px" }}
                >
                  홍천
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("화천")}>화천</GuGun>
                <GuGun onClick={() => onGuGunClick("횡성")}>횡성</GuGun>
              </div>

              <BarLong></BarLong>
            </Slide>
          </SwiperSlide>
        </Swiper>

        <CircleBox>
          <Circle1 isActive={activeIndex === 0}></Circle1>
          <Circle2 isActive={activeIndex === 0}></Circle2>
        </CircleBox>
      </GuGunBox>
    </div>
  );
};

Gangwon.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Gangwon;
