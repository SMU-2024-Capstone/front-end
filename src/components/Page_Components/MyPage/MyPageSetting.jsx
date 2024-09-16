import styled from "styled-components";
import logo_setting from "../../../assets/images/logo/logo_setting.svg";

const Container = styled.div`
  width: 360px;
  border-radius: 0 0 16px 16px;
  filter: drop-shadow(0 4px 6px rgba(79, 80, 82, 0.2));
  margin-left: 16px;
  padding-bottom: 25px; 
`;

const ButtonContainer = styled.div`
  width: 332px;
  margin-left: 16px;
  margin-top: 24px;
`;

const Button = styled.div`
  width: 332px;
  height: 28px;
  margin-bottom: 12px;
  border-bottom: 1px solid #6A6D6E;
  cursor: pointer;
`;

const ButtonText = styled.div`
  color: #FFFFFF;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  font-size: 16px;
`;

const LogoutText = styled.div`
  color: #F44336;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  font-size: 16px;
`;

const QuitText = styled.div`
  width: 35px;
  height: 14px;
  margin-left: 309px;
  border-bottom: 1px solid #6A6D6E;
  color: #6A6D6E;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  font-size: 10px;
  text-align: center;
  margin-top: 12px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 216px;
  height: 208px;
  margin-left: 88px;
  margin-top: 155px;

`;

const MyPageSetting = () => {
  
  return (
    <div>
      <Container>
        <ButtonContainer>
          <Button>
            <ButtonText>이름 변경</ButtonText>
          </Button>
          <Button>
            <LogoutText>로그아웃</LogoutText>
          </Button>
        </ButtonContainer>
        <QuitText>회원탈퇴</QuitText>
      </Container>
      <LogoImg src={logo_setting} alt="logo_setting" />
    </div>
  );
};

export default MyPageSetting;
