import React from 'react';
import styled from "styled-components";
import Back from "../../assets/images/icons/Back.svg";
import { useLocation, useNavigate } from 'react-router-dom'; 
import ProfileLogo from '../../assets/images/logo/ProfileLogo.svg';



const Text = styled.div`
  color: #FFFFFF;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  font-size: 20px;
  line-height: 130%;
  margin-left: 12px;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #FFFFFF;
`;

const ProfileImg = styled.img`
  width: 22px;
  height: 22px;
  margin: 9px;
`;

const SearchBackBox = styled.div`
  display: flex;
  align-items: center;
  width: 392px;
  height: 80px;
  box-shadow: 0px 8px 8px rgba(79, 80, 82, 0.2); 
  padding-top: 20px;
  padding-left: 16px;
`;

const BookMarkBox = () => {
  const navigate = useNavigate(); 


  const handleButtonClick = () => {
    navigate("/social"); 
  };
  
  return (
    <SearchBackBox>
      <Profile>
        <ProfileImg src={ProfileLogo} alt="ProfileLogo" />
      </Profile>
      <Text>닉네임님의 북마크</Text>
    </SearchBackBox>
  )
};

export default BookMarkBox;
