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

const Busan = ({ isVisible, isVisible2, onGuGunClick }) => {
  return (
    <div>
      <GuGunBox isVisible={isVisible} isVisible2={isVisible2}>
        <Swiper spaceBetween={0} slidesPerView={1}>
          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("강서구")}>강서구</GuGun>
                <GuGun onClick={() => onGuGunClick("금정구")}>금정구</GuGun>
                <GuGun onClick={() => onGuGunClick("기장군")}>기장군</GuGun>
                <GuGun onClick={() => onGuGunClick("남구")}>남구</GuGun>
                <GuGun onClick={() => onGuGunClick("동구")}>동구</GuGun>
                <GuGun onClick={() => onGuGunClick("동래구")}>동래구</GuGun>
                <GuGun onClick={() => onGuGunClick("부산진구")}>부산진구</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("북구")}
                  style={{ marginBottom: "0px" }}
                >
                  북구
                </GuGun>
              </div>

              <BarLong></BarLong>

              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("사상구")}>사상구</GuGun>
                <GuGun onClick={() => onGuGunClick("사하구")}>사하구</GuGun>
                <GuGun onClick={() => onGuGunClick("서구")}>서구</GuGun>
                <GuGun onClick={() => onGuGunClick("수영구")}>수영구</GuGun>
                <GuGun onClick={() => onGuGunClick("연제구")}>연제구</GuGun>
                <GuGun onClick={() => onGuGunClick("영도구")}>영도구</GuGun>
                <GuGun onClick={() => onGuGunClick("중구")}>중구</GuGun>
                <GuGun
                  onClick={() => onGuGunClick("해운대구")}
                  style={{ marginBottom: "0px" }}
                >
                  해운대구
                </GuGun>
              </div>
            </Slide>
          </SwiperSlide>
        </Swiper>
      </GuGunBox>
    </div>
  );
};

Busan.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Busan;
