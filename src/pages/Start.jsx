import styled from "styled-components";
import KaKaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";
import logo from "../assets/images/logo/Logo.svg";
import igilro from "../assets/images/logo/Logo_lettering.svg";
import login_back from "../assets/images/login_images/login_back.svg";

const StartBack = styled.div`
  text-align: center;
  width: 392px;
  height: 852px;
  background-image: url(${login_back});
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 168px;
`;

const Igilro = styled.img.attrs({
  src: igilro,
  alt: "이길로",
})`
  display: block;
  margin-top: 168px;
`;

const P = styled.p`
  color: #d9d9d9;
  font-size: 12px;
  margin-top: 12px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const Start = () => {
  return (
    <StartBack>
      <Logo src={logo} alt="로고 이미지" />
      <Igilro />
      <KaKaoLogin />
      <NaverLogin />
      <P>로그인 방법 선택</P>
    </StartBack>
  );
};

export default Start;
