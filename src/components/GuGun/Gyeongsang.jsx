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
  top: 176px;
  right: 40px;
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
  margin-left: 148px;
  margin-top: 8px;
`;

const Circle = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${({ isActive }) => (isActive ? "#d9d9d9" : "#6a6d6e")};
  border-radius: 50%;
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }
`;

const Gyeongsang = ({ isVisible, isVisible2, onGuGunClick }) => {
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
                <GuGun onClick={() => onGuGunClick("거제")}>거제</GuGun>
                <GuGun onClick={() => onGuGunClick("거창")}>거창</GuGun>
                <GuGun onClick={() => onGuGunClick("경산")}>경산</GuGun>
                <GuGun onClick={() => onGuGunClick("경주")}>경주</GuGun>
                <GuGun onClick={() => onGuGunClick("고령")}>고령</GuGun>
                <GuGun onClick={() => onGuGunClick("고성")}>고성</GuGun>
                <GuGun onClick={() => onGuGunClick("구미")}>구미</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("김천")}
                  style={{ marginBottom: "0px" }}
                >
                  김천
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("김해")}>김해</GuGun>
                <GuGun onClick={() => onGuGunClick("남해")}>남해</GuGun>
                <GuGun onClick={() => onGuGunClick("문경")}>문경</GuGun>
                <GuGun onClick={() => onGuGunClick("밀양")}>밀양</GuGun>
                <GuGun onClick={() => onGuGunClick("봉화")}>봉화</GuGun>
                <GuGun onClick={() => onGuGunClick("사천")}>사천</GuGun>
                <GuGun onClick={() => onGuGunClick("산청")}>산청</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("상주")}
                  style={{ marginBottom: "0px" }}
                >
                  상주
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("성주")}>성주</GuGun>
                <GuGun onClick={() => onGuGunClick("안동")}>안동</GuGun>
                <GuGun onClick={() => onGuGunClick("양산")}>양산</GuGun>
                <GuGun onClick={() => onGuGunClick("영덕")}>영덕</GuGun>
                <GuGun onClick={() => onGuGunClick("영양")}>영양</GuGun>
                <GuGun onClick={() => onGuGunClick("영주")}>영주</GuGun>
                <GuGun onClick={() => onGuGunClick("영천")}>영천</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("예천")}
                  style={{ marginBottom: "0px" }}
                >
                  예천
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("울릉")}>울릉</GuGun>
                <GuGun onClick={() => onGuGunClick("울진")}>울진</GuGun>
                <GuGun onClick={() => onGuGunClick("의령")}>의령</GuGun>
                <GuGun onClick={() => onGuGunClick("의성")}>의성</GuGun>
                <GuGun onClick={() => onGuGunClick("진주")}>진주</GuGun>
                <GuGun onClick={() => onGuGunClick("창녕")}>창녕</GuGun>
                <GuGun onClick={() => onGuGunClick("창원")}>창원</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("청도")}
                  style={{ marginBottom: "0px" }}
                >
                  청도
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("청송")}>청송</GuGun>
                <GuGun onClick={() => onGuGunClick("칠곡")}>칠곡</GuGun>
                <GuGun onClick={() => onGuGunClick("통영")}>통영</GuGun>
                <GuGun onClick={() => onGuGunClick("포항")}>포항</GuGun>
                <GuGun onClick={() => onGuGunClick("하동")}>하동</GuGun>
                <GuGun onClick={() => onGuGunClick("함안")}>함안</GuGun>
                <GuGun onClick={() => onGuGunClick("함양")}>함양</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("합천")}
                  style={{ marginBottom: "0px" }}
                >
                  합천
                </GuGun>
              </div>

              <BarLong></BarLong>
            </Slide>
          </SwiperSlide>
        </Swiper>

        <CircleBox>
          <Circle isActive={activeIndex === 0}></Circle>
          <Circle isActive={activeIndex === 1}></Circle>
          <Circle isActive={activeIndex === 2}></Circle>
        </CircleBox>
      </GuGunBox>
    </div>
  );
};

Gyeongsang.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Gyeongsang;
