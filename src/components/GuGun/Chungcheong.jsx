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

const Chungcheong = ({ isVisible, isVisible2, onGuGunClick }) => {
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
                <GuGun onClick={() => onGuGunClick("계룡")}>계룡</GuGun>
                <GuGun onClick={() => onGuGunClick("공주")}>공주</GuGun>
                <GuGun onClick={() => onGuGunClick("괴산")}>괴산</GuGun>
                <GuGun onClick={() => onGuGunClick("금산")}>금산</GuGun>
                <GuGun onClick={() => onGuGunClick("논산")}>논산</GuGun>
                <GuGun onClick={() => onGuGunClick("단양")}>단양</GuGun>
                <GuGun onClick={() => onGuGunClick("당진")}>당진</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("보령")}
                  style={{ marginBottom: "0px" }}
                >
                  보령
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("보은")}>보은</GuGun>
                <GuGun onClick={() => onGuGunClick("부여")}>부여</GuGun>
                <GuGun onClick={() => onGuGunClick("서산")}>서산</GuGun>
                <GuGun onClick={() => onGuGunClick("서천")}>서천</GuGun>
                <GuGun onClick={() => onGuGunClick("아산")}>아산</GuGun>
                <GuGun onClick={() => onGuGunClick("영동")}>영동</GuGun>
                <GuGun onClick={() => onGuGunClick("예산")}>예산</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("옥천")}
                  style={{ marginBottom: "0px" }}
                >
                  옥천
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("음성")}>음성</GuGun>
                <GuGun onClick={() => onGuGunClick("제천")}>제천</GuGun>
                <GuGun onClick={() => onGuGunClick("증평")}>증평</GuGun>
                <GuGun onClick={() => onGuGunClick("진천")}>진천</GuGun>
                <GuGun onClick={() => onGuGunClick("천안")}>천안</GuGun>
                <GuGun onClick={() => onGuGunClick("청양")}>청양</GuGun>
                <GuGun onClick={() => onGuGunClick("청주")}>청주</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("충주")}
                  style={{ marginBottom: "0px" }}
                >
                  충주
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("태안")}>태안</GuGun>
                <GuGun onClick={() => onGuGunClick("홍성")}>홍성</GuGun>
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

Chungcheong.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Chungcheong;
