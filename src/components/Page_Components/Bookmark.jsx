import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;  
  bottom: 0;
`;

const Bg = styled.div`
  width: 392px;
  height: 360px;
  background: linear-gradient(#0D0E10, #282728);
  border-radius: 0 12px 12px 0;
  filter: drop-shadow(0 -8px 16px #282728);
`;


const BookMark = () => {

  return (
    <Container>
      <Bg></Bg>
    </Container>
  );
};

export default BookMark;
