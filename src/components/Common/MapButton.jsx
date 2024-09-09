import React, { useState } from 'react';
import styled from 'styled-components';
import map_default from '../../assets/images/map_default.svg';
import map_clicked from '../../assets/images/map_clicked.svg';

const MapBtn = styled.div`
  width: 40px;
  height: 134px;
  border-radius: 12px 0 0 12px;
  border: 1px solid #D3FF4E;
  border-right: none; 
  background-color: #282728;
  position: absolute;
  top: 602px; 
  left: 352px; 
  filter: drop-shadow(-6px 4px 8px rgba(143, 74, 191, 15%));
  color: #D3FF4E;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; 
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: ${(props) => props.disabled ? '#282728' : '#D3FF4E'};
    color: ${(props) => props.disabled ? '#D3FF4E' : '#282728'};
    border: none;
  }
  z-index: 2;
`;

const Map = styled.div`
  display: flex;
  flex-direction: column; 
  position: relative;
`;

const Text = styled.div`
  font-size: 14px;
  writing-mode: vertical-lr;
  text-align: center;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 129%;
  color: #D3FF4E;
  padding-top: 50px;
  padding-left: 7px;

  ${MapBtn}:hover & {
    color: #282728;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 10px;
  top: 16px;
  right: 6px;
  bottom: 94px;
`;

const MapButton = (props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    if (!props.disabled && props.onClick) {
      props.onClick();
    }
  };

  return (
    <MapBtn 
      disabled={props.disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Map>
        <Img src={hover ? map_clicked : map_default} />
        <Text disabled={props.disabled}>
          지도보기
        </Text>
      </Map>
    </MapBtn>
  );
};

export default MapButton;
