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

const Sejong = ({ isVisible, isVisible2, onGuGunClick }) => {
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
                <GuGun onClick={() => onGuGunClick("고운동")}>고운동</GuGun>
                <GuGun onClick={() => onGuGunClick("금남면")}>금남면</GuGun>
                <GuGun onClick={() => onGuGunClick("나성동")}>나성동</GuGun>
                <GuGun onClick={() => onGuGunClick("다정동")}>다정동</GuGun>
                <GuGun onClick={() => onGuGunClick("대평동")}>대평동</GuGun>
                <GuGun onClick={() => onGuGunClick("도담동")}>도담동</GuGun>
                <GuGun onClick={() => onGuGunClick("반곡동")}>반곡동</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("보람동")}
                  style={{ marginBottom: "0px" }}
                >
                  보람동
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("부강면")}>부강면</GuGun>
                <GuGun onClick={() => onGuGunClick("새롬동")}>새롬동</GuGun>
                <GuGun onClick={() => onGuGunClick("소담동")}>소담동</GuGun>
                <GuGun onClick={() => onGuGunClick("소정면")}>소정면</GuGun>
                <GuGun onClick={() => onGuGunClick("아름동")}>아름동</GuGun>
                <GuGun onClick={() => onGuGunClick("어진동")}>어진동</GuGun>
                <GuGun onClick={() => onGuGunClick("연기면")}>연기면</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("연동면")}
                  style={{ marginBottom: "0px" }}
                >
                  연동면
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("연서면")}>연서면</GuGun>
                <GuGun onClick={() => onGuGunClick("장군면")}>장군면</GuGun>
                <GuGun onClick={() => onGuGunClick("전동면")}>전동면</GuGun>
                <GuGun onClick={() => onGuGunClick("전의면")}>전의면</GuGun>
                <GuGun onClick={() => onGuGunClick("조치원읍")}>조치원읍</GuGun>
                <GuGun onClick={() => onGuGunClick("종촌동")}>종촌동</GuGun>
                <GuGun onClick={() => onGuGunClick("한솔동")}>한솔동</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("해밀동")}
                  style={{ marginBottom: "0px" }}
                >
                  해밀동
                </GuGun>
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

Sejong.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Sejong;
