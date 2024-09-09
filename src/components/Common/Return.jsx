import React, { useState } from 'react';
import styled from 'styled-components';
import return_default from '../../assets/images/return_default.svg';
import return_clicked from '../../assets/images/return_clicked.svg';

const ReturnBtn = styled.div`
  width: 40px;
  height: 134px;
  border-radius: 12px 0 0 12px;
  border: 1px solid #B083D3;
  border-right: none; 
  background-color: #282728;
  position: absolute;
  top: 386px; 
  bottom: 60px; 
  left: 352px; 
  filter: drop-shadow(-6px 4px 8px rgba(143, 74, 191, 0.15));
  color: #B083D3;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; 
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: ${(props) => props.disabled ? '#282728' : '#B083D3'};
    color: ${(props) => props.disabled ? '#B083D3' : '#282728'};
    border: none;
  }
`;

const Return = styled.div`
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
  color: #B083D3;
  padding-top: 50px;
  padding-left: 7px;

  ${ReturnBtn}:hover & {
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

const ReturnButton = (props) => {
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
    <ReturnBtn 
      disabled={props.disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Return>
        <Img src={hover ? return_clicked : return_default} />
        <Text disabled={props.disabled}>
          다시추천
        </Text>
      </Return>
    </ReturnBtn>
  );
};

export default ReturnButton;
