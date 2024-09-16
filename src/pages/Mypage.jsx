import React, { useState } from "react";
import styled from "styled-components";
import MyPagePost from "../components/Page_Components/MyPage/MyPagePost";
import Navigation from "../components/Common/Navigation";
import MyPageSetting from "../components/Page_Components/MyPage/MyPageSetting";
import ProfileLogo from "../assets/images/logo/logo_profile.svg";

const HeadBox = styled.div`
  width: 392px;
  height: 112px;
  background-color: #0d0e10;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: #ffffff;
  margin-right: 16px;
  margin-left: 16px;
`;

const ProfileImg = styled.img`
  width: 44px;
  height: 44px;
  margin: 18px;
`;

const Nickname = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
`;

const Address = styled.div`
  color: #6a6d6e;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const NicknameAddressBox = styled.div`
  height: 48px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 196px;
  height: 22px;
  border-bottom: ${(props) => (props.active ? "1px solid #eceff0" : "none")};
`;

const ButtonText = styled.div`
  color: #eceff0;
  font-size: 14px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 129%;
  text-align: center;
  cursor: pointer;
`;

const MyPage = () => {
  const nickname = window.localStorage.getItem("nickname");
  const [activeButton, setActiveButton] = useState("post");
  const [activeTab, setActiveTab] = useState("post");

  const renderTabContent = () => {
    if (activeTab === "post") {
      return <MyPagePost />;
    }
    if (activeTab === "setting") {
      return <MyPageSetting />;
    }
    return null;
  };

  window.localStorage.getItem("nickname");

  return (
    <div>
      <HeadBox>
        <Profile>
          <ProfileImg src={ProfileLogo} alt="ProfileLogo" />
        </Profile>
        <NicknameAddressBox>
          <Nickname>{nickname}</Nickname>
          <Address>Igilro@igilro.com</Address>
        </NicknameAddressBox>
      </HeadBox>
      <ButtonContainer>
        <Button
          active={activeButton === "post"}
          onClick={() => {
            setActiveButton("post");
            setActiveTab("post");
          }}
        >
          <ButtonText>게시물</ButtonText>
        </Button>
        <Button
          active={activeButton === "setting"}
          onClick={() => {
            setActiveButton("setting");
            setActiveTab("setting");
          }}
        >
          <ButtonText>설정</ButtonText>
        </Button>
      </ButtonContainer>

      {/* 탭 내용 표시 */}
      {renderTabContent()}
      <Navigation />
    </div>
  );
};

export default MyPage;
