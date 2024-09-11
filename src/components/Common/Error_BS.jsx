import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";


export const MIN_Y = 0;
export const MAX_Y = 548;

const Wrapper = styled.div`
  position: relative;
  width: 392px;
  top: 124px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 592px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-out;
  z-index: 3;
  overflow: hidden;
`;

const Header = styled.div`
  height: 44px;
  position: relative;
  padding: 16px 0;
  cursor: grab;
`;

const Handle = styled.div`
  width: 120px;
  height: 4px;
  border-radius: 4px;
  background-color: #282728;
  margin: auto;
`;


const ErrorBottomSheet = ({ }) => {

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(MIN_Y);
  const startY = useRef(0);
  const startPos = useRef(0);
  const animationFrameId = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startY.current = e.clientY;
    startPos.current = position;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY.current;
    let newPosition = startPos.current + deltaY;

    if (newPosition < MIN_Y) newPosition = MIN_Y;
    if (newPosition > MAX_Y) newPosition = MAX_Y;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      setPosition(newPosition);
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);



  return (
    <Wrapper style={{ transform: `translateY(${position}px)` }}>
      <Header onMouseDown={handleMouseDown}>
        <Handle />
      </Header>
    </Wrapper>
  );
};

export default ErrorBottomSheet;
