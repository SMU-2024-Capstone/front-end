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

const Seoul = ({ isVisible, isVisible2, onGuGunClick }) => {
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
                <GuGun onClick={() => onGuGunClick("강남구")}>강남구</GuGun>
                <GuGun onClick={() => onGuGunClick("강동구")}>강동구</GuGun>
                <GuGun onClick={() => onGuGunClick("강북구")}>강북구</GuGun>
                <GuGun onClick={() => onGuGunClick("강서구")}>강서구</GuGun>
                <GuGun onClick={() => onGuGunClick("관악구")}>관악구</GuGun>
                <GuGun onClick={() => onGuGunClick("광진구")}>광진구</GuGun>
                <GuGun onClick={() => onGuGunClick("구로구")}>구로구</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("금천구")}
                  style={{ marginBottom: "0px" }}
                >
                  금천구
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("노원구")}>노원구</GuGun>
                <GuGun onClick={() => onGuGunClick("도봉구")}>도봉구</GuGun>
                <GuGun onClick={() => onGuGunClick("동대문구")}>동대문구</GuGun>
                <GuGun onClick={() => onGuGunClick("동작구")}>동작구</GuGun>
                <GuGun onClick={() => onGuGunClick("마포구")}>마포구</GuGun>
                <GuGun onClick={() => onGuGunClick("서대문구")}>서대문구</GuGun>
                <GuGun onClick={() => onGuGunClick("서초구")}>서초구</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("성동구")}
                  style={{ marginBottom: "0px" }}
                >
                  성동구
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("성북구")}>성북구</GuGun>
                <GuGun onClick={() => onGuGunClick("송파구")}>송파구</GuGun>
                <GuGun onClick={() => onGuGunClick("양천구")}>양천구</GuGun>
                <GuGun onClick={() => onGuGunClick("영등포구")}>영등포구</GuGun>
                <GuGun onClick={() => onGuGunClick("용산구")}>용산구</GuGun>
                <GuGun onClick={() => onGuGunClick("은평구")}>은평구</GuGun>
                <GuGun onClick={() => onGuGunClick("종로구")}>종로구</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("중구")}
                  style={{ marginBottom: "0px" }}
                >
                  중구
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("중랑구")}>중랑구</GuGun>
              </div>
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

Seoul.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Seoul;
