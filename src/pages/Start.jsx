import "../App.css";
import KaKaoLogin from "./KakaoLogin";
import NaverLogin from "./NaverLogin";
import logo from "../assets/logo.svg";
import igilro from "../assets/igilro.svg";

const Start = () => {
  return (
    <div className="start">
      <img id="logo" src={logo} alt="로고 이미지" />
      <img id="igilro" src={igilro} alt="이길로" />
      <KaKaoLogin />
      <NaverLogin />
      <p>로그인 방법 선택</p>
    </div>
  );
};

export default Start;
