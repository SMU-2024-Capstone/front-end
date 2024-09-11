import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import styled from "styled-components";

const HeadBox = styled.div`
  width: 392px;
  height: 112px;
  background-color: #0D0E10;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: #FFFFFF;
  margin-right: 16px;
  margin-left: 16px;
`;

const Nickname = styled.div`
  color: #FFFFFF;
  font-size: 20px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
`;

const Address = styled.div`
  color: #6A6D6E;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const NicknameAddressBox = styled.div`
  height: 48px;
`;

const MyPage = () => {
  const location = useLocation();
  const { nickname } = location.state || { nickname: '' };
  const navigate = useNavigate();  

  return (
    <div>
      <HeadBox>
        <Profile />
        <NicknameAddressBox>
          <Nickname>{nickname}</Nickname> <Address>abcdefg1234@naver.com</Address>
        </NicknameAddressBox>
      </HeadBox>
    </div>
  );
};

export default MyPage;
