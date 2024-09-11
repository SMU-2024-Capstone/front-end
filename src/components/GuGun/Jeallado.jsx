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

const Jeallado = ({ isVisible, isVisible2, onGuGunClick }) => {
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
                <GuGun onClick={() => onGuGunClick("강진")}>강진</GuGun>
                <GuGun onClick={() => onGuGunClick("고창")}>고창</GuGun>
                <GuGun onClick={() => onGuGunClick("고흥")}>고흥</GuGun>
                <GuGun onClick={() => onGuGunClick("광양")}>광양</GuGun>
                <GuGun onClick={() => onGuGunClick("구례")}>구례</GuGun>
                <GuGun onClick={() => onGuGunClick("김제")}>김제</GuGun>
                <GuGun onClick={() => onGuGunClick("나주")}>나주</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("남원")}
                  style={{ marginBottom: "0px" }}
                >
                  남원
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("담양")}>담양</GuGun>
                <GuGun onClick={() => onGuGunClick("목포")}>목포</GuGun>
                <GuGun onClick={() => onGuGunClick("무안")}>무안</GuGun>
                <GuGun onClick={() => onGuGunClick("무주")}>무주</GuGun>
                <GuGun onClick={() => onGuGunClick("보성")}>보성</GuGun>
                <GuGun onClick={() => onGuGunClick("부안")}>부안</GuGun>
                <GuGun onClick={() => onGuGunClick("순창")}>순창</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("순천")}
                  style={{ marginBottom: "0px" }}
                >
                  순천
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("신안")}>신안</GuGun>
                <GuGun onClick={() => onGuGunClick("여수")}>여수</GuGun>
                <GuGun onClick={() => onGuGunClick("영광")}>영광</GuGun>
                <GuGun onClick={() => onGuGunClick("영암")}>영암</GuGun>
                <GuGun onClick={() => onGuGunClick("완도")}>완도</GuGun>
                <GuGun onClick={() => onGuGunClick("완주")}>완주</GuGun>
                <GuGun onClick={() => onGuGunClick("익산")}>익산</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("임실")}
                  style={{ marginBottom: "0px" }}
                >
                  임실
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("장성")}>장성</GuGun>
                <GuGun onClick={() => onGuGunClick("장수")}>장수</GuGun>
                <GuGun onClick={() => onGuGunClick("장흥")}>장흥</GuGun>
                <GuGun onClick={() => onGuGunClick("전주")}>전주</GuGun>
                <GuGun onClick={() => onGuGunClick("정읍")}>정읍</GuGun>
                <GuGun onClick={() => onGuGunClick("진도")}>진도</GuGun>
                <GuGun onClick={() => onGuGunClick("진안")}>진안</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("함평")}
                  style={{ marginBottom: "0px" }}
                >
                  함평
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("해남")}>해남</GuGun>
                <GuGun onClick={() => onGuGunClick("화순")}>화순</GuGun>
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

Jeallado.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Jeallado;
