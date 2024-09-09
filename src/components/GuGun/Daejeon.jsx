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

const Daejeon = ({ isVisible, isVisible2, onGuGunClick }) => {
  return (
    <div>
      <GuGunBox isVisible={isVisible} isVisible2={isVisible2}>
        <Swiper spaceBetween={0} slidesPerView={1}>
          <SwiperSlide>
            <Slide>
              <div style={{ width: "65px", marginLeft: "12px" }}>
                <GuGun onClick={() => onGuGunClick("대덕구")}>대덕구</GuGun>
                <GuGun onClick={() => onGuGunClick("동구")}>동구</GuGun>
                <GuGun onClick={() => onGuGunClick("서구")}>서구</GuGun>
                <GuGun onClick={() => onGuGunClick("유성구")}>유성구</GuGun>
                <GuGun onClick={() => onGuGunClick("중구")}>중구</GuGun>
              </div>

              <BarLong></BarLong>
            </Slide>
          </SwiperSlide>
        </Swiper>
      </GuGunBox>
    </div>
  );
};

Daejeon.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  onGuGunClick: PropTypes.func.isRequired,
};

export default Daejeon;
