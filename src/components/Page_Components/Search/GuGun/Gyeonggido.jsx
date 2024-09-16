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

const Gyeonggido = ({ isVisible, isVisible2, onGuGunClick }) => {
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
                <GuGun onClick={() => onGuGunClick("가평")}>가평</GuGun>
                <GuGun onClick={() => onGuGunClick("고양")}>고양</GuGun>
                <GuGun onClick={() => onGuGunClick("과천")}>과천</GuGun>
                <GuGun onClick={() => onGuGunClick("광명")}>광명</GuGun>
                <GuGun onClick={() => onGuGunClick("광주")}>광주</GuGun>
                <GuGun onClick={() => onGuGunClick("구리")}>구리</GuGun>
                <GuGun onClick={() => onGuGunClick("군포")}>군포</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("김포")}
                  style={{ marginBottom: "0px" }}
                >
                  김포
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("남양주")}>남양주</GuGun>
                <GuGun onClick={() => onGuGunClick("동두천")}>동두천</GuGun>
                <GuGun onClick={() => onGuGunClick("부천")}>부천</GuGun>
                <GuGun onClick={() => onGuGunClick("성남")}>성남</GuGun>
                <GuGun onClick={() => onGuGunClick("수원")}>수원</GuGun>
                <GuGun onClick={() => onGuGunClick("시흥")}>시흥</GuGun>
                <GuGun onClick={() => onGuGunClick("안산")}>안산</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("안성")}
                  style={{ marginBottom: "0px" }}
                >
                  안성
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("안양")}>안양</GuGun>
                <GuGun onClick={() => onGuGunClick("양주")}>양주</GuGun>
                <GuGun onClick={() => onGuGunClick("양평")}>양평</GuGun>
                <GuGun onClick={() => onGuGunClick("여주")}>여주</GuGun>
                <GuGun onClick={() => onGuGunClick("연천")}>연천</GuGun>
                <GuGun onClick={() => onGuGunClick("오산")}>오산</GuGun>
                <GuGun onClick={() => onGuGunClick("용인")}>용인</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("의왕")}
                  style={{ marginBottom: "0px" }}
                >
                  의왕
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("의정부")}>의정부</GuGun>
                <GuGun onClick={() => onGuGunClick("이천")}>이천</GuGun>
                <GuGun onClick={() => onGuGunClick("파주")}>파주</GuGun>
                <GuGun onClick={() => onGuGunClick("평택")}>평택</GuGun>
                <GuGun onClick={() => onGuGunClick("포천")}>포천</GuGun>
                <GuGun onClick={() => onGuGunClick("하남")}>하남</GuGun>
                <GuGun onClick={() => onGuGunClick("화성")}>화성</GuGun>
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

Gyeonggido.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Gyeonggido;
